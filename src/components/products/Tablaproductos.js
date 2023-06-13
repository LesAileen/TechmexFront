import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import BotonCategoria from '../categorias/BotonCategoria';
import Nachos from '../../assets/entrantes/nachos.jpg';
import Patatas from '../../assets/entrantes/patatas.png';
import Chicken from '../../assets/entrantes/chicken.jpg';
import PatatasNachos from '../../assets/entrantes/patatas-nachos.jpg';
import Chiles from '../../assets/entrantes/chiles.jpg';
import Arroz from '../../assets/postres/arrozconleche.jpg';
import Leches from '../../assets/postres/tresleches.jpg';
import Queso from '../../assets/postres/queso.jpg';
import Platanos from '../../assets/postres/platanos.jpg';
import Pastor from '../../assets/principales/tacos-pastor.jpg';
import Carnitas from '../../assets/principales/tacos-carnitas.jpg';
import Asada from '../../assets/principales/tacos-carne.jpg';
import QuesadillaPollo from '../../assets/principales/quesadillas-mejicanas.jpg';
import QuesadillaJamon from '../../assets/principales/quesadilla-jamon.jpg';
import QuesadillaQueso from '../../assets/principales/quesadilla-queso.jpg';
import BurritoCarne from '../../assets/principales/burrito-carne.jpg';
import BurritoPicante from '../../assets/principales/burrito-picante.jpg';
import BurritoAsado from '../../assets/principales/burrito-pollo.jpg';
import CocaCola from '../../assets/bebidas/coca-cola.jpg';
import CocaZero from '../../assets/bebidas/coca-zero.jpg';
import Fanta from '../../assets/bebidas/fanta.jpg';
import Nestea from '../../assets/bebidas/nestea.jpg';
import Agua from '../../assets/bebidas/agua.jpg';
import AguaGas from '../../assets/bebidas/agua-gas.jpg';
import Grifo from '../../assets/bebidas/grifo.jpg';
import Mahou from '../../assets/bebidas/mahou.png';
import Tostada from '../../assets/bebidas/tostada.jpg';
import Coronita from '../../assets/bebidas/coronita.jpg';
import Margarita from '../../assets/bebidas/margarita.jpg';
import Jamaica from '../../assets/bebidas/jamaica.jpg';
import Horchata from '../../assets/bebidas/horchata.jpg';
import Michelada from '../../assets/bebidas/michelada.jpg';

const TablaProductos = ({ agregarPedido }) => {
  const [productos, setProductos] = useState([]);
  const [filtroRol, setFiltroRol] = useState("PRINCIPALES");

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

  const obtenerImagenProducto = (productoId) => {
    switch (productoId) {
      case 1:
        return Nachos;
      case 2:
        return Patatas;
      case 3:
        return Chicken;
      case 4:
        return PatatasNachos;
      case 5:
        return Chiles;
      case 6:
        return Arroz;
      case 7:
        return Leches;
      case 8:
        return Queso;
      case 9:
        return Platanos;
      case 10:
        return Pastor;
      case 11:
        return Carnitas;
      case 12:
        return Asada;
      case 13:
        return QuesadillaPollo;
      case 14:
        return QuesadillaJamon;
      case 15:
        return QuesadillaQueso;
      case 16:
        return BurritoCarne;
      case 17:
        return BurritoPicante;
      case 18:
        return BurritoAsado;
      case 19:
        return CocaCola;
      case 20:
        return CocaZero;
      case 21:
        return Fanta;
      case 22:
        return Nestea;
      case 23:
        return Agua;
      case 24:
        return AguaGas;
      case 25:
        return Grifo;
      case 26:
        return Mahou;
      case 27:
        return Tostada;
      case 28:
        return Coronita;
      case 29:
        return Margarita;
      case 30:
        return Jamaica;
      case 31:
        return Horchata;
      case 32:
        return Michelada;
      default:
        // Si no se encuentra una imagen correspondiente, puedes devolver una imagen predeterminada o una URL de imagen genérica
        return;
    }
  };
  
  const productosFiltrados = filtroRol
    ? productos.filter((producto) => producto.categoriaRol === filtroRol)
    : productos;

  return (
    <div>
      <div className="filtro-roles" style={{ width: '100%', justifyContent: 'center' }}>
        <BotonCategoria nombre="PRINCIPALES" onClick={() => filtrarProductosPorRol('PRINCIPALES')} />
        <BotonCategoria nombre="ENTRANTES" onClick={() => filtrarProductosPorRol('ENTRANTES')} />
        <BotonCategoria nombre="POSTRES" onClick={() => filtrarProductosPorRol('POSTRES')} />
        <BotonCategoria nombre="BEBIDAS" onClick={() => filtrarProductosPorRol('BEBIDAS')} />
      </div>
      <div  className="tabla-productos-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.precio}€</td>
              <td>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={obtenerImagenProducto(producto.id)}
                    alt={producto.nombre}
                    style={{ width: '100px', height: '100px', animation: 'none' }}/>
                </div>
              </td>
              <td>
                <div style={{ marginTop:'-30px', marginLeft: '10px', display: 'flex', alignItems: 'center' }}>
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
                    onClick={() => agregarProductoPedido(producto)}>
                    +
                  </button>
                </div>
              </td>  
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TablaProductos;
