import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Dashboard from "@mui/icons-material/Dashboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import SettingsIcon from "@mui/icons-material/Settings";
import ViewListIcon from "@mui/icons-material/ViewList";

export const navLinks = [
  {
    name: "Dashboard",
    icon: Dashboard,
    link: "/dashboard",
  },
  {
    name: "Products",
    icon: ViewListIcon,
    link: "/products",
  },
  {
    name: "Orders",
    icon: LocalGroceryStoreIcon,
    link: "/orders",
  },
  {
    name: "Customer",
    icon: AccountBoxIcon,
    link: "/customer",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    link: "/settings",
  },
];
