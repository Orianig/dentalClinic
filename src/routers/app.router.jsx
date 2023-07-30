import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Pages auth
import Login from "../pages/Login/Login.page";
import Register from "../pages/Register/Register.page";
//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
//pages admin
import Profile from "../pages/Dashboard/Profile.page";
import Appointments from "../pages/Dashboard/Appointments";
import NewAppointment from "../pages/Dashboard/NewAppointment";
import Users from "../pages/Dashboard/Users";
// import Doctors from "../pages/Dashboard/Doctors";
import AppointmentManagement from "../pages/Dashboard/AppointmentManagement";
import Treatments from "../pages/Dashboard/Treatments";
import NotFound from "../pages/404/notFound.page";

export const AppRouter = () => {
  return (
    /* El BrowserRouter en clase lo colocamos en el main, pero prefiero que 
    la lógica de enrutado este en un solo lugar */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/layout" element={<LayoutAdmin />}>
          <Route index element={<Profile />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="newAppointment" element={<NewAppointment />} />
          <Route path="users" element={<Users />} />
          {/* <Route path="doctors" element={<Doctors />} /> */}
          <Route
            path="appointmentManagement"
            element={<AppointmentManagement />}
          />
          <Route path="treatments" element={<Treatments />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
