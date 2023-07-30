//se importan las dependencias necesarias
import React, { useEffect, useState } from "react";
import { login } from "../../services/auth.service";
import { login as loginStore } from "../../redux/slices/user.slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import Logo from "../../assets/images/logo/logo-7.png";
import "./Login.css";

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
        console.log(user);
        // console.log("Respuesta de inicio de sesión recibida:", result);
        setToken(result); // guarda mi token ==> setTOKEN
        console.log(token);
      })
      .catch((error) => {
        // console.error("Error en el inicio de sesión:", error);
        setUserError({ credentials: "Error en el inicio de sesión" });
        toast.error("No ha sido posible iniciar sesion");
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
          id: decoded.userId,
          email: decoded.email,
          roleId: decoded.roleId,
          name: decoded.name,
          lastName: decoded.lastName,
        })
      );
      toast.success("Bienvenido " + decoded.name);
      setTimeout(() => {
        navigate("/layout");
      }, 1000);
    }
    console.log(token);
  }, [token, dispatch, navigate]);

  return (
    <>
      <div className="register flex flex-col min-h-screen rounded-lg md:p-8">
        <div className=" mb-6">
          <img className="h-44 w-auto" src={Logo} alt="Company" />
        </div>
        <div className="p-8">
          <h1 className="text-6xl text-white font-medium mb-4">
            Inicia sesión
          </h1>
          <span className="text-gray-500 font-medium">
            ¿No eres usuario?{" "}
            <a
              href="#"
              className="text-primary hover:underline"
              onClick={() => navigate("/register")}
            >
              Registrate
            </a>
          </span>
          <form className="mt-8">
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
            {userError?.credentials ? (
              <div>{userError.credentials}</div>
            ) : (
              <div></div>
            )}
            <div className="max-w-lg flex justify-center md:justify-end mb-6">
              <button
                type="submit"
                className="bg-primary text-white w-48 py-3 px-4 rounded-full hover:bg-cyan-700 transition-colors"
                onClick={(e) => handleSubmit(e)}
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
