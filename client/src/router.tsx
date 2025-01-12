import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Private from "./pages/Private";
import Catalog from "./pages/Catalog";
import Login from "./pages/admin/Login";
import ProtectedRoutes from "./pages/admin/ProtectedRoutes";
import Dashborad from "./pages/admin/Dashborad";

const router = createBrowserRouter([
  { path: "/admin/login", element: <Login /> },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoutes>
        <Dashborad />
      </ProtectedRoutes>
    ),
  },
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/menu", element: <Catalog /> },
      { path: "/contact", element: <ContactUs /> },
      {
        element: <DashboardLayout />,
        path: "dashboard",
        children: [{ path: "/dashboard/private", element: <Private /> }],
      },
    ],
  },
]);

export default router;
