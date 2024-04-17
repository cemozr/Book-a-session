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
          backgroundColor: "#fcc729",
          "&:hover": {
            backgroundColor: "#FCD253",
            color: "#232AA7",
          },
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
          minHeight: "10rem",
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: "#333def",
        },
      },
    },

    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "whitesmoke",
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
