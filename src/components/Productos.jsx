import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from './CarritoContext';
import { useProductos } from './ProductoContext'; 
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap'; //form
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { FaCartPlus, FaInfoCircle, FaSearch } from 'react-icons/fa'; 

//estilos
const StyledProductCard = styled(Card)`
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .card-title {
    color: #333;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
  }
  .card-text {
    font-size: 0.95rem;
    color: #666;
  }
  .fw-bold.fs-5 {
    color: #007bff; // Color de precio personalizado
  }
`;

export default function Productos() {
    const { agregarAlCarrito } = useCarrito();
    const { productos, cargandoProductos, errorProductos } = useProductos();

    //estado busqueda
    const [searchTerm, setSearchTerm] = useState('');

    const productosFiltrados = productos.filter(producto =>
        producto.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (producto.categoria && producto.categoria.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (cargandoProductos) {
        return <p className="container mt-5 pt-5">Cargando catálogo. Por favor espere.</p>;
    }
    if (errorProductos) {
        return <p className="container mt-5 pt-5 text-danger">Error: {errorProductos}</p>;
    }

    return (
        <Container className="mt-5 pt-5">
            <Helmet>
                <title>Catálogo de Productos - Tecno Diego</title>
                <meta name="description" content="Explora nuestro catálogo completo de productos electrónicos, desde celulares hasta computadoras, en Tecno Diego." />
            </Helmet>

            <h2 className="mb-4 text-center">Nuestros Productos</h2>

            {/* barra de busuqeda */}
            <Row className="mb-4 justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <Form.Group controlId="searchBar">
                        <div className="input-group">
                            <Form.Control
                                type="text"
                                placeholder="Buscar productos por nombre o categoría..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Buscar productos"
                            />
                            <span className="input-group-text">
                                <FaSearch />
                            </span>
                        </div>
                    </Form.Group>
                </Col>
            </Row>

            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center">
                {productosFiltrados.length > 0 ? (
                    productosFiltrados.map((producto) => (
                        <Col key={producto.id} className="d-flex align-items-stretch">
                            <StyledProductCard className="w-100 shadow-sm">
                                <Card.Img variant="top" src={producto.imagen} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{producto.titulo}</Card.Title>
                                    <Card.Text className="flex-grow-1">{producto.descripcion.substring(0, 100)}...</Card.Text>
                                    <Card.Text className="fw-bold fs-5">${producto.precio}</Card.Text>
                                    <div className="mt-auto">
                                        <Button variant="primary" onClick={() => agregarAlCarrito(producto)} className="me-2" aria-label={`Agregar ${producto.titulo} al carrito`}>
                                            <FaCartPlus className="me-1" /> Agregar al carrito
                                        </Button>
                                        <Link to={`/productos/${producto.id}`} className="btn btn-secondary" aria-label={`Ver detalles de ${producto.titulo}`}>
                                            <FaInfoCircle className="me-1" /> Ver Detalle
                                        </Link>
                                    </div>
                                </Card.Body>
                            </StyledProductCard>
                        </Col>
                    ))
                ) : (
                    <Col xs={12} className="text-center">
                        <p className="fs-5 mt-5">No se encontraron productos que coincidan con tu búsqueda.</p>
                    </Col>
                )}
            </Row>
        </Container>
    );
}