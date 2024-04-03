import { ThemeProvider } from "@mui/system";
import { ToastContainer } from "react-toastify";

import theme from "./styles/theme";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./errorPage";
import Products from "./pages/Products";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";

import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-left"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={1}
        theme="colored"
      />
    </ThemeProvider>
  );
};

export default App;
