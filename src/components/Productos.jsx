import { useState, useEffect } from "react";

function Productos({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://681fac0572e59f922ef6d95c.mockapi.io/productos')
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos);
                setCargando(false);
            })
            .catch((error) => {
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);

    if(cargando){
        return(
            <p>Cargando catálogo. Por favor espere.</p>
        )
    }
    if(error){
        return(<p>{error}</p>)
    }

    const width = {
    width: '350px',
    display: 'grid',
};

return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {productos.map((producto) => (
            <div key={producto.id} className="card producto-card" style={width}>
                <img src={producto.imagen} className="card-img-top" alt={producto.titulo} style={{ height: '200px', objectFit: 'cover' }}/>
                <div className="card-body">
                    <ProductoDetalle titulo={producto.titulo} descripcion={producto.descripcion} precio={producto.precio} agregarAlCarrito={() => agregarAlCarrito(producto)}/>
                </div>
            </div>
        ))}
    </div>
    );
}

export function ProductoDetalle(props) {
    const { titulo, descripcion, precio, agregarAlCarrito } = props;
    return (
    <>
        <h4 className="card-title">{titulo}</h4>
        <p className="card-text">{descripcion}</p>
        <h5 className="card-title">${precio}</h5>
        <button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </>
);
}

export default Productos;

