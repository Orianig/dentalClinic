// import { useState } from 'react'
import { AppRouter } from "./routers/app.router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  
  return (
    <>
      {/* <div>Este es el header</div>
      <nav>
        <a href="#">Register</a>
        {/* If para saber si es admin */}
        {/* <a href="#">Citas</a> */}
      {/* </nav> */}
       <div className="page-container">
       <ToastContainer />
        <AppRouter/>
      </div>
    </>
  )
}

export default App
