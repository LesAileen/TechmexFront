import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../../assets/img/prueba.png';
import TablaProductos from '../products/Tablaproductos';
import BotonCategoria from '../categorias/BotonCategoria';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import PedidoTabla from '../pedido/PedidoTabla';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Banner = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de los pedidos
    // y guardarlos en el estado "pedidos"
  }, []);

  const agregarPedido = (producto) => {
    setPedidos([...pedidos, producto]);
  };

  const eliminarPedido = (index) => {
    const nuevosPedidos = [...pedidos];
    nuevosPedidos.splice(index, 1);
    setPedidos(nuevosPedidos);
  };
  
  return (
    <div>
      <Navbar></Navbar>
      <section className="banner" id="home">
        <Container>
          <Row>
            <TablaProductos agregarPedido={agregarPedido} eliminarPedido={eliminarPedido} />
            <PedidoTabla pedidos={pedidos} eliminarPedido={eliminarPedido} />
          </Row>
        </Container>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Banner;