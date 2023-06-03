import React from 'react';
import Button from 'react-bootstrap/Button';

const BotonCategoria = ({ nombre, onClick }) => {
  return (
    <>
      <Button variant="outline-warning" className="btn-custom-lg" onClick={onClick}>
        {nombre}
      </Button>{' '}
    </>
  );
};

export default BotonCategoria;