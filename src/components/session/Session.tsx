import { useParams } from "react-router-dom";
import { SESSIONS } from "../../dummy-sessions";
import { Button, Box, Typography, Paper } from "@mui/material";
import { type SessionType } from "../pages/BrowseSessionsPage";

export const Session = () => {
  const { sessionId } = useParams<string>();
  const chosenSessions: SessionType[] = SESSIONS.filter(
    (session: SessionType) => {
      if (session.id === sessionId) {
        return session;
      }
    }
  );
  const currentSession: SessionType = chosenSessions[0];

  return (
    <Box>
      <Box display={"flex"} gap={4}>
        <Box
          component={"img"}
          src={currentSession.image}
          maxWidth={"20rem"}
          borderRadius={".5rem"}
        ></Box>
        <Box>
          <Typography variant="h4">{currentSession.title}</Typography>
          <Typography variant="body1" marginY=".5rem">
            {currentSession.date}
          </Typography>
          <Typography marginY="1rem">{currentSession.summary}</Typography>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#FCD253",
              },
            }}
          >
            Book Session
          </Button>
        </Box>
      </Box>
      <Paper
        sx={{ marginY: "1rem", backgroundColor: "#FCD253", padding: "1rem" }}
      >
        <Typography variant="body1" color={"primary.dark"}>
          {currentSession.description}
        </Typography>
      </Paper>
    </Box>
  );
};
