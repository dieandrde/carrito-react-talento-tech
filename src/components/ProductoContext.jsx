import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify'; 

const ProductoContext = createContext();

export const useProductos = () => useContext(ProductoContext);

export const ProductoProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [cargandoProductos, setCargandoProductos] = useState(true);
    const [errorProductos, setErrorProductos] = useState(null);

  
    const fetchProductos = useCallback(async () => {
        setCargandoProductos(true);
        setErrorProductos(null);
    try {
        const response = await fetch('https://681fac0572e59f922ef6d95c.mockapi.io/productos');
        if (!response.ok) {
            throw new Error('No se pudieron cargar los productos.');
        }
        const data = await response.json();
        setProductos(data);
        } catch (err) {
        setErrorProductos(err.message);
        toast.error(`Error al cargar productos: ${err.message}`);
        } finally {
        setCargandoProductos(false);
        }
    }, []); // dependencias

  useEffect(() => {
    fetchProductos();
  }, [fetchProductos]); // cuando fetchProductos cambia

  // funcion editar producto
  const editarProducto = async (productoActualizado) => {
    try {
      const response = await fetch(`https://681fac0572e59f922ef6d95c.mockapi.io/productos/${productoActualizado.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productoActualizado),
      });

      if (!response.ok) {
        throw new Error('Error al actualizar el producto.');
      }
      // re fetch con api
      await fetchProductos();
      toast.success('Producto actualizado con éxito.');
      return { success: true, message: 'Producto actualizado con éxito.' };
    } catch (error) {
      console.error('Error al editar producto:', error);
      toast.error(`Error al actualizar: ${error.message}`);
      return { success: false, message: error.message || 'Hubo un problema al actualizar el producto.' };
    }
  };

  // eliminar produtco
  const eliminarProducto = async (id) => {
    try {
      const response = await fetch(`https://681fac0572e59f922ef6d95c.mockapi.io/productos/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Error al eliminar el producto.');
      }
      // re fecth sicnronizacion api
      await fetchProductos();
      toast.success('Producto eliminado con éxito.');
      return { success: true, message: 'Producto eliminado con éxito.' };
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      toast.error(`Error al eliminar: ${error.message}`);
      return { success: false, message: error.message || 'Hubo un problema al eliminar el producto.' };
    }
  };

  return (
    <ProductoContext.Provider value={{
      productos,
      cargandoProductos,
      errorProductos,
      fetchProductos, 
      editarProducto,   
      eliminarProducto  
    }}>
      {children}
    </ProductoContext.Provider>
  );
};