//se importan los modulos
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserAppointments } from "../../services/appointment.service";
import { openModal } from "../../redux/slices/modal.slice";
import { setAppointments as setAppoinmentsStore } from "../../redux/slices/appointments.slice";

//componentes
import CardAppointments from "../../components/CardAppointments";
import CustomButton from "../../components/CustomButton";
import ModalAppointments from "../../components/ModalAppointments";
import InputSearch from "../../components/InputSearch";

//ir entre links
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const dispatch = useDispatch();

  //hook para control de las citas
  const [appointments, setAppointments] = useState([]);
  //obtencion de datos desde el store
  const authToken = useSelector((state) => state.user.credentials.token);
  const userRoleId = useSelector((state) => state.user.data.roleId);
  const navigate = useNavigate();

  //control de cierre del modal
  const handleOpenModal = (appointmentId) => {
    dispatch(openModal(appointmentId));
  };

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Obtener las citas del usuario utilizando el token del estado de Redux
        const userAppointments = await getUserAppointments(authToken);
        // Establecer las citas en el estado local
        setAppointments(userAppointments.data);
      } catch (error) {
        console.log("Error al obtener las citas del usuario:", error);
      }
    };
    fetchAppointments();
  }, [authToken]);

  useEffect(() => {
    if (appointments?.length) {
      dispatch(setAppoinmentsStore(appointments));
    }
  }, [appointments, dispatch]);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-xl text-primary font-bold mb-4 md:mb-0 md:text-left md:flex-grow">
          MIS CITAS
        </h1>
        <div className=" -mr-6 md:mr-4 mb-2 scale-75 md:scale-100 md:mb-0 flex justify-end items-end">
          <InputSearch />
        </div>
        <div className="scale-80 md:scale-100 flex justify-end">
          <CustomButton onClick={() => navigate("/newAppointment")}>
            CREAR CITA
          </CustomButton>
        </div>{" "}
      </div>
      <hr className="my-8 border-gray-500/30" />
      {/* SUBTITULOS PARA LAS CARDS */}
      <div className="subtitleAppointmet hidden md:block">
        <div className=" p-2 md:p-2 rounded-xl mb-4">
          <div className="flex justify-center ml-20 md:justify-between flex-wrap items-center gap-2 md:gap-4">
            {/* INTERVENTION */}
            <div className="w-full md:w-1/5">
              <p className="text-sm md:text-base">
                <span className="font-semibold">INTERVENCIÓN</span>
              </p>
            </div>
            {/* DOCTOR */}
            {userRoleId !== 2 && (
              <div className="w-full md:w-1/4">
                <p className="text-sm md:text-base">
                  <span className="font-semibold">DENTISTA</span>
                </p>
              </div>
            )}
            {/* PATIENTS */}
            {userRoleId !== 3 && (
              <div className="w-full md:w-1/4">
                <p className="text-sm md:text-base">
                  <span className="font-semibold">PACIENTES</span>
                </p>
              </div>
            )}
            {/* FECHA */}
            <div className="w-full md:w-1/6">
              <p className="text-sm md:text-base">
                <span className="font-semibold">FECHA DE CITA</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {appointments.map((appointment) => (
        <>
          <CardAppointments
            key={appointment.id}
            intervention={appointment.intervention.name}
            dentist={
              appointment.dentist.name + " " + appointment.dentist.lastName
            }
            patient={
              appointment.patient.name + " " + appointment.patient.lastName
            }
            date={appointment.date}
            // Mostrar paciente si userRoleId es igual a 2
            showPatient={userRoleId === 2}
            // Mostrar dentista si userRoleId es igual a 3
            showDentist={userRoleId === 3}
            onClick={() => handleOpenModal(appointment.id)}
          />
        </>
      ))}
      <ModalAppointments />
    </div>
  );
};

export default Appointment;
