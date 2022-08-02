import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"

export const FlowRoutes = () => {
  
  return (
    <Routes>
        <Route path="artist" element={<HomePage/>}/>
        <Route path="/*" element={<Navigate to="artist" />}/>
    </Routes>
  )
}
