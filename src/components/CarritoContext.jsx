import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
    
    const productoExistente = carrito.find(item => item.id === producto.id);

    if (productoExistente) {

    setCarrito(
        carrito.map(item =>
            item.id === producto.id
                ? { ...item, cantidad: (item.cantidad || 1) + 1 } // propiedad 'cantidad'
                : item
        )
    );
    toast.info(`¡${producto.titulo} ya está en tu carrito! Se agregó otra unidad.`);
    } else {
    
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    toast.success(`¡${producto.titulo} agregado al carrito!`); // se agregó
    }
    };

    const eliminarDelCarrito = (id) => {
        const nuevoCarrito = carrito.filter(producto => producto.id !== id);
        setCarrito(nuevoCarrito);
        toast.warn('Producto eliminado del carrito.'); // advertencia
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        toast.info('El carrito ha sido vaciado.'); // info
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>
        {children}
        </CarritoContext.Provider>
    );
};