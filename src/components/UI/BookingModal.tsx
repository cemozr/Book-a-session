import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { BookSession } from "../session/BookSession";
import { type SessionType } from "../pages/BrowseSessionsPage";

type BookingModalProps = {
  currentSession: SessionType;
};
export const BookingModal = ({ currentSession }: BookingModalProps) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Book Session
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Book Session</DialogTitle>
        <DialogContent>
          <DialogContentText color={"whitesmoke"}>
            To book this session, please enter your name and email address.
          </DialogContentText>
          <BookSession
            currentSession={currentSession}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
