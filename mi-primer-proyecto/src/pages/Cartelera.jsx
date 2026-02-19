import MovieCard from "../components/MovieCard";

function Cartelera({ verDetalle }){ //entre parentesis esta el valor a regresar
     // Arreglo de películas en cartelera
        const peliculasCartelera = [
            {
            id: 101,
            titulo: "Shingeki No Kyojin: The Final Season",
            imagen: "https://m.media-amazon.com/images/M/MV5BMzVhOGMzYzQtNzgyMi00NjZmLWEzYjUtMjQ2NDE3Njk4MmRkXkEyXkFqcGc@._V1_.jpg",
            descripcion: "La batalla final por la humanidad ha comenzado."
            },
            {
            id: 102,
            titulo: "Bob Esponja: Al Rescate",
            imagen: "https://m.media-amazon.com/images/M/MV5BNjAyZDQwOTktZjc0Yi00MzNjLWI1NmUtODI2ZjJmYWRjOTA3XkEyXkFqcGc@._V1_.jpg",
            descripcion: "Bob Esponja y Patricio viven una nueva aventura submarina."
            }
        ]

    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>

           {peliculasCartelera.map((pelicula) => (
                <MovieCard
                key={pelicula.id}
                titulo={pelicula.titulo}
                imagen={pelicula.imagen}
                onVerDetalle={() => verDetalle(pelicula)}
                />
            ))} 

        </main>
    )

}
export default Cartelera