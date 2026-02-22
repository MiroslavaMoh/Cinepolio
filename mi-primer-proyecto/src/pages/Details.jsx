import { useState } from "react"
import "./Details.css"

// Vista de detalle de una película
function Detalles({ item }) {

  // Estados para el formulario
  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  // En el caso que no se seleccione ningún item
  if (!item) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>No hay elemento seleccionado</h2>
      </main>
    )
  }

  // Evento submit/enviar
  function manejarCompra(e) { //evento
    e.preventDefault()

    setMensaje( //estado
      `Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${item.titulo}`
    )

    // Opcional: limpiar formulario
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main className="details-container">
      <h2>{item.titulo}</h2>

      <div className="details-grid">
       {/* Columna 1 */}
        <div>
          <img
            src={item.imagen}
            alt={item.titulo}
            className="details-imagen"
          />
          
        </div>

        {/* Columna 2 */}
        <div className="details-formulario">
          <p>{item.descripcion}</p>
          <form onSubmit={manejarCompra}>
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
              <label>Cantidad de boletos:</label>
              <input
                type="number"
                min="1"
                value={cantidadBoletos}
                onChange={(e) => setCantidadBoletos(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="details-boton">
              Comprar
            </button>
          </form>
          {mensaje && (
            <p className="details-mensaje">{mensaje}</p>
          )}
        </div>

      </div>
    
    </main>
  )
}

export default Detalles