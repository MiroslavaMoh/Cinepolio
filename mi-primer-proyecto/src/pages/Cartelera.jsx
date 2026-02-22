import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import peliculas from "../data/cartelera.json"

function Cartelera({ verDetalle }){ //entre parentesis esta el valor a regresar

    const [listaItems, setListaItems] = useState([]); //Variable almacena las peliculas
        useEffect(() => {
        setListaItems(peliculas);
        console.log("Ya se cargaron las cartelera.json");
    }, []);

    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>

           {listaItems.map((cartelera) => (
                <MovieCard
                    key={cartelera.id}
                    titulo={cartelera.titulo}
                    imagen={cartelera.imagen}
                    onVerDetalle={() => verDetalle(cartelera)}
                />
            ))}

        </main>
    )

}
export default Cartelera