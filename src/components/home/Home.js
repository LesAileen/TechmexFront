import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Footer from "./Footer";
import Imagenes from "./Imagenes";
import CrearProducto from "../products/CrearProducto";
import Tablaproductos from "../products/Tablaproductos";

function Home() {
  return (
    <>
      <div className="home-container">
        <Navbar></Navbar>
        <Banner></Banner>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
