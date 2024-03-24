import { Box } from "@mui/material";
import { Colors } from "../styles/theme";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../Routes";

const AdminApp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: Colors.background,
        height: "100vh",
      }}
    >
      <Router>
        <AppRoutes />
      </Router>
    </Box>
  );
};

export default AdminApp;
