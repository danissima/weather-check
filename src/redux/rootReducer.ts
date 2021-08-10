import { combineReducers } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

export const rootReducer = combineReducers({
  app: appSlice
})

export type RootState = ReturnType<typeof rootReducer>