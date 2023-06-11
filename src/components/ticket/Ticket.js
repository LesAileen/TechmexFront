import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Ticket = () => {
  const products = [
    { name: 'Producto 1', price: 10 },
    { name: 'Producto 2', price: 15 },
    { name: 'Producto 3', price: 20 },
  ];

  const total = products.reduce((sum, product) => sum + product.price, 0);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const numeroMesa = searchParams.get('numeroMesa');

  return (
    <div className="container-ticket">
      <div className="ticket">
        <h2>Ticket</h2>
        <table>
          <tbody>
            <tr>
              <td>Número de mesa:</td>
              <td>{numeroMesa}</td>
            </tr>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}:</td>
                <td>${product.price}</td>
              </tr>
            ))}
            <tr>
              <td>Total:</td>
              <td>${total}</td>
            </tr>
            <tr>
              <td>Tomar o llevar:</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="back-button">
        <Link to="/">
          <span>&larr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Ticket;
