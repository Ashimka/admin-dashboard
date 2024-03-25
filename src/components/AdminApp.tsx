import { Box } from "@mui/material";
import React from "react";
import { Colors, DrawerWidth } from "../styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../Routes";
import { styled } from "@mui/material/styles";
import NavDrawer from "./NavDrawer";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DrawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AdminApp = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <Box
      sx={{
        display: "flex",
        background: Colors.background,
        height: "100vh",
      }}
    >
      <Router>
        <NavDrawer open={open} setOpen={setOpen} />
        <Main open={open}>
          <AppRoutes />
        </Main>
      </Router>
    </Box>
  );
};

export default AdminApp;
