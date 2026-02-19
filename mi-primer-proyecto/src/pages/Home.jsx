
import MovieCard from "../components/MovieCard";
import peliculas from "../data/pelicula.json"

function Home({ verDetalle }){ //entre parentesis esta el valor a regresar
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
        
            {peliculas.map((pelicula) => (
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

export default Home