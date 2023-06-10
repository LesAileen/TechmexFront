import React from 'react';

const Ticket = ({ total, numeroMesa, listaProductos }) => {
  let productos = [];

  if (Array.isArray(listaProductos)) {
    productos = listaProductos;
  }

  return (
    <div>
      <h2>Ticket</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto, index) => (
            <tr key={index}>
              <td>{producto}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: {total}</p>
      <p>Número de mesa: {numeroMesa}</p>
    </div>
  );
};

export default Ticket;