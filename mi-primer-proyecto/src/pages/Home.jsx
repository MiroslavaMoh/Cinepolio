
import MovieCard from "../components/MovieCard";

function Home({cambiarVista}){
    return(
        <main class="grid" style={{
            maxWidth:"1200px",
            margin:"0 auto",
            display:"grid",
            gap:"16px",
            padding:"16px"
        }}>
        
        <MovieCard
            title="Gatotastico: El musical"
            image="src\img\hangcat.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="El gato que dijo Miau"
            image="src\img\hangcat.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Flow, pero aqui el gato no sufre"
            image="src\img\hangcat.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />

        <MovieCard
            title="Gatotastico: El musical 2 la venganza del Miau"
            image="src\img\hangcat.jpg"
            onVerDetalle={() => cambiarVista("detalle")}
        />


        </main>
    )
}

export default Home