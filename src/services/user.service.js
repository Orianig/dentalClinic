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
// USER PROFILE
export const getUserProfile = async(token) => {
    const res = await axios.get(`${url}user/profile`, config(token))
    return res.data
}

// ALL USERS PROFILE
export const getAllUsersProfile = async(token) => {
    const res = await axios.get(`${url}user/allProfiles`, config(token))
    return res.data
}

// UPDATE PROFILE
export const updateProfile = async(token, credentials) => {
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
    const res = await axios.delete(`${url}user/:${id}`, config(token))
    return res.data
}