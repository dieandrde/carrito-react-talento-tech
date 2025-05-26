import App from "../App";

export default function Carrito({ carrito, eliminarDelCarrito }) {

    return (
        <div className="container mt-5 pt-5">
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
            <p>No hay productos en el carrito.</p>
            ) : (
            <ul className="list-group">
                
                {carrito.map((producto, index) => (
                <li key={index} className="list-group-item">
                    <strong>{producto.titulo}</strong> - ${producto.precio} <button className="btn btn-danger btn-sm" onClick={() => eliminarDelCarrito(producto.id)}>Eliminar</button>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
}
