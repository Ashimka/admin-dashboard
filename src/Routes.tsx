import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Settings from "./components/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/",
    element: <Settings />,
  },
]);

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route index path="/" element={<Dashboard />} />
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/settings" element={<Settings />} />
//     </Routes>
//   );
// };

// export default AppRoutes;
