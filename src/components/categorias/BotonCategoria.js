import React from 'react';
import Button from 'react-bootstrap/Button';

const BotonCategoria = ({ nombre, onClick }) => {
  return (
    <>
      <Button
        className="botonCategoria"
        style={{
          backgroundColor: '#452404',
          margin: '0', // Eliminar margen vertical
          padding: '0.5rem 1rem', // Ajustar el relleno según sea necesario
          border: 'none' // Eliminar borde si es necesario
        }}
        onClick={onClick}
      >
        {nombre}
      </Button>{' '}
    </>
  );
};

export default BotonCategoria;