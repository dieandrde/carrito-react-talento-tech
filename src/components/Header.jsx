import { Link } from 'react-router-dom';
import { useAuthContext } from './AuthContext';
import { useCarrito } from './CarritoContext';
import { FaShoppingCart, FaPlus, FaTools, FaSignInAlt, FaSignOutAlt, FaHome, FaInfoCircle, FaPhone, FaBox } from 'react-icons/fa';


export default function Header() {
  const { user, logout } = useAuthContext();
  const { carrito } = useCarrito();


  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light w-100 shadow-sm">
        <div className="container-fluid">
          <Link className="nav-link fw-semibold text-dark" to="/"><img src="/images/logos/tecno-diego.png" style={{width: '200px', marginRight: '350px',}}></img></Link>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/">Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/productos">Productos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/about">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold text-dark" to="/contact">Contacto</Link>
              </li>
              {/* si y solo si admin*/}
              {user?.rol === 'admin' && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link fw-semibold text-dark" to="/agregar">Agregar Producto</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link fw-semibold text-dark" to="/admin/productos"><FaTools className="me-1" /></Link>
                  </li>
                </>
              )}
            </ul>
            
            <ul className="navbar-nav d-flex flex-row flex-wrap">
              <li className="nav-item col-6 col-lg-auto">
                <Link className="nav-link" to="/carrito" aria-label="Ver carrito de compras">
                  <FaShoppingCart size={20} className="me-1" />
                  <span>({carrito.length})</span>
                </Link>
              </li>
              {!user ? ( // muestra inciar sesion solo si no se está logueado
                <li className="nav-item">
                    <Link className="nav-link fw-semibold text-dark" to="/login"><FaSignInAlt className="me-1" />Iniciar Sesión</Link>
                </li>
              ) : ( // cuando si se está logueado
                <>
                  
                  <li className="nav-item">
                      <span className="nav-link text-dark">Bienvenido, {user.nombre || 'Usuario'}</span>
                  </li>
                  <li className="nav-item">
                      <button className="btn btn-link nav-link fw-semibold text-dark" onClick={logout}><FaSignOutAlt className="me-1" />Cerrar Sesión</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}