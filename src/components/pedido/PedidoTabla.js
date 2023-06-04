import React from 'react';
import { Table, Button } from 'react-bootstrap';

const PedidoTabla = ({ pedidos, eliminarPedido }) => {
  const handleEliminarPedido = (index) => {
    eliminarPedido(index);
  };

  // Función para calcular el total de los precios de los productos
  const calcularTotal = () => {
    let total = 0;
    pedidos.forEach((pedido) => {
      total += pedido.precio;
    });
    return total;
  };

  return (
    <div style={{ maxHeight: '450px', overflowY: 'auto' }}>
      <Table striped bordered hover variant="dark" className="transparent-table">
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
        <tfoot style={{ position: 'sticky', bottom: 0 }}>
          <tr>
            <td>Total</td>
            <td>{calcularTotal()}</td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};

export default PedidoTabla;
