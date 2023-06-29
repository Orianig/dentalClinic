import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  // const [showSubmenu, setShowSubmenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div>
          <h1 className="text-center text-2xl font-bold text-gray-600 mb-10">
            ADMIN
          </h1>
          <nav>
            <Link
              to="/"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <FaUser className="text-primary" />
              Perfil
            </Link>
            <Link
              to="/Appointments"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <BsCalendarPlusFill className="text-primary" />
              Mis Citas
            </Link>
            <Link
              to="/Patients"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <FaUsers className="text-primary" />
              Pacientes
            </Link>
            <Link
              to="/Doctors"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <FaUserMd className="text-primary" />
              Doctores
            </Link>
            <Link
              to="/AppointmentManagement"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiFolderUserFill className="text-primary" />
              Gestion de citas
            </Link>
            <Link
              to="/Treatments"
              className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
            >
              <RiServiceFill className="text-primary" />
              Servicios
            </Link>
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
