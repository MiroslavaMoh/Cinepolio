import { NavLink } from 'react-router-dom'

function Header() {
  const linkStyle = ({ isActive }) => ({
    cursor: "pointer",
    color: isActive ? "#3b6fe0" : "#15274D",
    borderBottom: isActive ? "2px solid #3b6fe0" : "2px solid transparent",
    paddingBottom: "4px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "15px",
  })

  return (
    <header
      style={{
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "#DAE6FF",
        margin: "0px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20px",
      }}>

      <h1 style={{ margin: 0 }}>Cinepolio</h1>

      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}>

        <NavLink to="/" style={linkStyle} end>Inicio</NavLink>
        <NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
        <NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
        <NavLink to="/coleccionables" style={linkStyle}>Coleccionables</NavLink>
        <NavLink to="/sesion" style={linkStyle}>Iniciar Sesión</NavLink>

      </nav>
    </header>
  )
}

export default Header
