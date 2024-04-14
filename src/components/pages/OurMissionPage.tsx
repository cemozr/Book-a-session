import {
  Avatar,
  Container,
  List,
  ListItem,
  Typography,
  Box,
} from "@mui/material";
import { MISSIONS } from "../../dummy-missions";

export const OurMissionPage = () => {
  return (
    <Container maxWidth={"xl"}>
      <Typography variant="h4" sx={{ marginTop: "3rem", marginBottom: "1rem" }}>
        Our Mission is Your Success
      </Typography>
      <List>
        {MISSIONS.map((mission, i) => {
          return (
            <ListItem key={i} sx={{ marginBottom: "4rem" }}>
              <Avatar src={mission.img} />
              <Box marginLeft={3}>
                <Typography variant="h6" marginBottom={1}>
                  {mission.title}
                </Typography>
                <Typography variant="body1">{mission.desc}</Typography>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
