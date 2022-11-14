import { configureStore } from "@reduxjs/toolkit";
import InfoReducer from "./infoSlice";

export const store = configureStore({
  devTools: true,
  reducer: {
    info: InfoReducer,
  },
});
