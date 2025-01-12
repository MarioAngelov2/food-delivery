import { adminLoginStore } from "@/zustand/store";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  const isAuthorized = adminLoginStore((state) => state.isAuthorized);
  const refreshToken = adminLoginStore((state) => state.refreshToken);
  const restoringSession = adminLoginStore((state) => state.restoringSession)

  useEffect(() => {
    const tryRehydrate = async () => {
      if (!isAuthorized) {
        try {
          await refreshToken();
        } catch (error) {
          console.log("Failed to refresh token on page load", error);
        }
      }
    };

    tryRehydrate();
  }, [isAuthorized, refreshToken]);

  if (restoringSession) {
    return <div>Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
