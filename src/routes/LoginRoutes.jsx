import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FlowRoutes } from "../flow/routes/FlowRoutes";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Loading } from "../ui/components";

export const LoginRoutes = () => {

  const { status } = useCheckAuth();

  if (status == "checking") return <Loading />;

  return (
    <Routes>
      {status == "authenticated" ? (
        <Route path="/*" element={<FlowRoutes />} />
      ) : (
        <Route path="/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
};
