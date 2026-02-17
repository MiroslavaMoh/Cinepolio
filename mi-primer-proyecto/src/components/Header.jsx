function Header( {cambiarVista} ) {
    return(
    <header 
        style={{ 
            width:"100%",
            boxSizing: "border-box",
            backgroundColor: "#DAE6FF",
            margin:"0px",
            borderRadius:"12px"
        }}>
        <div
            style={{
                display:"absolute",
                justifyContent:"space-between",
                alignItems:"center",
                padding: "16px 24px",
                maxWidth:"100%",
                margin:"0 auto"
            }}>
        </div>
        <h1 style={{margin: 0}}>Cinepolio</h1>
        <nav
            style={{
                display:"flex",
                gap: "24px",
                fontWeight:"bold",
                color:"#15274D",
                fontSize:"15px",
                paddingBottom: "10px",
                paddingLeft:"20px",
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
        </nav>
    </header>

    
)
}

export default Header