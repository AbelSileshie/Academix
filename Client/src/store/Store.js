import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storageSession from "redux-persist/lib/storage/session";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// import { apiSlice } from "./api/apiSlice";
import authReducer from "../Features/auth/authSlice";

// Define the root reducer with all reducers combined
const rootReducer = combineReducers({
  //   [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage: storageSession, // Using session storage
  whitelist: ["auth"], // Choose which reducers to persist, here only 'auth'
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       serializableCheck: {
  //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //       },
  //     }).concat(apiSlice.middleware),
  devTools: true,
});

export const persistor = persistStore(store);
