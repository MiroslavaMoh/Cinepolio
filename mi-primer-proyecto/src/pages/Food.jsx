import { useNavigate } from 'react-router-dom'
import MovieCard from '../components/MovieCard'
import comidas from '../data/comida.json'

function Comida() {
  const navigate = useNavigate()

  return (
    <main className="cards-grid">
      {comidas.map((comida) => (
        <MovieCard
          key={comida.id}
          titulo={comida.titulo}
          imagen={comida.imagen}
          onVerDetalle={() => navigate(`/comida/${comida.id}`)}
        />
      ))}
    </main>
  )
}

export default Comida
