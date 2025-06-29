import { useState } from 'react';

export default function AgregarProducto() {
  const [titulo, setTitulo] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errores, setErrores] = useState({});
  const [imagen, setImagen] = useState('');

  const validar = () => {
    const nuevosErrores = {};
    if (!titulo.trim()) nuevosErrores.titulo = 'El título es obligatorio';
    if (!precio || isNaN(precio) || Number(precio) <= 0) nuevosErrores.precio = 'El precio debe ser mayor a 0';
    if (!descripcion || descripcion.length < 10) nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres';
    return nuevosErrores;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const erroresDetectados = validar();
    if (Object.keys(erroresDetectados).length > 0) {
      setErrores(erroresDetectados);
      return;
    }

    const nuevoProducto = { titulo, precio, descripcion, imagen };

    try {
      const response = await fetch('https://681fac0572e59f922ef6d95c.mockapi.io/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      });

      if (!response.ok) throw new Error('Error al guardar el producto');

      setMensaje('Producto agregado con éxito');
      setTitulo('');
      setPrecio('');
      setDescripcion('');
      setErrores({});
    } catch (error) {
      setMensaje('Hubo un problema al enviar el producto.');
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h2>Agregar nuevo producto</h2>
      {mensaje && <div className="alert alert-info">{mensaje}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          {errores.titulo && <div className="text-danger">{errores.titulo}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Precio</label>
          <input type="number" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} />
          {errores.precio && <div className="text-danger">{errores.precio}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Descripción</label>
          <textarea className="form-control" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
          {errores.descripcion && <div className="text-danger">{errores.descripcion}</div>}
        </div>

        <div className="mb-3">
            <label className="form-label">Imagen (URL)</label>
            <input
            type="url"
            className="form-control"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            placeholder="https://example.com/producto.jpg"
            />
        </div>

        {imagen && (
            <div className="mt-3">
                <p className="mb-1">Vista previa:</p>
                <img src={imagen} alt="Vista previa" className="img-fluid rounded" style={{ maxHeight: '200px' }} />
            </div>
        )}



        <button type="submit" className="btn btn-success">Agregar</button>
      </form>
    </div>
  );
}
