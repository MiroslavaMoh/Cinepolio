import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const estiloLink = ({ isActive }) =>
    `header__link${isActive ? ' header__link--activo' : ''}`

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <header className="header">
      <div className="header__barra">
        <h1 className="header__titulo">Cinepolio</h1>
        {/* Botón de hamburguesa para dispositivos móviles */}
        <button
          className={`header__hamburguesa${menuAbierto ? ' header__hamburguesa--abierto' : ''}`}
          onClick={() => setMenuAbierto(!menuAbierto)}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`header__nav${menuAbierto ? ' header__nav--visible' : ''}`}>
        <NavLink to="/" className={estiloLink} end onClick={cerrarMenu}>Inicio</NavLink>
        <NavLink to="/cartelera" className={estiloLink} onClick={cerrarMenu}>Cartelera</NavLink>
        <NavLink to="/alimentos" className={estiloLink} onClick={cerrarMenu}>Alimentos</NavLink>
        <NavLink to="/coleccionables" className={estiloLink} onClick={cerrarMenu}>Coleccionables</NavLink>
        <NavLink to="/sesion" className={estiloLink} onClick={cerrarMenu}>Iniciar Sesión</NavLink>
      </nav>
    </header>
  )
}

export default Header
