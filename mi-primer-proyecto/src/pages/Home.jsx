
import MovieCard from "../components/MovieCard";
import peliculas from "../data/pelicula.json"
import { useState, useEffect } from "react";

function Home({ verDetalle }){ //entre parentesis esta el valor a regresar

const [listaPeliculas, setListaPeliculas] = useState([]); //Estado limpio
    useEffect(() => { //Observer si cargó el json
    setListaPeliculas(peliculas); //Estado se llena con el json
    console.log("Ya se cargaron las películas.json");
  }, []);

    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>

            {listaPeliculas.map((pelicula) => (
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