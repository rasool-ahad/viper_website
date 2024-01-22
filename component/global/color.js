import { createTheme } from "@mui/material/styles";

const textTheme = createTheme({
  direction: "rtl",
  palette: {
    digi: {
      main: "#cbe4eb",
      dark: "#cbe4eb",
      light: "#cbe4eb",
    },
    digigrey: {
      main: "#a4a6b4",
      dark: "#a4a6b4",
      contrastText: "#a4a6b4",
      light: "#a4a6b4s",
    },
    primary: {
      main: "#424BFB",
      dark: "#424BFB",
      light: "#424BFB",
    },
    whiteNo: {
      light: "#fff",
      main: "#fff",
      dark: "#fff",
      contrastText: "#fff",
    },
    chipsLight: {
      main: "#E9ECF3",
      dark: "#E9ECF3",
      contrastText: "#999CA6",
      light: "#E9ECF3",
    },
    buttonsLight: {
      main: "#E9ECF3",
      dark: "#E9ECF3",
      contrastText: "#000",
      light: "#E9ECF3",
    },
    chipsDark: {
      main: "#9396A4",
      dark: "#9396A4",
      contrastText: "#fff",
      light: "#9396A4",
    },
    iconButtonsLight: {
      main: "#9C9CA6",
      dark: "#9C9CA6",
      contrastText: "#9C9CA6",
      light: "#9C9CA6",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "1px solid #cbe4eb",
            borderRadius: "8px",
            fontSize: "84px",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "& fieldset": {
            border: "1px solid #cbe4eb",
            borderRadius: "8px",
            minHeight: "63px",
            maxHeight: "63px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          "& fieldset": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "yekanRegular",
  },
});

export default textTheme;
