import { useState } from 'react';

function Header({ carrito }) {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

return (
    <nav className="navbar navbar-expand-lg bg-light"> 
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Tienda de Diego</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item position-relative">  
                        <a className="nav-link" onClick={toggleCarrito} style={{ cursor: 'pointer' }}>Mi Carrito
                            <span className="badge bg-primary position-absolute top-0 start-100 translate-middle rounded-pill">{carrito.length}</span>
                        </a>
                        {mostrarCarrito && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',  
                            right: '0',
                            backgroundColor: 'white',
                            border: '1px solid #ccc',
                            padding: '10px',
                            zIndex: '1000',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
                        }}>
                            {carrito.length === 0 ? (
                            <p>El carrito está vacío</p>
                            ) : (
                            <ul className="list-unstyled">  
                                {carrito.map((item, index) => (
                                <li key={index} className="mb-2">
                                    {item.titulo} - ${item.precio}
                                </li>))}
                            </ul>)}
                        </div>
                        )}
                    </li>
        </ul>
        <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        </div>
    </div>
    </nav>
);
}

export default Header;