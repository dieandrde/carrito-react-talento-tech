import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Solo BrowserRouter como Router
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
import { CarritoProvider } from './components/CarritoContext';
import { ProductoProvider } from './components/ProductoContext';
import EditarEliminarProducto from './components/EditarEliminarProducto';
import { ToastContainer } from 'react-toastify'; //  toastcontainer
import 'react-toastify/dist/ReactToastify.css'; // estilos toastify


function App() {
    // const [carrito, setCarrito] = useState([]);
    // const agregarAlCarrito = (producto) => { /* ... */ };
    // const eliminarDelCarrito = (id) => { /* ... */ };

    return (
        <AuthProvider>
            <CarritoProvider>
                <ProductoProvider>
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/" element={
                                <>
                                    <Carousel/>
                                    <Logos />
                                    <Productos />
                                </>
                            } />
                            <Route path="/productos/" element={
                                <>
                                    <Productos /> 
                                </>
                            }/>
                            <Route path="/productos/:id" element={<ProductoDetalle />} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/contact" element={<Contact/>} />
                            <Route path="/carrito" element={<RutaProtegida><Carrito/> </RutaProtegida>} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/agregar" element={<RutaProtegida><AgregarProducto /></RutaProtegida>} />
                            <Route path="/admin/productos" element={<RutaProtegida><EditarEliminarProducto /></RutaProtegida>} />
                        </Routes>
                        <Footer/>
                    </Router>
    
                    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </ProductoProvider>
            </CarritoProvider>
        </AuthProvider>
    );
}

export default App;