import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../slice/userDataSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};
const persistedReducer = persistReducer(persistConfig, userDataSlice);

export const store = configureStore({
  reducer: {
    userData: persistedReducer,
  },
});

export const persistor = persistStore(store);
