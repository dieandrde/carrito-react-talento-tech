import { useState } from 'react';
import Productos, { CardBody } from './components/Productos';
import Header from './components/Header';
import './App.css';

const productos = [
  { id: 1, titulo: "Smartwatch", precio: 2500, imagen: "/images/smartwatch.jpg" },
  { id: 2, titulo: "Laptop", precio: 12000, imagen: "/images/laptop.jpg" },
  { id: 3, titulo: "Teclado", precio: 1200, imagen: "/images/teclado.jpg" },
  { id: 4, titulo: "Mouse", precio: 800, imagen: "/images/mouse.jpg" }, 
  { id: 5, titulo: "Monitor", precio: 5000, imagen: "/images/monitor.jpg" },
];

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Header carrito={carrito} />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className='row'>
          <h2>Productos</h2>
          {productos.map((producto) => (
            <Productos key={producto.id} agregarAlCarrito={agregarAlCarrito}>
              <CardBody
                titulo={producto.titulo}
                precio={producto.precio}
                agregarAlCarrito={() => agregarAlCarrito(producto)}
              />
            </Productos>
        ))}
        </div>
      </div>
    </>
  );
}

export default App;
