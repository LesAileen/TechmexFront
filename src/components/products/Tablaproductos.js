import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import BotonCategoria from '../categorias/BotonCategoria';
import ImagenTacoPrueba from '../../assets/img/Taco.png';

const TablaProductos = ({ agregarPedido }) => {
  const [productos, setProductos] = useState([]);
  const [filtroRol, setFiltroRol] = useState("MENU");

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    try {
      const response = await fetch('http://localhost:8090/productos/lista');
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
    }
  };

  const filtrarProductosPorRol = (rol) => {
    setFiltroRol(rol);
  };

  const agregarProductoPedido = (producto) => {
    agregarPedido(producto);
  };

  const productosFiltrados = filtroRol
    ? productos.filter((producto) => producto.categoriaRol === filtroRol)
    : productos;

  return (
    <div>
      <div className="filtro-roles d-flex">
        <BotonCategoria nombre="MENU" onClick={() => filtrarProductosPorRol('MENU')} />
        <BotonCategoria nombre="INDIVIDUAL" onClick={() => filtrarProductosPorRol('INDIVIDUAL')} />
        <BotonCategoria nombre="ENTRANTES" onClick={() => filtrarProductosPorRol('ENTRANTES')} />
        <BotonCategoria nombre="POSTRES" onClick={() => filtrarProductosPorRol('POSTRES')} />
        <BotonCategoria nombre="BEBIDAS" onClick={() => filtrarProductosPorRol('BEBIDAS')} />
      </div>
      <Table striped bordered hover variant="dark" className="transparent-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={ImagenTacoPrueba}
                    alt={producto.nombre}
                    style={{ width: '100px', height: '100px', animation: 'none' }}
                  />
                  <div style={{ marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
                    <button
                      style={{
                        marginRight: '5px',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        backgroundColor: 'lightgreen',
                        border: 'none',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onClick={() => agregarProductoPedido(producto)}
                    >
                      +
                    </button>

                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaProductos;
