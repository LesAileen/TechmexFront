import React, { useState} from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PedidoTabla = ({ pedidos, eliminarPedido}) => {
  const [cantidad, setCantidad] = useState(''); // Estado para almacenar la cantidad
  const [numeroMesa, setNumeroMesa] = useState('');// Estado para almacenar el número de mesa
  const [opciones, setOpciones] = useState('tomar');
  const [formaPago, setFormaPago] = useState('tarjeta');

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

  const handleOpcionesChange = (e) => {
    setOpciones(e.target.value);
  };

  const handleFormaPagoChange = (e) => {
    setFormaPago(e.target.value);
  };

  const handlePedir = () => {
    const total = calcularTotal();
    const listaProductos = pedidos.map((pedido) => pedido.nombre);
    const opcion = opciones;
    const pago = formaPago;

    // Convierte la lista de productos en una cadena JSON
    const listaProductosJSON = JSON.stringify(listaProductos);

    // Realiza el PUT y luego redirige a la página del ticket
    fetch(`http://192.168.191.41:8090/pedido/comprar?total=${total}&numeroMesa=${numeroMesa}&lista=${encodeURIComponent(listaProductosJSON)}&formaPago=${pago}&opciones=${opcion}`, {
      method: 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        console.log('Compra realizada exitosamente');
        // Realizar acciones adicionales si es necesario
        
      })
      .catch(error => {
        console.error('Error al realizar la compra:', error);
        // Realizar acciones adicionales si es necesario
      });
      window.location.reload();
  };

  // Función para calcular el total de los precios de los productos
  const calcularTotal = () => {
    let total = 0;
    pedidos.forEach((pedido) => {
      total += pedido.precio;
    });
    return total.toFixed(2);
  };

  const isPedidoValido = numeroMesa !== '' && pedidos.length > 0;

  return (
    <div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <table className="table" style={{ maxWidth: '500px', overflowX: 'auto', tableLayout: 'auto' }}>
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
                <td>{pedido.precio}€</td>
                <td className="align-middle" style={{ textAlign: 'center', verticalAlign: 'top' }}>
                <div style={{ marginTop: '-60px', display: 'flex', justifyContent: 'center' }}>
                  <Button variant="danger" size="sm" onClick={() => handleEliminarPedido(index)}>
                  -
                  </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td style={{display:'flex', justifyContent:'center'}}>{calcularTotal()}€</td>
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
                <Form.Select value={opciones} onChange={handleOpcionesChange} style={{ marginTop: '5px' }}>
                  <option value="tomar">Tomar</option>
                  <option value="llevar">Llevar</option>
                </Form.Select>
                <Form.Select value={formaPago} onChange={handleFormaPagoChange} style={{ marginTop: '5px' }}>
                  <option value="tarjeta">Tarjeta</option>
                  <option value="efectivo">Efectivo</option>
                </Form.Select>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-55px' }}>
                  <Button className= "botonPedir" style={{ backgroundColor: '#ae5618', border: 'none'}} size="sm" onClick={handlePedir} disabled={!isPedidoValido}>
                      Pedir
                  </Button>
                </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  );
};

export default PedidoTabla;