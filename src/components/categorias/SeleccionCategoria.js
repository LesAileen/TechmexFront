import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BotonCategoria from './BotonCategoria';
import TablaProductos from '../products/Tablaproductos';

function SeleccionCategorias() {

  return (
    <>
      <ButtonGroup className="mb-2">
        <BotonCategoria nombre="Principales" />
        <BotonCategoria nombre="Entrantes"  />
        <BotonCategoria nombre="Bebidas"  />
        <BotonCategoria nombre="Postres" /> 
      </ButtonGroup>
    </>
  );
}

export default SeleccionCategorias;
