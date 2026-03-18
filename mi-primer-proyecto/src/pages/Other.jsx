import { useNavigate } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import peliculas from "../data/otros.json"

function Otros() {
  const navigate = useNavigate()

  return (
    <main className="cards-grid">
      {peliculas.map((otros) => (
        <MovieCard
          key={otros.id}
          titulo={otros.titulo}
          imagen={otros.imagen}
          onVerDetalle={() => navigate(`/otros/${otros.id}`)}
        />
      ))}
    </main>
  )
}

export default Otros
