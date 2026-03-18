import { useState } from "react"
import { useParams } from "react-router-dom"
import "./Details.css"

import peliculas  from "../data/pelicula.json"
import cartelera  from "../data/cartelera.json"
import comida     from "../data/comida.json"
import otros      from "../data/otros.json"

// Mapa de fuente → datos
const fuentes = { pelicula: peliculas, cartelera, comida, otros }

function Detalles({ fuente }) {
  const { id } = useParams()
  const item = fuentes[fuente]?.find(i => i.id === parseInt(id))

  const [nombre, setNombre] = useState("")
  const [cantidadBoletos, setCantidadBoletos] = useState(1)
  const [mensaje, setMensaje] = useState("")

  if (!item) {
    return (
      <main style={{ padding: "24px", textAlign: "center" }}>
        <h2>No hay elemento seleccionado</h2>
      </main>
    )
  }

  function manejarCompra(e) {
    e.preventDefault()
    setMensaje(`Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${item.titulo}`)
    setNombre("")
    setCantidadBoletos(1)
  }

  return (
    <main className="details-container">
      <h2>{item.titulo}</h2>

      <div className="details-grid">
        <div>
          <img
            src={item.imagen}
            alt={item.titulo}
            className="details-imagen"
          />
        </div>

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
