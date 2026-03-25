import { Routes, Route } from 'react-router-dom'

import Home          from '../pages/Home'
import Cartelera     from '../pages/Cartelera'
import Comida        from '../pages/Food'
import Otros         from '../pages/Other'
import Sesion        from '../pages/Sesion'
import Detalle       from '../pages/Details'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/"               element={<Home />} />
      <Route path="/cartelera"      element={<Cartelera />} />
      <Route path="/alimentos"      element={<Comida />} />
      <Route path="/coleccionables" element={<Otros />} />
      <Route path="/sesion"         element={<Sesion />} />

      {/* Rutas dinámicas de detalle por categoría */}
      <Route path="/pelicula/:id"   element={<Detalle fuente="pelicula" />} />
      <Route path="/cartelera/:id"  element={<Detalle fuente="cartelera" />} />
      <Route path="/comida/:id"     element={<Detalle fuente="comida" />} />
      <Route path="/otros/:id"      element={<Detalle fuente="otros" />} />
    </Routes>
  )
}

export default AppRoutes
