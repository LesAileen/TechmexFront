import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner"; // Ruta de la imagen
import ImagenInicio from "../../assets/fondo/inicio2.jpg"

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="home-container">
        <div className="content-containerhome">
          <div className="centered-texthome" style={{paddingTop:'5px'}}>
            <div>
              <img src={ImagenInicio} alt="Imagen de inicio" />
            </div>
            <div style={{backgroundColor:'#FFFFEB', marginTop:'10px'}}>            
            <h1 className="text-inicio" style={{color:'#452404'}}>
              TECHMEX
            </h1>
            </div>
            <div className="text-informativo" style={{marginTop:'10px', backgroundColor:'#FFFFEB', color:'#452404', fontSize: '18px', border: '2px solid #452404'}}>
              <p>
                Techmex es una innovadora aplicación de comida que te conecta con una amplia variedad de sabores y opciones gastronómicas, llevando la experiencia culinaria a tu alcance con tan solo unos clics.
              </p>
            </div>
            <Link to="/Banner">
              <button className="start-order-buttonhome" style={{marginTop:'10px', backgroundColor:'#ece2c6', borderColor:'#452404', color:'#452404'}}>
                Iniciar Pedido
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
