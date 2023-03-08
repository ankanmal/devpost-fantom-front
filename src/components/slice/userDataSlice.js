import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const REGISTER_URL =
  "https://sour-curtain-production.up.railway.app/api/v1/auth/register";

const LOGIN_URL =
  "https://sour-curtain-production.up.railway.app/api/v1/auth/login";

const SEND_SKILLS =
  "https://sour-curtain-production.up.railway.app/api/v1/skill/user";

const GET_SKILLS =
  "https://sour-curtain-production.up.railway.app/api/v1/skill/user";
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

export const sendSkills = createAsyncThunk(
  "userData/sendSkills",

  async ({ values, tok }) => {
    const data = await fetch(SEND_SKILLS, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${tok}`,
      },
      body: JSON.stringify(values),
    });
    const json = await data.json();
    return json;
  }
);

export const getSkillsOfUser = createAsyncThunk(
  "userData/getSkillsOfUser",

  async (token) => {
    const data = await fetch(GET_SKILLS, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
    token: null,
    skills: null,
    registerStatus: "idle",
    loginStatus: "idle",
    sendSkillStatus: "idle",
    getSkillStatus: "idle",
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
        state.userId = action.payload.user.userId;
        state.firstName = action.payload.user.firstName;
        state.lastName = action.payload.user.lastName;
        state.token = action.payload.token;
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
        state.userId = action.payload.user?.userId;
        state.firstName = action.payload.user?.firstName;
        state.lastName = action.payload.user?.lastName;
        state.token = action.payload?.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginStatus = "failed";
      })
      .addCase(sendSkills.pending, (state) => {
        state.sendSkillStatus = "loading";
      })
      .addCase(sendSkills.fulfilled, (state, action) => {
        state.sendSkillStatus = "succeeded";

        state.skills = action.payload.skills?.skills;
      })
      .addCase(sendSkills.rejected, (state) => {
        state.sendSkillStatus = "failed";
      })
      .addCase(getSkillsOfUser.pending, (state) => {
        state.getSkillStatus = "loading";
      })
      .addCase(getSkillsOfUser.fulfilled, (state, action) => {
        state.getSkillStatus = "succeeded";

        state.skills = action.payload.skills?.skills || [];
      })
      .addCase(getSkillsOfUser.rejected, (state) => {
        state.getSkillStatus = "failed";
      });
  },
});

export const { updateWalletAddress } = userDataSlice.actions;
export default userDataSlice.reducer;

export const userId = (state) => state.userData.userId;
export const firstName = (state) => state.userData.firstName;
export const lastName = (state) => state.userData.lastName;
export const skills = (state) => state.userData.skills;
export const walladd = (state) => state.userData.walletAdd;
export const token = (state) => state.userData.token;
