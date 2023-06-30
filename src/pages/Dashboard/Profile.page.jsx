import React, { useState } from "react";
// // import { Menu, Transition } from "@headlessui/react";
// import { CgProfile} from "react-icons/cg";//profile
// // import { FaUserDoctor} from "react-icons/fa";//doctor
// // import { AiOutlineUser} from "react-icons/ai";//user
// import { BsCalendarCheck} from "react-icons/bs";//calendar

const Profile = () => {
  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">PERFIL DE USUARIO</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
          </div>
          {/* USER NAME */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                  placeholder="Nombre"
                  // value={firstName}
                  // onChange={handleFirstNameChange}
                />
              </div>
              {/* LASTNAME */}
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                  placeholder="Apellido(s)"
                  // value={lastName}
                  // onChange={handleLastNameChange}
                />
              </div>
            </div>
          </div>
          {/* PHONE NUMBER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                placeholder="Número de contacto"
                // value={contactNumber}
                // onChange={handleContactNumberChange}
              />
            </div>
          </div>
          {/* GENDER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Género <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <select
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none focus:ring-2 focus:ring-primary"
                // value={gender}
                // onChange={handleGenderChange}
              >
                <option value="-.-">-.-</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/* COLLEGIATE NUMBER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de colegiado <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                placeholder="Número de colegiado"
                // value={contactNumber}
                // onChange={handleContactNumberChange}
              />
            </div>
          </div>
          {/* SPECIALITY */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Especialidad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                placeholder="Especialidad"
                // value={contactNumber}
                // onChange={handleContactNumberChange}
              />
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">USUARIO Y CONTRASEÑA</h1>
        <hr className="my-8 border-gray-500/30" />
        {/* Change password */}
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-600 text-xl mb-1 font-semibold">
                Correo electrónico
              </h5>
              <p className="text-gray-500 text-sm"></p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-700 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-600 text-xl mb-1 font-semibold">
                Contraseña
              </h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <button className="w-full md:auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-700 transition-colors">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
