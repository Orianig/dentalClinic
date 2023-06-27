import React, { useState} from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { register } from "../../services/auth.service";
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
    console.log("Realizando solicitud de registro...");
    register(user)
      .then((result) => {
        console.log("Registro exitoso:", result);
        toast.success('Registrado con exito' + user.name);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error en el registro:", error);
        toast.error('No ha sido posible registrarse' + error);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Crea una cuenta nueva
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            {/* USERNAME */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={user.name}
                  onChange={handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* LASTNAME */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Apellido
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={user.lastName}
                  onChange={handleChange}
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* EMAIL */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Correo electronio
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={user.email}
                  onChange={handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* PHONE NUMBER */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Numero de telefono
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={user.phoneNumber}
                  onChange={handleChange}
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  autoComplete="phoneNumber"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {/* PASSWORD */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  value={user.password}
                  onChange={handleChange}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => { handleSubmit(e)}}
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
