import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";
import CustomButton from "./CustomButton";
import CardDoctors from "./CardDoctors";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/slices/modal.slice";
import { setAppointments as setAppoinmentsStore } from "../redux/slices/appointments.slice";
import { format } from "../common/datesUtils";
import { getAllUsersProfile } from "../services/user.service";
import { updateAppointment } from "../services/appointment.service";

const ModalAppointments = () => {
  //hook para control de las citas
  const [appointment, setAppointment] = useState({});
  //se inician como objetos vacios
  const [doctorList, setDoctorList] = useState([]);

  //seleccion de datos del store
  const authToken = useSelector((state) => state.user.credentials.token);
  const openFromStore = useSelector((state) => state.modal.isOpen);
  const appointmentId = useSelector((state) => state.modal.appointmentId);
  const dispatch = useDispatch();
  const appointmentList = useSelector((state) => state.appointments);

  //efecto para la carga inicial
  //obtencion de los doctores para su eleccion en la cita
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const usersProfiles = await getAllUsersProfile(authToken);
        if (usersProfiles.data) {
          // el id 2 es el id de los doctores
          setDoctorList(usersProfiles.data.filter((user) => user.roleId === 2));
        }
      } catch (error) {
        console.log("Error al obtener los perfiles de usuario:", error);
      }
    };
    fetchAllUser();
  }, [authToken]);

  //este se aplica cuando se selecciona una cita, me la trae en detalle
  useEffect(() => {
    if (appointmentId && appointmentList.length) {
      setAppointment(appointmentList.find((app) => app.id === appointmentId));
      console.log(appointment);
    }
  }, [appointmentId]);

  //funcion de cierre del modal
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  //se ejecuta cuando se produce un cambio en la cita
  const handleChange = (event) => {
    const { name, value } = event.target;
    //actualiza el estado
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  //guarda las citas
  const handleSave = async () => {
    const form = {
      date: appointment?.date,
      dentistId: appointment?.dentistId,
      endTime: appointment?.endTime,
      interventionId: appointment?.interventionId,
      startTime: appointment?.startTime,
    };
    try {
      await updateAppointment(authToken, appointment.id, form);
      toast.success("Sus datos han sido actualizados correctamente");
    } catch {
      toast.error("No ha sido posible modificar sus datos");
    }
    dispatch(closeModal());
    window.location.reload();
  };

  return (
    //animaciones de entrada y salida del modal
    <Transition.Root show={openFromStore} as={Fragment}>
      {/* contenedor principal del modal  */}
      <Dialog as="div" className="relative z-10" onClose={handleCloseModal}>
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg max-w-6xl w-full p-6">
                <form>
                  {/* USER NAME */}
                  <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-2">
                    <div className="flex-1 flex items-center gap-4">
                      <div className="w-full">
                        <p className="mb-2">DNI</p>
                        <input
                          type="text"
                          className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                          name="name"
                          value={appointment?.patient?.dni}
                          onChange={handleChange}
                          disabled
                        />
                      </div>
                      {/* LASTNAME */}
                      <div className="w-full">
                        <p className="mb-2">Nombre completo</p>
                        <input
                          type="text"
                          className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                          name="lastName"
                          value={`${appointment?.patient?.name} ${appointment?.patient?.lastName}`}
                          onChange={handleChange}
                          disabled
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
                            name="interventionId"
                            value={appointment?.interventionId}
                            onChange={handleChange}
                          >
                            <option value="Null">-.-</option>
                            <option value="1">Chequeo General</option>
                            <option value="2">Limpieza Bucal</option>
                            <option value="3">Empaste</option>
                            <option value="4">Exodoncia (extracción)</option>
                            <option value="5">Ortodoncia</option>
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
                            name="date"
                            value={appointment?.date}
                            onChange={handleChange}
                          ></input>
                        </div>
                      </div>
                      {/* TIME */}
                      <div className="w-full md:w-1/4">
                        <p className="mb-2">Hora</p>
                        <div className="flex-1 justify-center">
                          <input
                            className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                            type="time"
                            name="startTime"
                            value={appointment?.startTime}
                            onChange={handleChange}
                          ></input>
                          <input
                            className="w-full mt-2 py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                            type="time"
                            name="endTime"
                            value={appointment?.endTime}
                            onChange={handleChange}
                          ></input>
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
                            value={appointment.details}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      {/* DOCTORS */}
                      <div className="w-full md:w-1/2">
                        <p className="mb-2">Doctor</p>
                        <select
                          className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary "
                          name="dentistId"
                          value={appointment?.dentistId}
                          onChange={handleChange}
                        >
                          {doctorList.map((doctor) => (
                            <option key={doctor.id} value={doctor.id}>
                              {doctor.name}
                            </option>
                          ))}
                        </select>
                        {/* <div className="flex-1">
                          <div className="bg-gray-100 p-2 md:p-2 mb-1 rounded-xl cursor-pointer">
                            <h1>Doctor</h1>
                            <CardDoctors />
                          </div>
                        </div> */}
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
                            value={appointment?.results}
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="flex -ml-4 justify-end gap-4">
                  <CustomButton onClick={() => handleSave()}>
                    GUARDAR
                  </CustomButton>
                  {/* evento on clic para el cierre del modal */}
                  <CustomButton onClick={handleCloseModal}>CERRAR</CustomButton>
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
