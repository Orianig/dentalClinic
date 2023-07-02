//se importan los modulos
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllAppointments } from "../../services/appointment.service";
import CardAppointments from "../../components/CardAppointments";

const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState([]);
  const authToken = useSelector((state) => state.user.credentials.token);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        // Obtener las citas del usuario utilizando el token del estado de Redux
        const allAppointments = await getAllAppointments(authToken);
        if (allAppointments.data) {
          setAppointments(allAppointments.data);
        }
        console.log(allAppointments);
      } catch (error) {
        console.log("Error al obtener las citas del usuario:", error);
      }
    };
    fetchAppointments();
  }, [authToken]);

  
  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-primary font-bold">MIS CITAS</h1>
      <hr className="my-8 border-gray-500/30" />
      {/* SUBTITULOS PARA LAS CARDS */}
      <div className=" p-2 md:p-2 rounded-xl mb-4 ">
        <div className="flex justify-center ml-10 md:justify-between flex-wrap items-center gap-2 md:gap-4">
          {/* INTERVENTION */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">INTERVENCIÓN</span>
            </p>
          </div>
          {/* DOCTOR */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">DENTISTA</span>
            </p>
          </div>
          {/* PATIENT */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">PACIENTE</span>
            </p>
          </div>
          {/* FECHA */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">FECHA</span>
            </p>
          </div>
          {/* HORARIO */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">HORARIO</span>
            </p>
          </div>
        </div>
      </div>
      {appointments.map((appointment) => (
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
          startTime={appointment.startTime}
              endTime={appointment.endTime}
          showPatient={true}
          showDentist={true}
        />
      ))}
    </div>
  );
};

export default AppointmentManagement;
