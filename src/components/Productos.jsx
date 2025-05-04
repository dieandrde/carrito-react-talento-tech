function Productos(props) {
    const { children , imagen , titulo} = props;
    const width = {
    width: '350px',
    display: 'grid',
};

    return (
    <>
        <div className="card" style={width}>
            <img src={imagen} className="card-img-top" alt={titulo} style={{ height: '200px', objectFit: 'cover' }} />
            <div className="card-body">
                {children}
            </div>
        </div>
    </>
);
}

export function CardBody(props) {
    const { titulo, precio, agregarAlCarrito } = props;
    return (
    <>
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">${precio}</p>
        <button className="btn btn-primary" onClick={agregarAlCarrito}>Agregar al carrito</button>
    </>
);
}

export default Productos;

