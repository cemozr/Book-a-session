import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    addSession: (state, action: PayloadAction<Session>) => {
      if (state.sessions.some((session) => session.id === action.payload.id)) {
        return;
      } else {
        state.sessions = state.sessions.concat(action.payload);
      }
    },
    deleteSession: (state, action: PayloadAction<Session>) => {
      const filteredSessions: Session[] = state.sessions.filter((session) => {
        return session.id !== action.payload.id;
      });

      state.sessions = filteredSessions;
    },
  },
});

export default SessionsSlice.reducer;
export const { addSession, deleteSession } = SessionsSlice.actions;
