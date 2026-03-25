# Cinepolio
Aplicación web de cartelera de cine desarrollada con React + Vite. Permite explorar películas, alimentos y coleccionables disponibles en la sala, ver detalles de cada producto y simular una compra de boletos.

## Tecnologías utilizadas

- React 19
- React Router DOM 7
- Swiper (carrusel de cartelera)
- Vite 7 (bundler y servidor de desarrollo)

## Estructura del proyecto

```
src/
├── routes/
│   └── AppRoutes.jsx       # Definición centralizada de rutas
├── components/
│   ├── Header.jsx / .css   # Barra de navegación principal
│   ├── Footer.jsx / .css   # Pie de página
│   ├── Button.jsx / .css   # Botón reutilizable
│   ├── MovieCard.jsx / .css# Tarjeta de producto
│   └── MovieCarousel.jsx / .css  # Carrusel de cartelera destacada
├── pages/
│   ├── Home.jsx            # Catálogo de películas
│   ├── Cartelera.jsx       # Cartelera destacada con carrusel
│   ├── Food.jsx            # Catálogo de alimentos
│   ├── Other.jsx           # Catálogo de coleccionables
│   ├── Details.jsx / .css  # Vista de detalle y formulario de compra
│   └── Sesion.jsx          # Formulario de inicio de sesión
└── data/
    ├── pelicula.json       # Datos de películas
    ├── cartelera.json      # Datos de cartelera destacada
    ├── comida.json         # Datos de alimentos
    └── otros.json          # Datos de coleccionables
```

## Cómo ejecutar el proyecto

```bash
npm install
npm run dev
```

---

## Reporte de optimización

### 1. Organización del proyecto

#### Separación de rutas en archivo independiente

**Qué se hizo:** Se creó el archivo `src/routes/AppRoutes.jsx` con todas las definiciones de rutas que antes estaban embebidas dentro de `App.jsx`.

**Justificación técnica:** `App.jsx` debe ser el componente raíz encargado únicamente de armar la estructura global de la página (Header, contenido, Footer). Mezclar las rutas dentro de él viola el principio de responsabilidad única. Al extraerlas a `AppRoutes.jsx`, cada archivo tiene una función clara y el sistema de navegación se puede modificar o escalar sin tocar la lógica del componente raíz.

#### Mejora de estructura de carpetas

**Qué se hizo:** Se agregó la carpeta `src/routes/` para alojar `AppRoutes.jsx`. Cada componente ahora tiene su propio archivo CSS en la misma carpeta donde vive el JSX.

**Justificación técnica:** Colocar el CSS junto a su componente (co-location) facilita la navegación del proyecto: al abrir `Header.jsx` inmediatamente se sabe que `Header.css` define sus estilos, sin buscar en carpetas ajenas. La carpeta `routes/` separa la configuración de navegación de la lógica de componentes y páginas.

---

### 2. Buenas prácticas

#### Eliminación de código innecesario

**Qué se hizo:**

- `App.css`: Se eliminaron las clases `.logo`, `.logo:hover`, `.logo.react:hover`, `@keyframes logo-spin`, `@media (prefers-reduced-motion)`, `.card` y `.read-the-docs`. Estas pertenecían al template de demostración de Vite y nunca fueron utilizadas en el proyecto. Se conservó únicamente `.cards-grid` con sus media queries.

- `index.css`: Se eliminaron las reglas de color oscuro heredadas del template (`color-scheme: light dark`, `background-color: #242424`), el bloque `@media (prefers-color-scheme: light)` que las compensaba de forma inversa, la clase `.montserratRegular` (redundante con la declaración ya existente en `:root`), y las clases `.grid` duplicadas (ya existe `.cards-grid` en `App.css`). Se actualizaron los colores base para que coincidan con la paleta real del proyecto.

- `MovieCarousel.css`: Se corrigió `maxWidth: 100%` (sintaxis JavaScript incorrecta dentro de un archivo CSS) por `max-width: 100%`.

**Justificación técnica:** El código sin uso aumenta el tamaño de los archivos, confunde a quien mantiene el proyecto y puede generar conflictos de estilos difíciles de rastrear. Mantener solo lo necesario reduce la deuda técnica desde etapas tempranas.

#### Uso adecuado de archivos para estilos

**Qué se hizo:** Se crearon archivos CSS dedicados para los cuatro componentes que usaban únicamente estilos en línea (`style={{}}`):

- `Header.css` con clases `.header`, `.header__titulo`, `.header__nav`, `.header__link`, `.header__link--activo`
- `Footer.css` con clases `.footer`, `.footer__texto`
- `MovieCard.css` con clases `.movie-card`, `.movie-card__imagen`, `.movie-card__info`
- `Button.css` con clases `.btn`

Los archivos JSX correspondientes se actualizaron para referenciar estas clases mediante el prop `className`.

El estilo en línea de `App.jsx` (`minHeight: "100vh"`) se movió a la clase `.app-wrapper` en `App.css`. El estilo en línea de `Sesion.jsx` se eliminó reutilizando la clase `.details-container` ya existente en `Details.css`.

**Justificación técnica:** Los estilos en línea tienen la mayor especificidad en CSS, lo que impide sobreescribirlos desde hojas externas y dificulta la personalización responsiva (no se pueden usar media queries en línea). Separar los estilos en archivos CSS promueve la consistencia, permite reutilización y facilita el mantenimiento visual del proyecto.

#### Uso adecuado de archivos para datos

**Qué se hizo:** Los nombres de variables en `Food.jsx` y `Other.jsx` que estaban incorrectamente llamadas `peliculas` (siendo que contenían datos de comida y coleccionables) se renombraron a `comidas` y `coleccionables` respectivamente.

**Justificación técnica:** Los nombres de variables deben reflejar con precisión el dato que contienen. Llamar `peliculas` a un array de comidas genera confusión al leer el código y dificulta el mantenimiento.

---

### 3. Documentación del proceso

#### Qué se optimizó

- Sistema de rutas centralizado en `src/routes/AppRoutes.jsx`
- Estructura de carpetas con co-location de CSS y JSX
- Limpieza de código muerto del template de Vite en `App.css` e `index.css`
- Paleta de colores base corregida en `index.css` para coincidir con el diseño real
- Estilos en línea migrados a archivos CSS con nomenclatura de clases BEM
- Nomenclatura de variables corregida en `Food.jsx` y `Other.jsx`
- Bug de sintaxis CSS corregido en `MovieCarousel.css` (`maxWidth` → `max-width`)
- Estilo duplicado de `Sesion.jsx` unificado con clase existente en `Details.css`

#### Decisiones técnicas justificadas

| Decisión | Justificación |
|---|---|
| Crear `AppRoutes.jsx` en carpeta `routes/` | Separa responsabilidades: `App.jsx` ensambla la UI, `AppRoutes.jsx` gestiona la navegación |
| CSS junto al componente (co-location) | Reduce búsqueda de archivos; el CSS y JSX de un componente se modifican juntos |
| Nomenclatura BEM en clases CSS | Evita colisiones de nombres globales; hace explícita la relación bloque-elemento-modificador |
| Reutilizar `.details-container` en Sesion | Evita duplicar estilos para contenedores de formulario con mismas propiedades |
| Eliminar template Vite en lugar de comentarlo | El código comentado genera ruido; si se necesita, está disponible en el historial de git |
