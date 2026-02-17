import MovieCard from "../components/MovieCard";

function Comida({cambiarVista}){
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
            <MovieCard
                title="Palomitas"
                image="src\img\palomitas.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Nachos"
                image="src\img\palomitas.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Refresco"
                image="src\img\palomitas.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

            <MovieCard
                title="Camarones a la siciliana"
                image="src\img\palomitas.jpg"
                onVerDetalle={() => cambiarVista("detalle")}
            />

        </main>
    )

}
export default Comida