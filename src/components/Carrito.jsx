import App from "../App";
import { useCarrito } from './CarritoContext'; 

export default function Carrito() {
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

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
                <button className="btn btn-warning mt-3" onClick={vaciarCarrito}>Vaciar Carrito</button>
            </ul>
            )}
        </div>
    );
}
