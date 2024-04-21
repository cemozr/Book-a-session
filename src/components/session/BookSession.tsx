import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { addSession } from "../../states/slices/sessionSlice";
import { getUser } from "../../states/slices/userSlice";
import { SessionType } from "../pages/BrowseSessionsPage";
import { type FormEvent } from "react";

type BookSessionProps = {
  currentSession: SessionType;
  handleClose: () => void;
};
type bookingDataType = {
  name: string;
  email: string;
};

export const BookSession = ({
  handleClose,
  currentSession,
}: BookSessionProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as bookingDataType;
    dispatch(getUser(data));
    dispatch(addSession(currentSession));

    console.log(data);
    handleClose();
  };

  console.log(currentSession);
  const dispatch = useDispatch();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="name"
          label="Your Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          required
          margin="dense"
          id="email"
          name="email"
          label="Your Email"
          type="email"
          fullWidth
          variant="standard"
        />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">asdasd</Button>
        </DialogActions>
      </form>
    </>
  );
};
