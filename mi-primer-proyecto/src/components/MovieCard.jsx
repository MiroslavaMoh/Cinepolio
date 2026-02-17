import Button from "./Button"

function MovieCard({ title, image, onVerDetalle }) {
return (
    <div style={{ 
        padding: "8px",
        overflow:"hidden",
        boxShadow: "0 3px 12px rgba(218,203,255,0.5)",
        borderRadius: "15px"
    }}>
    
        <img src={image} alt={title}
        style={{
            width: "100%",
            height: "300px",
            objectFit:"cover",
            borderRadius:"5px"
        }}/>
        <div style={{
            padding:"17px",
            textAlign:"center"
        }}>
        
        <h3>{title}</h3>
        <Button text="Ver detalles" onClick={onVerDetalle}/>
        </div>
    </div>
)
}

export default MovieCard