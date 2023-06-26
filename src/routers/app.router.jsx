import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../pages/Login/Login.page"
import Register from "../pages/Register/Register.page"
import Profile from "../pages/Profile/Profile.page"
import NotFound from "../pages/404/notFound.page"

export const AppRouter = () => {
  return (
    /* El BrowserRouter en clase lo colocamos en el main, pero prefiero que 
    la lógica de enrutado este en un solo lugar */
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={ <Login /> } />
            <Route path="/" element={ <Profile /> } />
            <Route path="/register" element={ <Register /> } />
        </Routes>
    </BrowserRouter>
  )
}