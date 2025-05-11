import { useState } from 'react';
import Productos from './components/Productos';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    return (
        <>
            <Header carrito={carrito} />
            <main>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/public/images/portada-1.png" className="d-block w-100" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="/public/images/portada-2.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                        <div className="carousel-item">
                            <img src="/public/images/portada-3.jpg" className="d-block w-100" alt="..." style={{ maxHeight: '500px', objectFit: 'cover' }} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <h2 className="text-center mt-4">Productos Disponibles</h2>
                <Productos agregarAlCarrito={agregarAlCarrito} />
            </main>
        </>
    );
}

export default App;