import { createTheme } from "@mui/material/styles";
import { lighten } from "polished";
import { Colors, DrawerWidth } from "./colors";

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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            background: Colors.white,
          },
          "&.Mui-selected:hover": {
            background: Colors.hover_bg,
          },
          "&:hover": {
            background: Colors.hover_bg,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { background: Colors.lavender, color: Colors.graphite_black },
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
          background: Colors.secondary,
          color: Colors.black,
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
