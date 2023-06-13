import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner"; // Ruta de la imagen

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="home-container">
        <div className="content-containerhome">
          <div className="centered-texthome">
            <div style={{backgroundColor:'#FFFFEB'}}>
              <h1 className="text-inicio" style={{color:'#452404', marginLeft:'10px', marginRight:'10px'}}>
                TECHMEX
              </h1>
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
