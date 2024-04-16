import { createSlice } from "@reduxjs/toolkit";

type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};
type Sessions = {
  sessions: Session[];
};

const initialState: Sessions = {
  sessions: [],
};

const SessionsSlice = createSlice({
  name: "sessions",
  initialState,
  reducers: {},
});

export default SessionsSlice.reducer;
