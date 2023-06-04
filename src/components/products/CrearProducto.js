import React, { useState } from 'react';
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import { Container } from 'react-bootstrap';

const CrearProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState(0);
  const [categoriaId, setCategoriaId] = useState(0);
  const [imagen, setImagen] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'nombre') {
      setNombre(value);
    } else if (name === 'precio') {
      setPrecio(value);
    } else if (name === 'categoriaId') {
      setCategoriaId(value);
    } else if (name === 'imagen') {
      setImagen(value);
    } else if (name === 'descripcion') {
      setDescripcion(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realiza la llamada a la API para insertar el producto
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      categoria_id: categoriaId,
      imagen: imagen,
      descripcion: descripcion
    };

    // Realiza la llamada a la API para insertar el producto usando fetch o axios
    fetch('http://localhost:8090/productos/insertar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    })
      .then(response => response.json())
      .then(data => {
        // Realiza cualquier acción necesaria después de insertar el producto
        console.log('Producto insertado:', data);
      })
      .catch(error => {
        console.error('Error al insertar el producto:', error);
      });
  };

  return (
    <div>
      <Navbar />
      <Container className="mt-5">
        <h1>Ingresar Producto</h1>
        <form onSubmit={handleSubmit}>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={nombre} onChange={handleInputChange} />
          <br />
          <label>Precio:</label>
          <input type="number" name="precio" value={precio} onChange={handleInputChange} />
          <br />
          <label>Categoría ID:</label>
          <input type="number" name="categoriaId" value={categoriaId} onChange={handleInputChange} />
          <br />
          <label>Imagen:</label>
          <input type="text" name="imagen" value={imagen} onChange={handleInputChange} />
          <br />
          <label>Descripción:</label>
          <textarea name="descripcion" value={descripcion} onChange={handleInputChange}></textarea>
          <br />
          <button type="submit">Guardar</button>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default CrearProducto;
