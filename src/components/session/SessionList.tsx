import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
import {
  Avatar,
  Container,
  List,
  ListItem,
  Box,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export const SessionList = () => {
  const sessionsList = useSelector(
    (state: RootState) => state.sessionReducer.sessions
  );
  const userName = useSelector((state: RootState) => state.userReducer.name);
  return (
    <Container maxWidth={"md"}>
      <Paper sx={{ backgroundColor: "secondary.main", marginTop: "2rem" }}>
        {sessionsList.length == 0 ? (
          <Typography variant="h5" textAlign={"center"}>
            You don't have any upcoming sessions. Check our sessions and book
            some!
          </Typography>
        ) : (
          <List>
            <Typography variant="h5" textAlign={"center"}>
              Hey! {userName} Your Upcoming Sessions Are Here.
            </Typography>
            {sessionsList.map((session) => {
              return (
                <ListItem key={session.id}>
                  <Box
                    sx={{
                      backgroundColor: "primary.main",
                      width: "100%",
                      borderRadius: ".3rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <Avatar
                        sx={{ maxWidth: "5rem", maxHeight: "5rem" }}
                        src={session.image}
                      />
                      <Box>
                        <Typography>{session.title}</Typography>
                        <Typography>{session.summary}</Typography>
                        <Typography>{session.date}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          backgroundColor: "primary.main",
                          "&:hover": { backgroundColor: "primary.main" },
                        }}
                      >
                        <DeleteIcon
                          color="secondary"
                          fontSize="large"
                          sx={{
                            "&:hover": {
                              color: "secondary.light",
                              fontSize: "3rem",
                            },
                          }}
                        />
                      </Button>
                    </Box>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        )}
      </Paper>
    </Container>
  );
};
