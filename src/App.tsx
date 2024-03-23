import { ThemeProvider } from "@mui/system";
import AdminApp from "./components/AdminApp";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AdminApp />
    </ThemeProvider>
  );
};

export default App;
