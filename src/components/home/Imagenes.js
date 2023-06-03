import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from 'react';
import PlatoMexicano1 from "../../assets/img/PlatosMexicanos.png";
import PlatoMexicano2 from "../../assets/img/PlatoMexicano2.png"; 
import PlatoMexicano3 from "../../assets/img/PlatoMexicano3.png"; 

function Imagenes() {
  const handleResize = () => {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.style.height = window.innerHeight + 'px';
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="custom-carousel-container">
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PlatoMexicano1}
            alt="First slide"
          />
          <Carousel.Caption>
             {/* Aqui se puede poner texto o titulos */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PlatoMexicano2}
            alt="Second slide"
          />

          <Carousel.Caption>
             {/* Aqui se puede poner texto o titulos */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={PlatoMexicano3}
            alt="Third slide"
          />

          <Carousel.Caption>
             {/* Aqui se puede poner texto o titulos */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Imagenes;