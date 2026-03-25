import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import coleccionables from '../data/otros.json'

function Otros() {
  const navigate = useNavigate()

  return (
    <main className="cards-grid">
      {coleccionables.map((item) => (
        <MovieCard
          key={item.id}
          titulo={item.titulo}
          imagen={item.imagen}
          onVerDetalle={() => navigate(`/otros/${item.id}`)}
        />
      ))}
    </main>
  )
}

export default Otros
