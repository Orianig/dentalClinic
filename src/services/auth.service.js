import axios from 'axios';
// import jwt_decode from 'jwt-decode';

// defino constante url que contiene la dirreccion url base para las solicitudes
const url = 'http://localhost:3000/'

//se define una llamada que recibe el token como argumento
// const config = (token) => {
//     const headersConfig = {
//         headers: { 
//           "authorization": `Bearer ${token}`,  
//         }
//     };
//     return headersConfig
// }

//REGISTRO
export const register = async (credentials) => {
    const {data} = await axios.post(`${url}auth/register`,credentials)
    return data
}

//LOGIN
//funcion que toma las credenciales del usuario
export const login = async (credentials) => {
    try {
      const res = await axios.post(`${url}auth/login`, credentials);
      console.log('Respuesta de inicio de sesión:', res.data);
      return res.data.token;
    } catch (error) {
      console.error('Error en la solicitud de inicio de sesión:', error);
      throw error;
    }
  };









