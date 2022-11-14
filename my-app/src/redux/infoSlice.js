import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    setUser: (state, action) => ({
      user: action.payload,
    }),
  },
});

export default infoSlice.reducer;
export const { setUser } = infoSlice.actions;
