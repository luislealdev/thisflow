import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FlowRoutes } from "../flow/routes/FlowRoutes";
import { ThisFlowHome } from "../home/ThisFlowHome";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Loading } from "../ui/components";
import { LoginRoutes } from "./LoginRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<ThisFlowHome />} />
      <Route path="/flow/*" element={<LoginRoutes />} />

      {/*Find user */}
      <Route path="/:user" element={<h1>Hey</h1>} />
      {/* Redirect */}
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
