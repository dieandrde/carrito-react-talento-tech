import { Link } from 'react-router-dom';

export default function Header({ carrito }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light w-100 shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src="public/images/tecno-diego.png" style={{width: '200px', marginRight: '350px',}}></img></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">INICIO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">PRODUCTOS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">SOBRE NOSOTROS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">CONTÁCTANOS</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/login">INICIAR SESIÓN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/carrito">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                  </svg>
                  ({carrito.length})
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar productos y más" aria-label="Buscar" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
