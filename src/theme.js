import { createTheme } from "@mui/material";
import { WeatherBG } from "./assets/images";

const theme = createTheme({
  palette: {
    themePrimary: "#242526",
    themeSecondary: "#fff",
    themeLight: "#18191a",
    neutralWhite: "#e4e6eb",
    neutralBlack: "#000000",

    // themePrimary: "#E07A5F",
    // themeSecondary: "#F4F1DE",
    // themeLight: "#E0E0E0",
    // neutralWhite: "#FFFFFF",
    // neutralBlack: "#000000",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: "#F4F1DE",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          "&.MuiAutocomplete-root .MuiOutlinedInput-root .MuiAutocomplete-input":
            {
              padding: "0 10px",
              color: "#F4F1DE",
              fontSize: "12px",
              fontWeight: 400,
            },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "30px",
          padding: "0px",
          "&.MuiAutocomplete-inputRoot": {
            padding: 0,
          },
          "& .MuiAutocomplete-endAdornment": {
            top: "unset",
            "& .MuiSvgIcon-root": {
              fill: "#F4F1DE",
            },
          },
          "&:hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#F4F1DE !important",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        // root: {
        //   "&:hover & .MuiOutlinedInput-notchedOutline": {},
        // },
        notchedOutline: {
          borderColor: "#F4F1DE",
          borderRadius: "5px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#ffec00",
          fontSize: "2rem",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Roboto",
        },
        h1: {
          fontSize: "38px",
          fontWeight: 500,
        },
        h2: {
          fontSize: "30px",
          fontWeight: 400,
        },
        h3: {
          fontSize: "24px",
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
