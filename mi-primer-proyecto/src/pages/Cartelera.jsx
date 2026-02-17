import MovieCard from "../components/MovieCard";

function Cartelera({cambiarVista}){
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
            <MovieCard
                title="Pelicula de relleno"
                image="src\img\placeholder_movie.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Rellenuto"
                image="src\img\placeholder_movie.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="El relleno que regresa de muerte"
                image="src\img\placeholder_movie.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Relleno fuera del pavo"
                image="src\img\placeholder_movie.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

        </main>
    )

}
export default Cartelera