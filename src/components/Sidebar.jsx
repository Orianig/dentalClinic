import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/logo-7.png";
import Logo1 from "../assets/images/logo/logo-general.png";
//ICONS
import { FaUser, FaUserMd, FaUsers } from "react-icons/fa"; //profile - doctor - pacientes - citas
import { BsCalendarPlusFill } from "react-icons/bs"; //citas
import {
  RiFolderUserFill,
  RiServiceFill,
  RiLogoutCircleRLine,
  RiCloseLine,
  RiMenu3Line,
} from "react-icons/ri"; //gestion de citas - servicios - logout

const Sidebar = () => {
  // se usa el hook para tener una variable de estado y una funcion para actualizarla
  //showmenu se inicia en falso (no se muestra)
  //al llamar a setshowmenu se pasa de visible a no visible  el menu
  const [showMenu, setShowMenu] = useState(false);
  const userRoleId = useSelector((state) => state.user.data.roleId);
  console.log(userRoleId);
  // const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <div className="mb-8">
            <img className="h-20 w-auto" src={Logo} alt="Company" />
          </div>
          <nav>
            {/* PROFILE - todos los usuario*/}
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              onClick={() => setShowMenu(false)}
            >
              <FaUser className="text-primary" />
              Perfil
            </Link>
            {/* MIS CITAS - usuarios y doctores */}
            {userRoleId !== 1 &&
              (userRoleId !== 4 && (
                <Link
                  to="/Appointments"
                  className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  <BsCalendarPlusFill className="text-primary" />
                  Mis Citas
                </Link>
              ))}
            {/* USERS - oculto para los usuarios generales */}
            {userRoleId !== 3 && (
              <Link
                to="/Users"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                onClick={() => setShowMenu(false)}
              >
                <FaUsers className="text-primary" />
                Usuarios
              </Link>
            )}
            {/* <Link
              to="/Doctors"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <FaUserMd className="text-primary" />
              Doctores
            </Link> */}
            {/* APPOINTMENT MANAGEMENT - solo administrativos */}
            {userRoleId !== 2 &&
              (userRoleId !== 3 && (
                <Link
                  to="/AppointmentManagement"
                  className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  <RiFolderUserFill className="text-primary" />
                  Gestion de citas
                </Link>
              ))}
            {/* TREATMENTS - solo administrativos */}
            {userRoleId !== 2 &&
              (userRoleId !== 3 && (
                <Link
                  to="/Treatments"
                  className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  <RiServiceFill className="text-primary" />
                  Servicios
                </Link>
              ))}
              {/* NEW APPOINTMENT - todos los usuarios */}
              <div className="mt-4 text-center">
  <Link
    to="/NewAppointment"
    className="flex items-center justify-center gap-4 py-2 px-4 rounded-lg bg-primary font-semibold text-secondary-100 hover:text-primary hover:bg-gray-100 transition-colors"
  >
    CREAR CITA
  </Link>
</div>
          </nav>
        </div>
        <div>
          <nav>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiLogoutCircleRLine className="text-primary" />
              Cerrar sesión
            </Link>
          </nav>
        </div>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
};

export default Sidebar;
