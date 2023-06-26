import axios from 'axios';
import jwt_decode from 'jwt-decode';

// defino constante url que contiene la dirreccion url base para las solicitudes
const url = 'http://localhost:3000/'

//se define una llamada que recibe el token como argumento
const config = (token) => {
    const headersConfig = {
        headers: { 
          "authorization": `Bearer ${token}`,  
        }
    };
    return headersConfig
}

//REGISTRO
export const registerUsers = async (credentials) => {
    await axios.post(`${url}auth/register`,credentials)
    const login = {
        "name": credentials.email,
        "lastName": credentials.email,
        "email": credentials.email,
        "password": credentials.password,
        "phoneNumber": credentials.email,
    }
    return await loginUsers(login)
}

//LOGIN
//funcion que toma las credenciales del usuario
export const login = async (credentials) => {
    //el resultado de la solicitud se almacena en la constante "res"
    const res = await axios.post(`${url}auth/login`, credentials)
    //se crea un objeto "data" que contiene las credenciales del usuario
    const data = {
        credentials: {
            "token": res.data.token,
            "user": jwt_decode(res.data.token)
        }
    }
    //se devuelve el objeto "data"
    return data
}

// USER PROFILE
export const getUserProfile = async(token) => {
    const res = await axios.get(`${url}user/profile`, config(token))
    return res.data
}

// ALL USERS PROFILE
export const getAllUsersProfile = async(credentials, token) => {
    const res = await axios.get(`${url}user/allProfiles`, credentials , config(token))
    return res.data
}

// UPDATE PROFILE
export const updateProfile = async(id,credentials, token) => {
    const res = await axios.put(`${url}user/updateProfile`, credentials , config(token))
    return res.data
}

// UPDATE PROFILES ADMIN
export const updateProfileByAdmin = async(id,credentials, token) => {
    const res = await axios.put(`${url}user/:${id}`, credentials , config(token))
    return res.data
}

// DELETE PROFILE
export const deleteUser = async(token, id) => {
    const res = await axios.delete(`${url}/user/:${id}`, config(token))
    return res.data
}