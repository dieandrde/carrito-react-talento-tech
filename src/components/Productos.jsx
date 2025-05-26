import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Productos({ agregarAlCarrito }) {
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

    const cardStyle = {
    width: '350px',
    display: 'grid',
    margin: '10px',
};

if(cargando){
        return(
            <p style={{ backgroundColor: 'rgba(107, 104, 104, 0.41)', }}>Cargando catálogo. Por favor espere.</p>
        )
    }
    if(error){
        return(<p>{error}</p>)
    }

return (


    <div className="container mt-5 " style={{maxWidth: '100%',}}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {productos.map((producto) => (
          <div key={producto.id} className="card producto-card" style={cardStyle}>
            <img
              src={producto.imagen}
              className="card-img-top"
              alt={producto.titulo}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h4 className="card-title">{producto.titulo}</h4>
              <p className="card-text">{producto.descripcion}</p>
              <h5 className="card-title">${producto.precio}</h5>
              <button
                className="btn btn-primary me-2"
                onClick={() => agregarAlCarrito(producto)}
              >
                Agregar al carrito
              </button>
              <Link to={`/productos/${producto.id}`} className="btn btn-outline-primary btn-sm mt-2">
                Ver detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>

  );

}

