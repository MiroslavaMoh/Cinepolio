import MovieCard from "../components/MovieCard";

function Otros({cambiarVista}){
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
            <MovieCard
                title="Funko"
                image="src\img\funko.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Funko 1"
                image="src\img\funko.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Funko 3"
                image="src\img\funko.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Funko 4"
                image="src\img\funko.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

        </main>
    )

}
export default Otros