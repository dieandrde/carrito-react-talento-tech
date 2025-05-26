import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    const footerStyles = {
        backgroundColor: '#f5f5f5', 
        color: '#333', 
        padding: '40px 0', 
        borderTop: '1px solid #e7e7e7',
        fontFamily: '-apple-system, BlinkMacMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', 
        fontSize: '15px',
        lineHeight: '1.6',
    };

    const columnTitleStyles = {
        fontWeight: '600', 
        marginBottom: '15px',
        fontSize: '18px',
        color: '#222', 
    };

    const linkStyles = {
        color: '#555',
        textDecoration: 'none',
        marginBottom: '8px',
        display: 'block', 
    };

    const socialIconStyles = {
        width: '30px',
        height: '30px',
        marginRight: '10px',
        transition: 'opacity 0.3s ease',
    };

    const copyRightStyles = {
        fontSize: '13px',
        color: '#666',
        marginTop: '30px',
        paddingTop: '20px',
        borderTop: '1px solid #e7e7e7',
    };

    return (
        <footer style={footerStyles}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 style={columnTitleStyles}>Sobre Nosotros</h5>
                        <p>
                            Somos tu tienda de confianza para tecnología. Ofrecemos los mejores productos con garantía y el mejor servicio al cliente.
                        </p>
                        <p>
                            <i className="bi bi-geo-alt-fill me-2"></i>Avenida Siempreviva 742
                        </p>
                        <p>
                            <i className="bi bi-phone-fill me-2"></i>+54 9 11 2706-8818
                        </p>
                        <p>
                            <i className="bi bi-envelope-fill me-2"></i>info@tecnodiego.com.ar
                        </p>
                    </div>

                    
                    <div className="col-md-3 mb-4">
                        <h5 style={columnTitleStyles}>Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" style={linkStyles}>Inicio</a></li>
                            <li><a href="/productos" style={linkStyles}>Productos</a></li>
                            <li><a href="/about" style={linkStyles}>Sobre Nosotros</a></li>
                            <li><a href="/contact" style={linkStyles}>Contáctanos</a></li>
                            <li><a href="/login" style={linkStyles}>Mi Cuenta</a></li>
                            <li><a href="/carrito" style={linkStyles}>Mi Carrito</a></li>
                        </ul>
                    </div>

                
                    <div className="col-md-3 mb-4">
                        <h5 style={columnTitleStyles}>Ayuda</h5>
                        <ul className="list-unstyled">
                            <li><a href="#!" style={linkStyles}>Preguntas Frecuentes</a></li>
                            <li><a href="#!" style={linkStyles}>Políticas de Envío</a></li>
                            <li><a href="#!" style={linkStyles}>Políticas de Devolución</a></li>
                            <li><a href="#!" style={linkStyles}>Términos y Condiciones</a></li>
                            <li><a href="#!" style={linkStyles}>Política de Privacidad</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 mb-4">
                        <h5 style={columnTitleStyles}>Síguenos</h5>
                        <div className="d-flex mb-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icons/facebook.jpg" alt="Facebook" style={socialIconStyles} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icons/instagram.png" alt="Instagram" style={socialIconStyles} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img src="/images/icons/twitter.png" alt="Twitter/X" style={socialIconStyles} />
                            </a>
                        </div>
                        <h5 style={columnTitleStyles}>Medios de Pago</h5>
                        <div className="d-flex flex-wrap gap-2">
                            <img src="/images/payments/visa.svg" alt="Visa" style={{ width: '40px', height: 'auto', border: '1px solid #ddd', borderRadius: '3px', padding: '2px' }} />
                            <img src="/images/payments/mastercard.svg" alt="Mastercard" style={{ width: '40px', height: 'auto', border: '1px solid #ddd', borderRadius: '3px', padding: '2px' }} />
                            <img src="/images/payments/american-express.svg" alt="American Express" style={{ width: '40px', height: 'auto', border: '1px solid #ddd', borderRadius: '3px', padding: '2px' }} />
                            <img src="/images/payments/naranja.svg" alt="Naranja X" style={{ width: '40px', height: 'auto', border: '1px solid #ddd', borderRadius: '3px', padding: '2px' }} />
                            <img src="/images/payments/pago-facil.svg" alt="Pago Fácil" style={{ width: '40px', height: 'auto', border: '1px solid #ddd', borderRadius: '3px', padding: '2px' }} />
                            <img src="/images/payments/rapipago.svg" alt="RapiPago" style={{ width: '40px', height: 'auto', border: '1px solid #ddd', borderRadius: '3px', padding: '2px' }} />
                        </div>
                    </div>
                </div>

                <div className="row text-center" style={copyRightStyles}>
                    <div className="col-12">
                        <p>&copy; {new Date().getFullYear()} TecnoDiego. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}