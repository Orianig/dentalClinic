import React from "react";
import CardDoctors from "../../components/CardDoctors";

const NewAppointment = () => {
  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">PERFIL DE USUARIO</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Datos del paciente</p>
            </div>
          </div>
          {/* USER NAME */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <p className="mb-2">Nombre</p>
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
                <p className="mb-2">Apellido(s)</p>
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
                <p className="mb-2">Fechas disponibles</p>
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
                <p className="mb-2">Horas</p>
                <div className="flex-1 justify-center">
                  <select
                    className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary text-center"
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
          {/* DOCTORS */}
          <div className="flex flex-col md:flex-row md:items-start gap-y-2 mb-8">
            <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4">
              <div className="w-full md:w-1/2">
                <p className="mb-2">Doctores disponibles</p>
                <div className="flex-1">
                  <div className="bg-gray-100 p-2 md:p-2 mb-1 rounded-xl cursor-pointer">
                    <h1>lista de doctores disponibles</h1>
                    <CardDoctors />
                  </div>
                </div>
              </div>
              {/* DETAILS */}
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewAppointment;
