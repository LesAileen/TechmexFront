import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ticket from '../ticket/Ticket';

const PedidoTabla = ({ pedidos, eliminarPedido}) => {
  const [cantidad, setCantidad] = useState(''); // Estado para almacenar la cantidad
  const [numeroMesa, setNumeroMesa] = useState('');// Estado para almacenar el número de mesa

  const handleEliminarPedido = (index) => {
    eliminarPedido(index);
  };

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleNumeroMesaChange = (e) => {
    const value = e.target.value;
    if (value === "" || (parseInt(value) > 0 && !isNaN(parseInt(value)))) {
      setNumeroMesa(value);
    }
  };

  const handleComprar = () => {
    const total = calcularTotal();
    const listaProductos = pedidos.map((pedido) => pedido.nombre);

    // Convierte la lista de productos en una cadena JSON
    const listaProductosJSON = JSON.stringify(listaProductos);

    // Realiza el PUT y luego redirige a la página del ticket
    fetch(`http://localhost:8090/pedido/comprar?total=${total}&numeroMesa=${numeroMesa}&lista=${encodeURIComponent(listaProductosJSON)}`, {
      method: 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Compra realizada exitosamente');
        // Realizar acciones adicionales si es necesario
        // Redirige a la página del ticket
        window.location.href = `/ticket?numeroMesa=${numeroMesa}&total=${total}&lista=${encodeURIComponent(listaProductosJSON)}`;
      })
      .catch(error => {
        console.error('Error al realizar la compra:', error);
        // Realizar acciones adicionales si es necesario
      });
  };

  // Función para calcular el total de los precios de los productos
  const calcularTotal = () => {
    let total = 0;
    pedidos.forEach((pedido) => {
      total += pedido.precio;
    });
    return total.toFixed(2);
  };

  return (
    <div>
      <div>
      <Table striped bordered hover variant="dark" className="transparent-table" style={{ maxWidth: '500px', overflowX: 'auto' }}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido, index) => (
              <tr key={index}>
                <td>{pedido.nombre}</td>
                <td>{pedido.precio}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleEliminarPedido(index)}>
                    -
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{calcularTotal()}</td>
            </tr>
            <tr>
              <td colSpan="3" style={{ textAlign: 'center' }}>
              <input
                  type="number"
                  value={numeroMesa}
                  onChange={handleNumeroMesaChange}
                  placeholder="Número de mesa"
                  onKeyDown={(e) => {
                    if (!/\d/.test(e.key) && e.key !== 'Backspace') {
                      e.preventDefault();
                    }
                  }}
                />
              </td>
            </tr>
            <tr>
            <td colSpan="3" style={{ textAlign: 'center' }}>
              <Button variant="primary" size="sm" onClick={handleComprar}>
                <Link to={`/ticket?numeroMesa=${numeroMesa}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                  Pedir
                </Link>
              </Button>
            </td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
};

export default PedidoTabla;