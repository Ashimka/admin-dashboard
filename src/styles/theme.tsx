import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";

export const DrawerWidth = 250;

export const Colors = {
  primary: "#5f2c3e",
  secondary: "#d1adcc",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  transparent: "#000000",
  ///////////////
  // Grays
  ///////////////
  background: "#f5f5f5",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230, 230, 230)",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

export const cssUtils = {
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },

  components: {
    MuiAppBar: {
      styleOverrides: {
        root: { background: Colors.transparent },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.primary,
          color: Colors.secondary,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lighten(0.2, Colors.primary),
        },
      },
    },
  },
});

export default theme;
