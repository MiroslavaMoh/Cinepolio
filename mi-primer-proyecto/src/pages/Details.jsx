import { useState } from "react"

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
    <main
      style={{
        padding: "24px",
        maxWidth: "800px",
        margin: "0 auto"
      }}
    >
      <h2>{item.titulo}</h2>

      <img
        src={item.imagen}
        alt={item.titulo}
        style={{
          width: "100%",
          borderRadius: "8px",
          marginBottom: "16px"
        }}
      />

      <p>{item.descripcion}</p>

      <hr style={{ margin: "24px 0" }} />

      <h3>Comprar boletos</h3>

      <form onSubmit={manejarCompra}>
        <div style={{ marginBottom: "12px" }}>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>Cantidad de boletos:</label>
          <input
            type="number"
            min="1"
            value={cantidadBoletos}
            onChange={(e) => setCantidadBoletos(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              marginTop: "4px"
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 16px",
            backgroundColor: "#ff9800",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Comprar
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: "16px", color: "green" }}>
          {mensaje}
        </p>
      )}
    </main>
  )
}

export default Detalles