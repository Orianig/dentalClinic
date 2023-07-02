import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createAppointment } from "../../services/appointment.service";
import { addAppointment as addAppointmentsStore } from "../../redux/slices/appointments.slice";
import { useNavigate } from "react-router-dom";
import { getAllUsersProfile } from "../../services/user.service";
//componentes
import CustomButton from "../../components/CustomButton";

const NewAppointment = () => {
  //hook para control de las citas
  const [appointment, setAppointment] = useState({});
  //se inician como objetos vacios
  const [doctorList, setDoctorList] = useState([]);
  const [patientList, setPatiestList] = useState([]);

  //obtencion de datos desde el store
  const authToken = useSelector((state) => state.user.credentials.token);
  const userRoleId = useSelector((state) => state.user.data.roleId);
  const userId = useSelector((state) => state.user.data.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const DENTIST_ROLE_ID = 2;
  const PATIENT_ROLE_ID = 3;

  //efecto para la carga inicial
  //obtencion de los doctores para su eleccion en la cita
  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const usersProfiles = await getAllUsersProfile(authToken);
        if (usersProfiles.data) {
          // el id 2 es el id de los doctores
          setDoctorList(
            usersProfiles.data.filter((user) => user.roleId === DENTIST_ROLE_ID)
          );
          setPatiestList(
            usersProfiles.data.filter((user) => user.roleId === PATIENT_ROLE_ID)
          );

          console.log(userRoleId, userId);
          if (userRoleId === PATIENT_ROLE_ID) {
            setAppointment((prevAppointment) => ({
              ...prevAppointment,
              patientId: userId,
            }));
          }
        }
      } catch (error) {
        console.log("Error al obtener los perfiles de usuario:", error);
      }
    };
    fetchAllUser();
  }, [authToken]);

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
      details: appointment.details,
      endTime: appointment?.endTime,
      interventionId: appointment?.interventionId,
      patientId: appointment?.patientId,
      startTime: appointment?.startTime,
    };
    try {
      // Crea la cita utilizando la función createAppointment
      const appointmentData = await createAppointment(authToken, form);
      // Agrega la cita al estado de Redux utilizando la acción addAppointmentsStore
      dispatch(addAppointmentsStore(appointmentData));
      toast.success("La cita ha sido creada correctamente");
      navigate("/appointments");
    } catch (error) {
      console.error("Error al crear la cita:", error);
      toast.error("No ha sido posible crear la cita");
    }
  };

  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">CREAR NUEVA CITA</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-4">
            <div className="w-full md:w-1/4">
              <p>Datos del paciente</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 gap-x-4 mb-8">
            {/* PATIENT */}
            <div className="w-full">
              <p className="mb-2">Paciente</p>
              <select
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary "
                name="patientId"
                value={appointment?.patientId}
                onChange={handleChange}
                disabled={userRoleId === PATIENT_ROLE_ID}
              >
                <option value="Null">-.-</option>
                {patientList.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {patient.name}
                  </option>
                ))}
              </select>
            </div>
            {/* DOCTOR */}
            <div className="w-full">
              <p className="mb-2">Doctor</p>
              <select
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary "
                name="dentistId"
                value={appointment?.dentistId}
                onChange={handleChange}
              >
                <option value="Null">-.-</option>
                {doctorList.map((doctor) => (
                  <option key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </option>
                ))}
              </select>
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
          <div className="flex flex-col md:flex-row md:items-start gap-y-2 mb-8">
            {/* DETAILS */}
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
          </div>
        </form>
      </div>
      <div className="scale-75 md:scale-100 flex -ml-8 md:ml-0 justify-start md:justify-end gap-2 md:gap-4">
        <CustomButton onClick={() => navigate("/appointments")}>
          DESCARTAR
        </CustomButton>
        <CustomButton onClick={handleSave}>GUARDAR</CustomButton>
      </div>
    </>
  );
};

export default NewAppointment;
