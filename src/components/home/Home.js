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
          <h1 className="text-black">TECHMEX</h1>
          <Link to="/Banner">
              <button className="start-order-buttonhome">Iniciar Pedido</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
