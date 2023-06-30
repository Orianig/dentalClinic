import React from "react";
import Card from "../../components/Card";

const Appointment = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-primary font-bold">MIS CITAS</h1>
      <hr className="my-8 border-gray-500/30" />
      {/* SUBTITULOS PARA LAS CARDS */}
      <div className=" p-2 md:p-2 rounded-xl mb-4 ">
        <div className="flex justify-center ml-20 md:justify-between flex-wrap items-center gap-2 md:gap-4">
          {/* INTERVENTION */}
          <div className="w-full md:w-1/4">
            <p className="text-sm md:text-base">
              <span className="font-semibold">INTERVENCIÓN</span>
            </p>
          </div>
          {/* DOCTOR */}
          <div className="w-full md:w-1/4">
            <p className="text-sm md:text-base">
              <span className="font-semibold">DENTISTA</span>
            </p>
          </div>
          {/* FECHA */}
          <div className="w-full md:w-1/4">
            <p className="text-sm md:text-base">
              <span className="font-semibold">FECHA DE CITA</span>
            </p>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Appointment;
