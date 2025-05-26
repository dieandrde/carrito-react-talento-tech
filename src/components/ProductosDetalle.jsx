import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductoDetalle({ agregarAlCarrito }) {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        fetch(`https://681fac0572e59f922ef6d95c.mockapi.io/productos/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setProducto(data);
            setCargando(false);
        })
        .catch((err) => {
            setError("Error al cargar el producto.");
            setCargando(false);
        });
    }, [id]);

    if (cargando) return <p>Cargando producto...</p>;
    if (error) return <p>{error}</p>;


    const pageStyles = {
        mainContainer: {
            paddingTop: '30px', 
            backgroundColor: '#ededed', 
            minHeight: 'calc(100vh - 60px)', 
            paddingBottom: '30px',
        },
        productCard: {
            maxWidth: '1200px', 
            margin: '0 auto',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,.15)',
            padding: '20px',
        },
        imageColumn: {
            paddingRight: '30px', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
        },
        productImage: {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '4px',
            marginBottom: '15px',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,.1)',
        },
        infoColumn: {
            paddingLeft: '20px', 
            borderLeft: '1px solid #eee', 
        },
        title: {
            fontSize: '28px',
            fontWeight: 400,
            color: '#333',
            marginBottom: '10px',
        },
        price: {
            fontSize: '36px',
            fontWeight: 500,
            color: '#333',
            marginBottom: '15px',
        },
        shippingInfo: {
            fontSize: '16px',
            color: '#00a650',
            fontWeight: 600,
            marginBottom: '5px',
        },
        deliveryInfo: {
            fontSize: '14px',
            color: '#666',
            marginBottom: '20px',
        },
        actionButton: {
            width: '100%',
            marginBottom: '10px',
            padding: '12px 20px',
            fontSize: '18px',
            fontWeight: 600,
            borderRadius: '6px',
        },
        buyNowButton: {
            backgroundColor: '#3483fa', 
            borderColor: '#3483fa',
            color: '#fff',
        },
        addToCartButton: {
            backgroundColor: '#00a650', 
            borderColor: '#00a650',
            color: '#fff',
        },
        paymentMethodsSection: {
            marginTop: '30px',
            paddingTop: '20px',
            borderTop: '1px solid #eee',
        },
        paymentIconsContainer: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px', 
            alignItems: 'center',
            marginTop: '10px',
        },
        paymentIcon: {
            width: '40px', 
            height: 'auto',
            borderRadius: '4px',
            border: '1px solid #ddd',
            padding: '2px',
        },
        descriptionSection: {
            maxWidth: '1200px',
            margin: '30px auto',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 1px 2px 0 rgba(0,0,0,.15)',
            padding: '20px',
        },
        descriptionTitle: {
            fontSize: '24px',
            fontWeight: 400,
            marginBottom: '15px',
            color: '#333',
        },
        descriptionText: {
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#555',
        }
    };

    return (
        <div style={pageStyles.mainContainer}>
            <div className="card mb-3" style={pageStyles.productCard}>
                <div className="row g-0">
                    <div className="col-md-5" style={pageStyles.imageColumn}>
                        <img src={producto.imagen} style={pageStyles.productImage} alt={producto.titulo} />
                    </div>

                    <div className="col-md-7" style={pageStyles.infoColumn}>
                        <div className="card-body p-0"> 
                            <p className="text-muted small mb-1">Nuevo | 100 vendidos</p>
                            <h1 style={pageStyles.title}>{producto.titulo}</h1>

                            <div className="d-flex align-items-baseline mb-3">
                                <h2 style={pageStyles.price}>${producto.precio.toLocaleString('es-AR')}</h2>
                            </div>

                            <p style={pageStyles.shippingInfo}>Envío gratis a todo el país</p>
                            <p style={pageStyles.deliveryInfo}>Retirá en correos y otros puntos por $200</p>
                            <p className="text-success fw-bold mb-3">Devolución gratis</p> 

                            <div className="mb-4">
                                <p className="mb-2">Cantidad: <span className="fw-bold">1 unidad</span> ({producto.stock} disponibles)</p>
                                
                                <input type="number" className="form-control mb-3" defaultValue="1" min="1" max={producto.stock} style={{ maxWidth: '80px' }} />

                                <button className="btn btn-primary d-block mb-2" style={{ width: '100%', }}>
                                    Comprar ahora
                                </button>
                                <button
                                    className="btn btn-success d-block"
                                    style={{ width: '100%', }}
                                    onClick={() => agregarAlCarrito(producto)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>

                            <div style={pageStyles.paymentMethodsSection}>
                                <h6>Medios de pago</h6>
                                <p className="mb-2 small text-muted">Hasta 12 cuotas sin interés</p>

                                <p className="mb-1 fw-bold">Tarjetas de crédito</p>
                                <div style={pageStyles.paymentIconsContainer}>
                                    <img src="/images/payments/visa.svg" style={pageStyles.paymentIcon} alt="Visa" />
                                    <img src="/images/payments/mastercard.svg" style={pageStyles.paymentIcon} alt="Mastercard" />
                                    <img src="/images/payments/american-express.svg" style={pageStyles.paymentIcon} alt="American Express" />
                                    <img src="/images/payments/naranja.svg" style={pageStyles.paymentIcon} alt="Naranja X" />
                                </div>

                                <p className="mb-1 mt-3 fw-bold">Tarjetas de débito</p>
                                <div style={pageStyles.paymentIconsContainer}>
                                    <img src="/images/payments/visa-debito.svg" style={pageStyles.paymentIcon} alt="Visa Débito" />
                                    <img src="/images/payments/mastercard-debito.svg" style={pageStyles.paymentIcon} alt="Mastercard Débito" />
                                    <img src="/images/payments/maestro.svg" style={pageStyles.paymentIcon} alt="Maestro" />
                                    <img src="/images/payments/cabal.svg" style={pageStyles.paymentIcon} alt="Cabal" />
                                </div>

                                <p className="mb-1 mt-3 fw-bold">Efectivo</p>
                                <div style={pageStyles.paymentIconsContainer}>
                                    <img src="/images/payments/pago-facil.svg" style={pageStyles.paymentIcon} alt="Pago Fácil" />
                                    <img src="/images/payments/rapipago.svg" style={pageStyles.paymentIcon} alt="Rapipago" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={pageStyles.descriptionSection}>
                <h2 style={pageStyles.descriptionTitle}>Descripción</h2>
                <p style={pageStyles.descriptionText}>{producto.descripcion}</p>
            </div>
        </div>
    );
}
