import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
// import { useCheckAuth } from "../hooks/useCheckAuth";
import { Loading } from "../ui/components";

export const AppRoutes = () => {
  
  // const {status} = useCheckAuth();

  const status = "checking";
  if (status == "checking") return <Loading />;

  return (
    <Routes>
      {status == "authenticated" ? (
        <Route path="/*" element={<FlowRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
