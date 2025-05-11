import { useState } from 'react';

function Header({ carrito }) {
    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

return (
    <nav className="navbar navbar-expand-lg bg-light"> 
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Tecno Diego</a>
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
                        <a className="nav-link" onClick={toggleCarrito} style={{ cursor: 'pointer' }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
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