import React from "react";
import { Link } from "react-router-dom";
//ICONS
import { FaUser, FaUserMd, FaUsers } from "react-icons/fa"; //profile - doctor - pacientes - citas
import { BsCalendarPlusFill } from "react-icons/bs"; //citas
import { RiFolderUserFill, RiServiceFill } from "react-icons/ri"; //gestion de citas - servicios

const Sidebar = () => {
  return (
    <>
      <div className="xl:h-[100vh] overflow-y-scroll fixed xl:static w-full h-full -lrft-full top-0 bg-secondary-100 p-8">
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
      </div>
    </>
  );
};

export default Sidebar;
