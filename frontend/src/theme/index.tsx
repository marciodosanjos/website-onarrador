import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: "100vh",
          "& #__next": {
            height: "100%"
          }
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "black",
        }
      }
    },

    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    }
  },

  typography: {
    fontFamily: ["Times New Roman", "Helvetica", "Arial", "sans-serif"].join(
      ","
    ),
    h1: {
      lineHeight: 1,
      fontWeight: 'bold',
      "&:hover": {
        color: "#5c6e6e"
      }
    },
    h2: {
      lineHeight: 1,
      fontWeight: 'bold',
      "&:hover": {
        color: "#5c6e6e"
      }
    },
    h4: {
      lineHeight: 1,
      fontWeight: 'bold',
       "&:hover": {
            color: "#5c6e6e"
          }
    },
    h5: {
      lineHeight: 1,
      fontWeight: 'bold',
       "&:hover": {
            color: "#5c6e6e"
          }
    },
    body2: {
      fontSize: '1em'
    },
    body1: {
      fontSize: '1.2em'
    }
  },
  palette: {
    primary: {
      main: "#331b3b ",
      dark: "#320139",
      contrastText: "white"
    },
    secondary: {
      main: "#320139",
      dark: "#333e50",
      light: "#5c6e6e "
    }
  }
});
