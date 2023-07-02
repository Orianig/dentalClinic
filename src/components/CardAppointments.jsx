import React from "react";
import { format } from '../common/datesUtils'


const CardAppointments = ({ intervention, endTime, dentist, patient, date, startTime, showPatient, showDentist, onClick }) => {
  const formattedDate = format(new Date(date), 'dd-MM-yyyy');
  const formattedStartTime = startTime.slice(0, 5);
  const formattedEndTime = endTime.slice(0, 5);
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
        {/* HORARIO */}
        <div className="w-full md:w-1/6">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">{`${formattedStartTime} - ${formattedEndTime}`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardAppointments;
