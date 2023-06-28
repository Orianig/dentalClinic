//se importan las dependencias necesarias
import React, { useEffect, useState } from "react";
import { login } from "../../services/auth.service";
import { login as loginStore } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import jwtDecode from "jwt-decode";

//Hooks
//se usa el hook para establecer el estado del usuario
//estado inicial => email - password (lo que requiero)
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //estado que almacena el token de autenticación del usuario
  //tras iniciar sesión correctamente
  const [token, setToken] = useState("");
  //se utiliza para manejar los errores relacionados con las credenciales de inicio de sesión
  const [userError, setUserError] = useState({
    credentials: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*actualiza el estado del usuario cada vez que se realiza un cambio en los 
campos del formulario*/
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
    // console.log("Realizando solicitud de inicio de sesión...");
    login(user)
      .then((result) => {
        console.log(user)
        // console.log("Respuesta de inicio de sesión recibida:", result);
        setToken(result);
      })
      .catch((error) => {
        // console.error("Error en el inicio de sesión:", error);
        setUserError({ credentials: "Error en el inicio de sesión" });
        toast.error('No ha sido posible iniciar sesion');
      });
  };
  //se crea un objeto "data" que contiene las credenciales del usuario
  useEffect(() => {
    if (token) {
      let decoded = jwtDecode(token);
      console.log(decoded);
      dispatch(
        loginStore({
          token: token,
          email: decoded.email,
          role: decoded.roleId,
          name: decoded.name,
        })
      );
      toast.success('Bienvenido ' + decoded.name);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [token, dispatch, navigate]);

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
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

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
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
            {userError?.credentials ? (
              <div>{userError.credentials}</div>
            ) : (
              <div></div>
            )}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e) => handleSubmit(e)}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
