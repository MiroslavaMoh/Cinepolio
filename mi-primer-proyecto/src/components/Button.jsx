function Button({ text, onClick }) {
    return (
    <button
    onClick={onClick}
    style={{
        padding: "8px 16px",
        backgroundColor: "#FEBD06",
        border: "none",
        borderRadius: "4px",
        color: "#fff",
        cursor: "pointer",
        marginTop:"8px"
    }}
    >
        {text}</button>
    )
}

export default Button