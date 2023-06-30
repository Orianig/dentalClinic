import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-100 p-2 md:p-2 mb-1 rounded-xl ">
      <div className="flex ml-24 justify-center ml-6 md:justify-between flex-wrap items-center gap-2 md:gap-4">
        {/* INTERVENTION */}
        <div className="w-full md:w-1/4">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">44444</span>
          </p>
        </div>
        {/* DOCTOR */}
        <div className="w-full md:w-1/4">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">44444</span>
          </p>
        </div>
        {/* FECHA */}
        <div className="w-full md:w-1/4">
          <p className="text-sm md:text-base">
            <span className="text-gray-600 font-semibold">44444</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
