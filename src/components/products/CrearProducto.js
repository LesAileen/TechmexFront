import React, { useState, useEffect } from 'react';
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import axios from 'axios';

const CrearProducto = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8090/productos/lista');
      setProductos(response.data);
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
    }
  };

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setCategoria(selectedOptions);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const nuevoProducto = {
      nombre: nombre,
      precio: precio,
      descripcion: descripcion,
      categoria: categoria
    };
  
    try {
      const params = {
        nombre: encodeURIComponent(nombre),
        precio: encodeURIComponent(precio),
        descripcion: encodeURIComponent(descripcion),
        categoria: encodeURIComponent(categoria)
      };
  
      await axios.post('http://localhost:8090/productos/insertar', null, {
        params: params
      });
  
      setNombre("");
      setPrecio(0);
      setDescripcion("");
      setCategoria("MENU");
      setMostrarModal(false);
  
      obtenerProductos(); // Llamada para obtener los productos actualizados
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };
  
  

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const cerrarModal = () => {
    setMostrarModal(false);
  };

  const handleBorrarProducto = async (id) => {
    try {
      // Eliminar el producto de la lista de productos en el estado local
      setProductos(productos.filter(producto => producto.id !== id));

      // Realizar la solicitud de borrado al backend
      await axios.delete(`http://localhost:8090/productos/borrar/${id}`);
    } catch (error) {
      console.error('Error al borrar el producto:', error);
    }
  };

  const handleActualizarProducto = (index) => {
    // Implementar la lógica de actualización del producto
    // utilizando el índice recibido como parámetro
    console.log("Actualizar producto en índice:", index);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Crear Producto</h2>
        <div className="table-container">
          <table className="excel-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.precio}</td>
                  <td>{producto.descripcion}</td>
                  <td>{producto.categoriaRol}</td>
                  <td className="acciones">
                    <button
                      className="btn-borrar"
                      onClick={() => handleBorrarProducto(producto.id)}
                    >
                      Borrar
                    </button>
                    <button
                      className="btn-actualizar"
                      onClick={() => handleActualizarProducto(index)}
                    >
                      Actualizar
                    </button>
                  </td>
                </tr>
              ))}
              {mostrarModal && (
                <tr>
                  <td></td>
                  <td>
                    <input type="text" value={nombre} onChange={handleNombreChange} />
                  </td>
                  <td>
                    <input type="text" value={precio} onChange={handlePrecioChange} />
                  </td>
                  <td>
                    <input type="text" value={descripcion} onChange={handleDescripcionChange} />
                  </td>
                  <td>
                    <select multiple size="5" value={categoria} onChange={handleCategoriaChange}>
                      <option value="PRINCIPALES">Principales</option>
                      <option value="ENTRANTES">Entrantes</option>
                      <option value="BEBIDAS">Bebidas</option>
                      <option value="POSTRES">Postres</option>
                    </select>
                  </td>
                  <td>
                    <button  className="btn-borrar" type="button" onClick={cerrarModal}>Cancelar</button>
                    <button className="btn-actualizar"type="button" onClick={handleSubmit}>Agregar</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="button-container">
          <button onClick={abrirModal}>Agregar Producto</button>
        </div>
      </div>
      <Footer />
      <style>{`
        .acciones {
          padding: 0;
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default CrearProducto;
