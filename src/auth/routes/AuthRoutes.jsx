import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  console.log('lol 2');
  return (
    <Routes>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>

        <Route path="/*" element={<Navigate to="login"/>} />
    </Routes>
  )
}
