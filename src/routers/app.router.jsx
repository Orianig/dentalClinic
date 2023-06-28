import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//Pages auth
import Login from "../pages/Login/Login.page";
import Register from "../pages/Register/Register.page";
//Layout
import LayoutAdmin from "../layouts/LayoutAdmin";
//pages admin
import Profile from "../pages/Dashboard/Profile.page";
import Appointments from "../pages/Dashboard/Appointments";
import Patients from "../pages/Dashboard/Patients";
import Doctors from "../pages/Dashboard/Doctors";
import AppointmentManagement from "../pages/Dashboard/AppointmentManagement";
import Treatments from "../pages/Dashboard/Treatments";
import Interventions from "../pages/Dashboard/Interventions";
import NotFound from "../pages/404/notFound.page";

export const AppRouter = () => {
  return (
    /* El BrowserRouter en clase lo colocamos en el main, pero prefiero que 
    la lógica de enrutado este en un solo lugar */
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Profile />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="patients" element={<Patients />} />
          <Route path="doctors" element={<Doctors />} />
          <Route
            path="appointmentManagement"
            element={<AppointmentManagement />}
          />
          <Route path="treatments" element={<Treatments />} />
          <Route path="interventions" element={<Interventions />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Login from "../pages/Login/Login.page";
// import Register from "../pages/Register/Register.page";
// import Profile from "../pages/Profile/Profile.page";
// import NotFound from "../pages/404/notFound.page";

// export const AppRouter = () => {
//   const token = useSelector((state) => state.auth.token);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={token ? <Profile /> : <Navigate to="/login" />} />
//         <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };
