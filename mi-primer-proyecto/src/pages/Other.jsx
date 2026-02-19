import MovieCard from "../components/MovieCard";
import peliculas from "../data/otros.json"

function Otros({ verDetalle }){
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
            {peliculas.map((otros) => (
                <MovieCard
                    key={otros.id}
                    titulo={otros.titulo}
                    imagen={otros.imagen}
                    onVerDetalle={() => verDetalle(otros)}
                />
            ))}

        </main>
    )

}
export default Otros