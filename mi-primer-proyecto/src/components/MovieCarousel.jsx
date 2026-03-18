import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Importar tus estilos personalizados
import "./MovieCarousel.css";

function MovieCarousel({ movies }) {
  // Datos de fallback en caso de que movies esté vacío
  const defaultMovies = [
    {
      id: 1,
      titulo: "Ejemplo de Película 1",
      descripcion: "Una descripción emocionante para captar la atención.",
      imagen: "https://via.placeholder.com/300x450/111/fff?text=Poster+1",
    }
  ];

  const moviesToRender = movies && movies.length > 0 ? movies : defaultMovies;

  return (
    <div className="movie-carousel-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
      >
        {moviesToRender.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="movie-slide-content">
              
              {/* COLUMNA IZQUIERDA: Texto */}
              <div className="movie-slide__text">
                <h2 className="movie-slide__title">{movie.titulo}</h2>
                <p className="movie-slide__description">
                  {movie.descripcion || "Haz clic abajo para conocer más detalles sobre la trama y el elenco de esta producción."}
                </p>
                <button className="movie-slide__button">
                  Ver más
                </button>
              </div>

              {/* COLUMNA DERECHA: Imagen */}
              <div className="movie-slide__image-wrapper">
                <img
                  src={movie.imagen}
                  alt={movie.titulo}
                  className="movie-slide__image"
                />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MovieCarousel;