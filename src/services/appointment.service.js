import axios from 'axios';

const url = 'http://localhost:3000/'

const config = (token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };

//CREAR CITA
export const createAppointment = async (token, appointment) => {
    const {data} = await axios.post(`${url}appointments/newAppointment`,appointment, config(token))
    
    return data
}

// MODIFICAR CITA
export const updateAppointment = async(token, id, appointment) => {
    const res = await axios.put(`${url}appointments/${id}`, appointment , config(token))
    return res.data
} //REVISAR LO DE ID

// ELIMINAR CITA
export const deleteAppointment = async(token, id) => {
    const res = await axios.delete(`${url}appointments/${id}`, config(token))
    return res.data
}

// TODAS LAS CITAS (USUARIO)
export const getUserAppointments = async(token) => {
    const res = await axios.get(`${url}appointments/patientAppointments`, config(token))
    return res.data
}

// CITAS EN DETALLE
export const getAppointmentDetails = async(token) => {
    const res = await axios.get(`${url}appointments/appointmentDetail/:${id}`, config(token))
    return res.data
}

// TODAS LAS CITAS
export const getAllAppointments = async(token) => {
    const res = await axios.get(`${url}appointments/allAppointments`, config(token))
    return res.data
}

// TODAS LAS CITAS DEL  (DOCTOR)
export const getAllUserAppointments = async(token) => {
    const res = await axios.get(`${url}appointments/dentistAppointments`, config(token))
    return res.data
}