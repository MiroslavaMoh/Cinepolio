import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import MovieCard from "../components/MovieCard"
import peliculas from "../data/pelicula.json"

function Home() {
  const navigate = useNavigate()
  const [listaPeliculas, setListaPeliculas] = useState([])

  useEffect(() => {
    setListaPeliculas(peliculas)
  }, [])

  function irADetalle(id) {
    navigate(`/pelicula/${id}`)
  }

  return (
    <main className="cards-grid">
      {listaPeliculas.map((pelicula) => (
        <MovieCard
          key={pelicula.id}
          titulo={pelicula.titulo}
          imagen={pelicula.imagen}
          onVerDetalle={() => irADetalle(pelicula.id)}
        />
      ))}
    </main>
  )
}

export default Home
