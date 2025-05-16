import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Productos from './components/Productos';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './About';
import Contact from './Contact';
import Carrito from './components/Carrito';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(nuevoCarrito);
    }

    return (
        <Router>
                <Header carrito={carrito} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Carousel/>
                            <h2>Elegidos para vos en tecnología:</h2>
                            <Productos agregarAlCarrito={agregarAlCarrito} />
                        </>
                    } />
                    <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito}/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/carrito" element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />} />
                </Routes>
            
        </Router>
    );
}

export default App;