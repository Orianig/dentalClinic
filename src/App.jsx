import { useState } from 'react'
import { AppRouter } from "./routers/app.router";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className="page-container">
        <AppRouter></AppRouter>
      </div>
    </>
  )
}

export default App
