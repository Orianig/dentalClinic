import React from "react";

const CardUsers = ({ name, lastName, roleId, speciality, showSpeciality}) => {

  return (
    <div className="bg-gray-100 p-2 md:p-2 mb-1 rounded-xl ">
      <div className="flex ml-24 justify-center ml-6 md:justify-between flex-wrap items-center gap-2 md:gap-4">
        {/* FULL NAME */}
        <div className="w-full md:w-1/5">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">{name + lastName}</span>
          </p>
        </div>
        {/* ROLEID */}
        <div className="w-full md:w-1/5 ">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">{roleId}</span>
          </p>
        </div>
        {/* PATIENT */}
        {showSpeciality && (
          <div className="w-full md:w-1/5 ">
            <p className="text-sm md:text-base">
              <span className="text-gray-600 font-semibold">{speciality}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardUsers;
