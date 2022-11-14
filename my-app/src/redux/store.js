import { configureStore } from "@reduxjs/toolkit";
import { loadState, setcartItems } from "utils/functions";
import InfoReducer from "./infoSlice";

export const store = configureStore({
  devTools: true,
  preloadedState: loadState(),
  reducer: {
    info: InfoReducer,
  },
});

store.subscribe(() => {
  setcartItems({
    info: store.getState().info,
  });
});
