import MovieCard from "../components/MovieCard";
import peliculas from "../data/comida.json"


function Comida({ verDetalle }){
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
            {peliculas.map((comida) => (
                <MovieCard
                    key={comida.id}
                    titulo={comida.titulo}
                    imagen={comida.imagen}
                    onVerDetalle={() => verDetalle(comida)}
                />
            ))}

        </main>
    )

}
export default Comida