import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import MovieCarousel from "../components/MovieCarousel"
import peliculas from "../data/cartelera.json"

function Cartelera() {
  const navigate = useNavigate()
  const [listaItems, setListaItems] = useState([])

  useEffect(() => {
    setListaItems(peliculas)
  }, [])

  return (
    <>
      <MovieCarousel movies={listaItems} />

      <main className="cards-grid">
        {listaItems.map((cartelera) => (
          <MovieCard
            key={cartelera.id}
            titulo={cartelera.titulo}
            imagen={cartelera.imagen}
            onVerDetalle={() => navigate(`/cartelera/${cartelera.id}`)}
          />
        ))}
      </main>
    </>
  )
}

export default Cartelera
