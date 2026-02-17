import { useState } from 'react'
import './App.css'

//Componentes nuevos, se deben importar uno por uno
import Header from './components/Header'
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Detalle from './pages/Details'
import Comida from './pages/Food'
import Otros from './pages/Other'

function App() {
  const [vistaActual, setVistaActual] = useState("home")

  return(


    <div style={{minHeight:"100vh"}}>
      <Header cambiarVista={setVistaActual}/>

      {vistaActual === "home" && <Home cambiarVista={setVistaActual}/>}
      {vistaActual === "cartelera" && <Cartelera cambiarVista={setVistaActual}/>}
      {vistaActual === "detalle" && <Detalle/>}
      {vistaActual === "comida" && <Comida cambiarVista={setVistaActual}/>}
      {vistaActual === "otros" && <Otros cambiarVista={setVistaActual}/>}
    </div>
  )
}

export default App
