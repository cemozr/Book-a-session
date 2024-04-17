import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { SESSIONS } from "../../dummy-sessions";
import { Link as RouterLink } from "react-router-dom";

export type SessionType = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

const LinkSx = {
  color: "#333def",
  width: "100%",
  height: "100%",
  padding: ".5rem",
};

export const BrowseSessionPage = () => {
  return (
    <Container
      maxWidth={"lg"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "2rem",
      }}
    >
      <Box width={"100%"}>
        <Typography variant="h6" marginTop={2}>
          Available mentoring sessions
        </Typography>
        <Typography variant="body1" marginTop={0.5} marginBottom={2}>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for you
        </Typography>
      </Box>
      <Grid
        container
        // gap={8}
        spacing={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {SESSIONS.map((session: SessionType) => {
          return (
            <Grid key={session.id} item md={4}>
              <Card>
                <CardMedia component="img" src={session.image} />
                <CardContent>
                  <Typography variant="h5" marginBottom={1}>
                    {session.title}
                  </Typography>
                  <Typography variant="body1" color={"primary.dark"}>
                    {session.summary}
                  </Typography>
                </CardContent>
                <CardActions sx={{ padding: "0" }}>
                  <Button
                    sx={{
                      width: "100%",
                      padding: "0",
                      "&:hover": { fontSize: "3rem" },
                    }}
                  >
                    <Link
                      component={RouterLink}
                      to={`session/${session.id}`}
                      underline="none"
                      sx={LinkSx}
                    >
                      Learn More
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
