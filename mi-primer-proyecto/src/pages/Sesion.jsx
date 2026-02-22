import { useState } from "react"
import "./Details.css"

function Sesion() {
  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [mensaje, setMensaje] = useState("")

  // Evento submit
  function manejarSesion(e) {
    e.preventDefault()
    if (nombre.trim() === "Miros" && contraseña.trim() === "1234") {
    setMensaje(
      `Gracias ${nombre}, has iniciado tu sesión!`
    )
    } else {
      setMensaje("Nombre o contraseña incorrectos.")
    }

    // Limpiar formulario
    setNombre("")
    setContraseña("")
  }

  return (
    <main style={{ 
        maxWidth: "1200px",
        margin: "0 auto", 
        padding: "24px" }}>
      <h2>Iniciar Sesión</h2>

      <div className="details-formulario">
        <form onSubmit={manejarSesion}>

          <div className="details-campo">
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="details-campo">
            <label>Contraseña:</label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="details-boton">
            Iniciar Sesión
          </button>
        </form>

        {mensaje && (
          <p className="details-mensaje">{mensaje}</p>
        )}
      </div>
    </main>
  )
}

export default Sesion
