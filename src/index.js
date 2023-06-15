import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import RegistrarEmpleado from "./components/admin/RegistrarEmpleado";
import CrearPrducto from "./components/products/CrearProducto";
import Facturas from "./components/facturas/Facturas";
import Banner from './components/home/Banner';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/App" element={<Home />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Añadir productos" element={<CrearPrducto />}></Route>
      <Route path="/Registar empleados" element={<RegistrarEmpleado />}></Route>
      <Route path="/Facturas" element={<Facturas />}></Route>
      <Route path="/Banner" element={<Banner />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
