import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const REGISTER_URL =
  "https://sour-curtain-production.up.railway.app/api/v1/auth/register";

const LOGIN_URL =
  "https://sour-curtain-production.up.railway.app/api/v1/auth/login";

export const registerUser = createAsyncThunk(
  "userData/registerUser",
  async (userInfo) => {
    const data = await fetch(REGISTER_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    const json = await data.json();
    return json;
  }
);

export const loginUser = createAsyncThunk(
  "userData/loginUser",
  async (walletId) => {
    const data = await fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ walletAddress: walletId }),
    });
    const json = await data.json();
    return json;
  }
);

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    walletAdd: null,
    firstName: null,
    lastName: null,
    userId: null,
    registerStatus: "idle",
    loginStatus: "idle",
  },
  reducers: {
    updateWalletAddress: (store, action) => {
      store.walletAdd = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(registerUser.pending, (state) => {
        state.registerStatus = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.registerStatus = "succeeded";
        console.log(action.payload);
      })
      .addCase(registerUser.rejected, (state) => {
        state.registerStatus = "failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loginStatus = "succeeded";
        console.log(action.payload);
        state.userId = action.payload.user.userId;
        state.firstName = action.payload.user.firstName;
        state.lastName = action.payload.user.lastName;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginStatus = "failed";
      });
  },
});

export const { updateWalletAddress } = userDataSlice.actions;
export default userDataSlice.reducer;

export const loginStatus = (state) => state.loginStatus;
export const registerStatus = (state) => state.registerStatus;
export const userId = (state) => state.userData.userId;
