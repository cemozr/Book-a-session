import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type User = {
  name: string;
  email: string;
};
const initialState: User = {
  name: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export default userSlice.reducer;
export const { getUser } = userSlice.actions;
