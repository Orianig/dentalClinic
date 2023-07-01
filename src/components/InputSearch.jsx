import React from "react";
import { BsSearch } from "react-icons/bs"; // Importa BsSearch de 'react-icons/bs'

const InputSearch = () => {
  return (
    <form className="max-w-sm">
      <div className="relative">
        <BsSearch className="absolute top-2 left-2" />
        <input
          type="text"
          placeholder="Buscar"
          className="w-full py-2 pl-10 pr-3 text-gray-500 rounded-lg outline-none bg-gray-50 focus:ring-2 focus:ring-primary border-none text-sm"
        />
      </div>
    </form>
  );
};

export default InputSearch;