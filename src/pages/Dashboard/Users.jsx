import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsersProfile } from "../../services/user.service";
import CardUsers from "../../components/CardUsers";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const authToken = useSelector((state) => state.user.credentials.token);
  const userRoleId = useSelector((state) => state.user.data.roleId);

  useEffect(() => {
    const fetchAllUser = async () => {
      try {
        const usersProfiles = await getAllUsersProfile(authToken);
        if (usersProfiles.data) {
          setAllUsers(usersProfiles.data);
        }
      } catch (error) {
        console.log("Error al obtener los perfiles de usuario:", error);
      }
    };
    fetchAllUser();
  }, [authToken]);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl mb-8">
      <h1 className="text-xl text-primary font-bold">USUARIOS DEL SISTEMA</h1>
      <hr className="my-8 border-gray-500/30" />
      {/* SUBTITULOS PARA LAS CARDS */}
      <div className=" p-2 md:p-2 rounded-xl mb-4 ">
        <div className="flex justify-center ml-10 md:justify-between flex-wrap items-center gap-2 md:gap-4">
          {/* FULL NAME */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">NOMBRE</span>
            </p>
          </div>
          {/* ROLEID */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">TIPO DE USUARIO</span>
            </p>
          </div>
          {/* ESPECIALIDAD */}
          <div className="w-full md:w-1/6">
            <p className="text-sm md:text-base">
              <span className="font-semibold">ESPECIALIDAD</span>
            </p>
          </div>
        </div>
      </div>
      {allUsers.map((user) => (
        <CardUsers
          key={user.id}
          name={user.name}
          lastName={user.lastName}
          roleId={
            user.roleId === 1
              ? "Administrador"
              : user.roleId === 2
              ? "Dentista"
              : user.roleId === 3
              ? "Usuario general"
              : user.roleId === 4
              ? "Gerente"
              : ""
          }
          speciality={user.speciality?.name} // se usa un operador de encadenamiento para acceder al valor ==> ?
          showSpeciality={
            userRoleId === 1 || userRoleId === 2 || userRoleId === 4
          }
        />
      ))}
    </div>
  );
};

export default Users;
