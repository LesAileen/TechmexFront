import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../../assets/img/prueba.png';
import TablaProductos from '../products/Tablaproductos';
import BotonCategoria from '../categorias/BotonCategoria';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import PedidoTabla from '../pedido/PedidoTabla';

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
    <section className="banner" id="home">
      <Container fluid>
        <Row className="align-items-stretch">
          <Col xs={12} md={6} xl={4} className="d-flex">
            <div className="flex-fill">
              <TrackVisibility once>
                <TablaProductos agregarPedido={agregarPedido} eliminarPedido={eliminarPedido} />
              </TrackVisibility>
            </div>
          </Col>
          <Col xs={12} md={6} xl={4} className="d-flex">
            <div className="flex-fill">
              <TrackVisibility once>
                <PedidoTabla pedidos={pedidos} eliminarPedido={eliminarPedido} />
              </TrackVisibility>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;