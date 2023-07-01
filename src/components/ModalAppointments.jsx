import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CustomButton from "./CustomButton";
import CardDoctors from "./CardDoctors";

const ModalAppointments = () => {
  //control de visibilidad del modal
  const [open, setOpen] = useState(true);

  return (
    //animaciones de entrada y salida del modal
    <Transition.Root show={open} as={Fragment}>
      {/* contenedor principal del modal  */}
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        {/* animaciones de entrada y salida del contenido */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* CONTENIDO DEL MODAL */}
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg max-w-3xl w-full p-6">
                <form>
                  {/* USER NAME */}
                  <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-2">
                    <div className="flex-1 flex items-center gap-4">
                      <div className="w-full">
                        <p className="mb-2">DNI o Correo Eléctronico</p>
                        <input
                          type="text"
                          className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                          name="name"
                          // value={userProfile.name}
                          // onChange={handleChange}
                        />
                      </div>
                      {/* LASTNAME */}
                      <div className="w-full">
                        <p className="mb-2">Nombre y Apellido</p>
                        <input
                          type="text"
                          className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                          name="lastName"
                          // value={userProfile.lastName}
                          // onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* INTERVENTION TIPE */}
                  <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-full md:w-1/2">
                        <p className="mb-2">Consulta</p>
                        <div className="flex-1">
                          <select
                            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary "
                            name="intervention"
                            // value={userProfile.specialityId}
                            // onChange={handleChange}
                          >
                            <option value="Null">-.-</option>
                            <option value="1">General</option>
                            <option value="2">Ortodoncia</option>
                            <option value="3">Endodoncia</option>
                            <option value="4">Periodoncia</option>
                            <option value="5">Odontopediatría</option>
                            <option value="6">Implantología dental</option>
                          </select>
                        </div>
                      </div>
                      {/* DATE */}
                      <div className="w-full md:w-1/4">
                        <p className="mb-2">Fecha</p>
                        <div className="flex-1">
                          <input
                            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                            type="date"
                            id="start"
                            name="trip-start"
                            value="2018-07-22"
                            min="2023-01-01"
                            max="2025-12-31"
                          ></input>
                        </div>
                      </div>
                      {/* TIME */}
                      <div className="w-full md:w-1/4">
                        <p className="mb-2">Hora</p>
                        <div className="flex-1 justify-center">
                          <select
                            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                            name="intervention"
                            // value={userProfile.specialityId}
                            // onChange={handleChange}
                          >
                            <option value="Null">-.-</option>
                            <option value="1">9:00 - 10:00</option>
                            <option value="2">10:00 - 11:00</option>
                            <option value="3">11:00 - 12:00</option>
                            <option value="4">12:00 - 13:00</option>
                            <option value="5">13:00 - 14:00</option>
                            <option value="6">14:00 - 15:00</option>
                            <option value="7">15:00 - 16:00</option>
                            <option value="8">16:00 - 17:00</option>
                            <option value="9">17:00 - 18:00</option>
                            <option value="10">18:00 - 19:00</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                      {/* DETAILS */}
                      <div className="flex flex-col md:flex-row md:items-start gap-y-2 mb-8">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-full md:w-1/2">
                        <p className="mb-2">Detalles</p>
                        <div className="flex-1">
                          <textarea
                            className="w-full bg-gray-100 p-2 md:p-2 mb-1 rounded-xl border-none focus:ring-2 focus:ring-primary resize-y h-auto overflow-y-auto"
                            placeholder="Consideraciones para la cita"
                            name="details"
                            // value={userProfile.collegiateNumber}
                            // onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                  {/* DOCTORS */}
                  <div className="w-full md:w-1/2">
                        <p className="mb-2">Doctores disponibles</p>
                        <div className="flex-1">
                          <div className="bg-gray-100 p-2 md:p-2 mb-1 rounded-xl cursor-pointer">
                            <h1>lista de doctores disponibles</h1>
                            <CardDoctors />
                          </div>
                        </div>
                      </div>
                      </div>
                  </div>
                  {/* RESULTADOS */}
                  <div className="flex flex-col md:flex-row md:items-start gap-y-2 mb-8">
                    <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-full md:w-1/2">
                        <p className="mb-2">Resultados</p>
                        <div className="flex-1">
                          <textarea
                            className="w-full bg-gray-100 p-2 md:p-2 mb-1 rounded-xl border-none focus:ring-2 focus:ring-primary resize-y h-auto overflow-y-auto"
                            placeholder="Resultados obtenidos"
                            name="details"
                            // value={userProfile.collegiateNumber}
                            // onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="flex -ml-4 justify-end gap-4">
                  <CustomButton onClick={() => navigate("/newAppointment")}>
                    EDITAR
                  </CustomButton>
                  <CustomButton onClick={() => navigate("/newAppointment")}>
                    CERRAR
                  </CustomButton>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default ModalAppointments;
