import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#333def",
    },
    secondary: {
      main: "#fcc729",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontWeight: "bold",
          color: "#FCD253",
        },
        h5: {
          fontWeight: "bold",
          color: "#333def",
        },
        h6: {
          fontWeight: "bold",
          color: "#FCD253",
        },
        body1: {
          color: "whitesmoke",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          backgroundColor: "#fcc729",
        },
      },
    },

    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: "#FCD253",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontWeight: "bold",
          fontSize: "large",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "10rem",
          height: "10rem",
        },
      },
    },
  },
});
