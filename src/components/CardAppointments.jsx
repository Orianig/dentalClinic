import React from "react";

const CardAppointments = ({ intervention, dentist, patient, date, showPatient, showDentist, onClick }) => {
  const formattedDate = new Date(date).toLocaleString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  const handleClick = event => {
    onClick(event);
  };
  return (
    <div className="bg-gray-100 p-2 md:p-2 mb-1 rounded-xl cursor-pointer" onClick={handleClick}>
      <div className="flex ml-24 justify-center ml-6 md:justify-between flex-wrap items-center gap-2 md:gap-4">
        {/* INTERVENTION */}
        <div className="w-full md:w-1/5">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">{intervention}</span>
          </p>
        </div>
        {/* DOCTOR */}
        {showDentist && (
        <div className="w-full md:w-1/5 ">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">{dentist}</span>
          </p>
        </div>
        )}
        {/* PATIENT */}
        {showPatient && (
          <div className="w-full md:w-1/5 ">
            <p className="text-sm md:text-base">
              <span className="text-gray-600 font-semibold">{patient}</span>
            </p>
          </div>
        )}
        {/* FECHA */}
        <div className="w-full md:w-1/6">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">{formattedDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardAppointments;
