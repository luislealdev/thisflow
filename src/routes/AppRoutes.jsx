import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { FlowRoutes } from "../flow/routes/FlowRoutes";
import { ThisFlowHome } from "../home/ThisFlowHome";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { Loading } from "../ui/components";

export const AppRoutes = () => {
  
  const {status} = useCheckAuth();

  if (status == "checking") return <Loading />;

  return (
    <Routes>
      {/* {status == "authenticated" ? (
        <Route path="/*" element={<FlowRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )} */}

      <Route path="/home" element={<ThisFlowHome/>}/>
      {/* <Route path="/*" element={<Navigate to="/auth/login" />} /> */}
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
