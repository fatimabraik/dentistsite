import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    contact: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
export const { contact, logout } = UserSlice.actions;
export const selectUser = (state) => state.user.user;
export default UserSlice.reducer;
