//se importan los modulos
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile, updateProfile } from "../../services/user.service";
import { toast } from "react-toastify";
import CustomButton from '../../components/CustomButton';

const Profile = () => {
  const [userProfile, setUserProfile] = useState("");
  const [user, setUser] = useState({});
  // se accede al dispatch y al token de autentificacion desde el estado global
  const dispatch = useDispatch(); //dispatch permite actualizar el estado global de la aplicacion
  const authToken = useSelector((state) => state.user.credentials.token);
  const userRoleId = useSelector((state) => state.user.data.roleId);

  useEffect(() => {
    //obtiene el perfil de usuario
    const fetchUserProfile = async () => {
      try {
        if (authToken) {
          //verifico el token
          console.log(authToken);
          //paso el token como argumento y recibo los datos desde mi bbdd
          const userProfile = await getUserProfile(authToken);
          //obtengo los datos
          console.log(userProfile);
          //actualiza el estado local
          setUserProfile(userProfile.data);
        }
      } catch (error) {
        console.error("Error retrieving user profile:", error);
      }
    };
    //  callback que se ejecuta después de que el componente se haya montado
    fetchUserProfile(); //fetch ==> obtener datos
  }, []); //solo se ejecuta una vez

  // maneja los cambios en los campos de entrada de un formulario
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  //maneja el evento del boton guardar
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario

    try {
      if (authToken) {
        // Realiza la actualización del perfil del usuario en la base de datos
        await updateProfile(authToken, userProfile);
        console.log("Perfil de usuario actualizado exitosamente.");
        toast.success("Sus datos han sido actualizados correctamente");
      }
    } catch (error) {
      console.error("Error al actualizar el perfil de usuario:", error);
      toast.error("No ha sido posible modificar sus datos");
    }
  };
  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">PERFIL DE USUARIO</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
          </div>
          {/* USER NAME */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                  placeholder="Nombre"
                  name="name"
                  value={userProfile.name}
                  onChange={handleChange}
                />
              </div>
              {/* LASTNAME */}
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                  placeholder="Apellido(s)"
                  name="lastName"
                  value={userProfile.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          {/* PHONE NUMBER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                placeholder="Número de contacto"
                name="phoneNumber"
                value={userProfile.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* DNI */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                DNI <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                placeholder="DNI/NIE"
                name="dni"
                value={userProfile.dni}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* BIRTHDATE */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Fecha de nacimiento <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                placeholder="aaaa-mm-dd"
                name="birthdate"
                value={userProfile.birthdate}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* GENDER */}
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Género <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 ">
              <select
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none focus:ring-2 focus:ring-primary"
                name="gender"
                value={userProfile.gender}
                onChange={handleChange}
              >
                <option value="Null">-.-</option>
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
              </select>
            </div>
          </div>
          {/* COLLEGIATE NUMBER - solo doctores*/}
          {userRoleId === 2 && (
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Número de colegiado <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 focus:ring-2 focus:ring-primary"
                  placeholder="Número de colegiado"
                  name="collegiateNumber"
                  value={userProfile.collegiateNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          {/* SPECIALITY */}
          {userRoleId === 2 && (
            <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
              <div className="w-full md:w-1/4">
                <p>
                  Especialidad <span className="text-red-500">*</span>
                </p>
              </div>
              <div className="flex-1 ">
                <select
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none focus:ring-2 focus:ring-primary"
                  name="speciality"
                  value={userProfile.specialityId}
                  onChange={handleChange}
                >
                  <option value="Null">-.-</option>
                  <option value="1">General</option>
                  <option value="2">Ortodoncia</option>
                  <option value="3">Endodoncia</option>
                  <option value="4">Periodoncia</option>
                  <option value="5">Odontopediatría</option>
                  <option value="6">Implantología dental</option>
                </select>
              </div>
            </div>
          )}
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <CustomButton onClick={handleSubmit}>Guardar</CustomButton>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-primary font-bold">USUARIO Y CONTRASEÑA</h1>
        <hr className="my-8 border-gray-500/30" />
        {/* Change password */}
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-600 text-xl mb-1 font-semibold">
                Correo electrónico
              </h5>
              <p className="text-gray-500 text-sm"></p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-700 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-600 text-xl mb-1 font-semibold">
                Contraseña
              </h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <button className="w-full md:auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-700 transition-colors">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
