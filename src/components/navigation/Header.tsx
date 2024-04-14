import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
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
            minWidth={"25rem"}
          >
            <Link to="/" component={RouterLink} underline="hover">
              Our Mission
            </Link>
            <Link
              to="/browse-sessions"
              component={RouterLink}
              underline="hover"
            >
              Browse Sessions
            </Link>
            <Link
              to="/upcoming-sessions"
              component={RouterLink}
              underline="hover"
            >
              Upcoming Sessions
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
