import { Routes, Route } from 'react-router-dom'
import './App.css'

//Componentes
import Header from './components/Header'
import Footer from './components/Footer'

//Páginas importadas
import Home from './pages/Home'
import Cartelera from './pages/Cartelera'
import Detalle from './pages/Details'
import Comida from './pages/Food'
import Otros from './pages/Other'
import Sesion from './pages/Sesion'

function App() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />

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

      <Footer />
    </div>
  )
}

export default App
