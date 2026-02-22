import { useState } from 'react'
import './App.css'

//Componentes
import Header from './components/Header'
import Footer from './components/Footer'

//Páginas importadas
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Detalle from './pages/Details'
import Comida from './pages/Food'
import Otros from './pages/Other'
import Sesion from './pages/Sesion'

function App() {
  const [vistaActual, setVistaActual] = useState("home") //default

  const [itemSeleccionado, setItemSeleccionado] = useState(null) //guarda cualquier item

  function verDetalle(item) { //Lo cambie para reusarlo con comida y otros sin confundirme :(
    setItemSeleccionado(item)
    setVistaActual("detalle")
  }

  return( //vista
    <div style={{ minHeight: "100vh" }}>
      {/* Header controla navegación principal */}
      <Header cambiarVista={setVistaActual} />

      {vistaActual === "home" && (
        <Home verDetalle={verDetalle} />
      )}

      {vistaActual === "cartelera" && (
        <Cartelera verDetalle={verDetalle} />
      )}

      {vistaActual === "detalle" && (
        <Detalle item={itemSeleccionado} />
      )}

      {vistaActual === "comida" && (
        <Comida verDetalle={verDetalle} /> 
      )}

      {vistaActual === "otros" && (
        <Otros verDetalle={verDetalle} />
      )}

      {vistaActual === "sesion" && (
        <Sesion />
      )}

      
      <Footer />
    </div>
  )
}

export default App
