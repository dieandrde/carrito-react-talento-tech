import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import Header from './components/Header';
import Carousel from './components/Carousel';
import About from './About';
import Contact from './Contact';
import Carrito from './components/Carrito';
import Productos from './components/Productos';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Login';
import RutaProtegida from './components/RutaProtegida';
import ProductoDetalle from './components/ProductosDetalle';
import Logos from './components/Logos';
import Footer from './components/Footer';
import AgregarProducto from './components/AgregarProducto';



function App() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        alert(`Se agregó 1 unidad de ${producto.titulo}`)
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id)
        setCarrito(nuevoCarrito);
    }

    // const [isAuthenticated, setIsAuthenticated] = useState(false);


    return (
    <AuthProvider>
        <Router>
                <Header carrito={carrito} />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Carousel/>
                            <Logos />
                            <Productos agregarAlCarrito={agregarAlCarrito}  style={{backgroundColor: 'black',}}/>
                        </>
                    } />
                    <Route path="/productos/" element={
                        <>  
                            <h2>Nuestros productos:</h2>
                            <Productos agregarAlCarrito={agregarAlCarrito} /> 
                        </>
                    }/>
                    <Route path="/productos/:id" element={<ProductoDetalle agregarAlCarrito={agregarAlCarrito}/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/carrito" element={
                        <>
                            <RutaProtegida><Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} /> </RutaProtegida>
                    
                        </>
                        
                        } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/agregar" element={<RutaProtegida><AgregarProducto /></RutaProtegida>} />
                </Routes>
            <Footer/>
        </Router>
    </AuthProvider>
    );
}

export default App;