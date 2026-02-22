import MovieCard from "../components/MovieCard";
import peliculas from "../data/cartelera.json"

function Cartelera({ verDetalle }){ //entre parentesis esta el valor a regresar

    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>

           {peliculas.map((cartelera) => (
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