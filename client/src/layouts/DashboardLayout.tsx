import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;

    if (!userId) {
      navigate("/sign-in");
    }
  }, [userId, isLoaded]);

  if (!isLoaded) return "Loading...";

  return <Outlet />;
}
