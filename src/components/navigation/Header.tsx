import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { Padding } from "@mui/icons-material";

const LinkSx = {
  fontSize: "1.3rem",
  padding: ".5rem",
  "&:hover": {
    color: "primary.dark",
    fontSize: "1.5rem",
  },
};

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
            fontWeight={"bold"}
            color={"primary"}
          >
            React Mentoring
          </Typography>

          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            minWidth={"26rem"}
            minHeight={"4rem"}
          >
            <Link to="/" component={RouterLink} underline="none" sx={LinkSx}>
              Our Mission
            </Link>
            <Link
              to="/browse-sessions"
              component={RouterLink}
              underline="none"
              sx={LinkSx}
            >
              Browse Sessions
            </Link>
            <Link
              to="/upcoming-sessions"
              component={RouterLink}
              underline="none"
              sx={LinkSx}
            >
              Upcoming Sessions
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
