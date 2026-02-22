function Header( {cambiarVista} ) {
    return(
    <header 
        style={{ 
            width:"100%",
            boxSizing: "border-box",
            backgroundColor: "#DAE6FF",
            margin:"0px",
            borderRadius:"12px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            paddingTop: "20px",
        }}>
      
        <h1 style={{margin: 0}}>Cinepolio</h1>
        <nav
            style={{
                display:"flex",
                justifyContent: "center",
                gap: "24px",
                fontWeight:"bold",
                color:"#15274D",
                fontSize:"15px",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft:"20px",
                paddingRight:"20px",
            }}>

            <span
            style={{
                cursor:"pointer"
            }}
            onClick={() => cambiarVista("home")}
            >
            Inicio
            </span>

            <span style={{
                cursor:"pointer"
            }}
            onClick={() => cambiarVista("cartelera")}
            >
                Cartelera
            </span>

            <span style={{
                cursor:"pointer"
            }}
            onClick={() => cambiarVista("comida")}
            >
                Alimentos
            </span>

            <span style={{
                cursor:"pointer"
            }}
            onClick={() => cambiarVista("otros")}
            >
                Collecionables
            </span>
            
            <span style={{
                cursor:"pointer"
            }}
            onClick={() => cambiarVista("sesion")}
            >
                Iniciar Sesión
            </span>

        </nav>
    </header>

    
)
}

export default Header