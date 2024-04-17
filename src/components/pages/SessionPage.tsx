import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Session } from "../session/Session";

export const SessionPage = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth={"lg"}>
      <Button
        onClick={() => navigate("/browse-sessions")}
        sx={{
          marginY: "1rem",
        }}
      >
        Go Back
      </Button>
      <Session />
    </Container>
  );
};
