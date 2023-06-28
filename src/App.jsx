// import { useState } from 'react'
import { AppRouter } from "./routers/app.router";
// import { SideBar } from "./common/SideBar/SideBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  
  return (
    <>
      {/* <div>Este es el header</div> */}
      {/* <nav>
        <a href="#">Register</a> */}
        {/* If para saber si es admin */}
        {/* <a href="#">Citas</a> */}

       <div className="page-container">
       <ToastContainer />
       {/* <SideBar/> */}
        <AppRouter/>
      </div>
    </>
  )
}

export default App
