function Detalle(){
    return(
        <main style={{
            padding: "24px",
            maxWidth: "800px",
            margin: "0 auto"
        }}>
        <h2>¿Cómo llegué aquí?</h2>

        <img
            src="src\img\hangcat.jpg"
            alt="Nombre de imagen"
            style={{
                width:"100%",
                borderRadius:"8px",
                marginBottom: "16px"
            }}
        ></img>

        <p>
            Sinopsis bien detallosa y gatuna.
        </p>
        </main>
    )
}

export default Detalle