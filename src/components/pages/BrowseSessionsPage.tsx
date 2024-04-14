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
} from "@mui/material";
import { SESSIONS } from "../../dummy-sessions";

export const BrowseSessionPage = () => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box width={"83%"}>
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
        gap={8}
        sx={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {SESSIONS.map((session) => {
          return (
            <Grid key={session.id} item md={3}>
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
                <CardActions>
                  <Button>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
