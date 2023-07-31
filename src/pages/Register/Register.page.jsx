import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth.service";
import "../Login/Login.css";
import Logo from "../../assets/images/logo/logo-7.png";
//Hooks
//se usa el hook para establecer el estado del usuario
//estado inicial =>(lo que requiero)
const Register = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const navigate = useNavigate();

  //desestructuración de objetos para obtener el nombre del campo y el valor ingresado
  const handleChange = (event) => {
    const { name, value } = event.target;
    //actualiza el estado
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  //manejador de envio de formulario
  // se ejecuta cuando se envia el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Realizando solicitud de registro...");
    register(user)
      .then((result) => {
        // console.log("Registro exitoso:", result);
        toast.success(user.name + " te haz registrado con exito");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        // console.error("Error en el registro:", error);
        toast.error("No se han cumplido los parametros necesarios");
      });
  };

  return (
    <>
      <div className="register flex flex-col min-h-screen rounded-lg md:p-2">
        <div className=" -mb-4">
          <img className="h-20 md:h-44 w-auto m-2" src={Logo} alt="Company" />
        </div>
        <div className="p-2 ml-8">
          <h1 className="text-6xl text-white font-medium mb-2">
            Crea una cuenta
          </h1>
          <span className="text-gray-500 font-medium">
            ¿Ya eres usuario?{" "}
            <a
              href="#"
              className="text-primary hover:underline"
              onClick={() => navigate("/login")}
            >
              Ingresa
            </a>
          </span>
          <form className="mt-8">
            {/* USERNAME */}
            <div className="max-w-lg mb-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
              <input
                value={user.name}
                onChange={handleChange}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group focus:ring-2 focus:ring-primary"
                placeholder="Nombre"
              />
              {/* LASTNAME */}
              <input
                value={user.lastName}
                onChange={handleChange}
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="lastName"
                required
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group focus:ring-2 focus:ring-primary"
                placeholder="Apellidos"
              />
            </div>
            {/* PHONE NUMBER */}
            <div className="max-w-lg mb-4">
              <input
                value={user.phoneNumber}
                onChange={handleChange}
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                autoComplete="phoneNumber"
                required
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group focus:ring-2 focus:ring-primary"
                placeholder="Teléfono"
              />
            </div>
            {/* EMAIL */}
            <div className="max-w-lg mb-4">
              <input
                value={user.email}
                onChange={handleChange}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group focus:ring-2 focus:ring-primary"
                placeholder="Correo electrónico"
              />
            </div>
            {/* PASSWORD */}
            <div className="max-w-lg mb-4">
              <input
                value={user.password}
                onChange={handleChange}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full py-3 px-4 rounded-xl outline-none bg-[#343434] text-gray-100 group focus:ring-2 focus:ring-primary"
                placeholder="Contraseña"
              />
            </div>
            <div className="max-w-lg flex justify-center md:justify-end mb-6">
              <a
                href="#"
                className="text-gray-500 font-medium hover:text-gray-300 transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <div className="max-w-lg flex justify-center md:justify-end mb-6">
              <button
                type="submit"
                className="bg-primary text-white w-48 py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
