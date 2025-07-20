import React, { useState, useEffect } from 'react';
import { useProductos } from './ProductoContext'; 
import { Modal, Button, Form } from 'react-bootstrap'; 

export default function EditarEliminarProducto() {
  const { productos, cargandoProductos, errorProductos, editarProducto, eliminarProducto } = useProductos();


  const [showEditModal, setShowEditModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [editTitulo, setEditTitulo] = useState('');
  const [editPrecio, setEditPrecio] = useState('');
  const [editDescripcion, setEditDescripcion] = useState('');
  const [editImagen, setEditImagen] = useState('');
  const [editErrores, setEditErrores] = useState({});
  const [editMensaje, setEditMensaje] = useState('');


  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [productoAEliminarId, setProductoAEliminarId] = useState(null);
  const [deleteMensaje, setDeleteMensaje] = useState('');



  const handleEditClick = (producto) => {
    setProductoSeleccionado(producto);
    setEditTitulo(producto.titulo);
    setEditPrecio(producto.precio);
    setEditDescripcion(producto.descripcion);
    setEditImagen(producto.imagen || ''); 
    setEditErrores({});
    setEditMensaje('');
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setProductoSeleccionado(null);
    setEditErrores({});
    setEditMensaje('');
  };

  const validarEdicion = () => {
    const nuevosErrores = {};
    if (!editTitulo.trim()) nuevosErrores.titulo = 'El título es obligatorio';
    if (!editPrecio || isNaN(editPrecio) || Number(editPrecio) <= 0) nuevosErrores.precio = 'El precio debe ser mayor a 0';
    if (!editDescripcion || editDescripcion.length < 10) nuevosErrores.descripcion = 'La descripción debe tener al menos 10 caracteres';
    return nuevosErrores;
  };

  const handleSaveEdit = async () => {
    const erroresDetectados = validarEdicion();
    if (Object.keys(erroresDetectados).length > 0) {
      setEditErrores(erroresDetectados);
      return;
    }

    const productoActualizado = {
      ...productoSeleccionado,
      titulo: editTitulo,
      precio: Number(editPrecio), 
      descripcion: editDescripcion,
      imagen: editImagen,
    };

    const result = await editarProducto(productoActualizado);
    if (result.success) {
      setEditMensaje(result.message);
      setTimeout(() => handleCloseEditModal(), 2000);
    } else {
      setEditMensaje(result.message);
    }
  };

  const handleDeleteClick = (id) => {
    setProductoAEliminarId(id);
    setDeleteMensaje('');
    setShowDeleteConfirmModal(true);
  };

  const handleCloseDeleteConfirmModal = () => {
    setShowDeleteConfirmModal(false);
    setProductoAEliminarId(null);
    setDeleteMensaje('');
  };

  const handleConfirmDelete = async () => {
    if (productoAEliminarId) {
      const result = await eliminarProducto(productoAEliminarId);
      if (result.success) {
        setDeleteMensaje(result.message);
        // se cierra dsps de un tiempo
        setTimeout(() => handleCloseDeleteConfirmModal(), 2000);
      } else {
        setDeleteMensaje(result.message);
      }
    }
  };

  if (cargandoProductos) {
    return <p className="container mt-5 pt-5">Cargando productos para administración...</p>;
  }

  if (errorProductos) {
    return <p className="container mt-5 pt-5 text-danger">Error: {errorProductos}</p>;
  }

  return (
    <div className="container mt-5 pt-5">
      <h2>Administración de Productos</h2>

      {productos.length === 0 ? (
        <p>No hay productos para administrar.</p>
      ) : (
        <table className="table table-striped table-hover mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.titulo}</td>
                <td>${producto.precio}</td>
                <td>{producto.descripcion.substring(0, 50)}...</td>
                <td>
                  <Button variant="warning" size="sm" onClick={() => handleEditClick(producto)} className="me-2">
                    Editar
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDeleteClick(producto.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal de Edición */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editMensaje && (
            <div className={`alert ${editMensaje.includes('éxito') ? 'alert-success' : 'alert-danger'}`}>
              {editMensaje}
            </div>
          )}
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Título</Form.Label>
              <Form.Control type="text" value={editTitulo} onChange={(e) => setEditTitulo(e.target.value)} />
              {editErrores.titulo && <div className="text-danger">{editErrores.titulo}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" value={editPrecio} onChange={(e) => setEditPrecio(e.target.value)} />
              {editErrores.precio && <div className="text-danger">{editErrores.precio}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={3} value={editDescripcion} onChange={(e) => setEditDescripcion(e.target.value)} />
              {editErrores.descripcion && <div className="text-danger">{editErrores.descripcion}</div>}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Imagen (URL)</Form.Label>
              <Form.Control type="url" value={editImagen} onChange={(e) => setEditImagen(e.target.value)} />
            </Form.Group>
            {editImagen && (
              <div className="text-center mb-3">
                <img src={editImagen} alt="Previsualización" style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }} />
              </div>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de Confirmación de Eliminación */}
      <Modal show={showDeleteConfirmModal} onHide={handleCloseDeleteConfirmModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmar Eliminación</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteMensaje ? (
            <div className={`alert ${deleteMensaje.includes('éxito') ? 'alert-success' : 'alert-danger'}`}>
              {deleteMensaje}
            </div>
          ) : (
            <p>¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteConfirmModal}>
            Cancelar
          </Button>
          {!deleteMensaje && ( // confirmar eliminado
            <Button variant="danger" onClick={handleConfirmDelete}>
              Eliminar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}