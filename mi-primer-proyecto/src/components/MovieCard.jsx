import Button from './Button'
import './MovieCard.css'

function MovieCard({ titulo, imagen, onVerDetalle }) {
  return (
    <div className="movie-card">
      <img src={imagen} alt={titulo} className="movie-card__imagen" />
      <div className="movie-card__info">
        <h3>{titulo}</h3>
        <Button text="Ver detalles" onClick={onVerDetalle} />
      </div>
    </div>
  )
}

export default MovieCard
