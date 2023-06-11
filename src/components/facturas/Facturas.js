import React, { useState, useEffect } from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import axios from 'axios';

function Facturas() {
  const [facturas, setFacturas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [facturasPerPage] = useState(10);
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [filteredFacturas, setFilteredFacturas] = useState([]);

  useEffect(() => {
    fetchFacturas();
  }, []);

  const fetchFacturas = async () => {
    try {
      const response = await axios.get("http://localhost:8090/facturas/lista");
      setFacturas(response.data);
      setFilteredFacturas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const generateExampleFacturas = () => {
    const exampleFacturas = [];

    for (let i = 0; i < 100; i++) {
      const currentDate = new Date();
      const randomMonth = Math.floor(Math.random() * 12); // Generar un número aleatorio entre 0 y 11 para representar los meses (enero = 0, febrero = 1, etc.)
      const randomDay = Math.floor(Math.random() * getDaysInMonth(currentDate.getFullYear(), randomMonth));
      const randomYear = currentDate.getFullYear() - i;

      const fecha = `${formatNumber(randomDay + 1)}/${formatNumber(randomMonth + 1)}/${randomYear}`;

      const facturaId = i + 1;
      const numeroMesa = i + 1;
      const cliente = `Cliente ${i + 1}`;
      const formaPago = `Pago ${i + 1}`;
      const total = (i + 1) * 10;

      exampleFacturas.push({
        fecha,
        facturaId,
        numeroMesa,
        cliente,
        formaPago,
        total,
      });
    }

    exampleFacturas.sort((a, b) => new Date(b.fecha.split('/').reverse().join('-')) - new Date(a.fecha.split('/').reverse().join('-')));

    setFacturas(exampleFacturas);
    setFilteredFacturas(exampleFacturas);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  useEffect(() => {
    generateExampleFacturas();
  }, []);

  const indexOfLastFactura = currentPage * facturasPerPage;
  const indexOfFirstFactura = indexOfLastFactura - facturasPerPage;

  const currentFacturas = filteredFacturas.slice(indexOfFirstFactura, indexOfLastFactura);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const exportToCsv = () => {
    const csvContent = "data:text/csv;charset=utf-8," + convertToCsv(filteredFacturas);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "facturas.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCsv = (data) => {
    const keys = Object.keys(data[0]);
    const header = keys.join(",") + "\n";
    const rows = data.map((row) => {
      return keys.map((key) => {
        return `"${row[key]}"`;
      }).join(",");
    }).join("\n");
    return header + rows;
  };

  const handleFilter = () => {
    const filteredFacturas = facturas.filter((factura) => {
      if (fechaInicial && fechaFinal) {
        const fecha = new Date(factura.fecha);
        return fecha >= new Date(fechaInicial) && fecha <= new Date(fechaFinal);
      }
      return true;
    });

    setFilteredFacturas(filteredFacturas);
  };

  useEffect(() => {
    handleFilter();
  }, [fechaInicial, fechaFinal]);

  return (
    <div className="facturas-page">
      <div className="facturas-container">
        <h1 className="title-facturas">Facturas</h1>
        <button className="generate-button" onClick={generateExampleFacturas}>Generar facturas de ejemplo</button>
        <div className="filters">
          <div className="filter">
            <label htmlFor="fechaInicial">Fecha inicial:</label>
            <input
              type="date"
              id="fechaInicial"
              value={fechaInicial}
              onChange={(e) => setFechaInicial(e.target.value)}
            />
          </div>
          <div className="filter">
            <label htmlFor="fechaFinal">Fecha final:</label>
            <input
              type="date"
              id="fechaFinal"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
            />
          </div>
          <div className="filter">
            <button onClick={exportToCsv}>Exportar a CSV</button>
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th className="header-cell">Fecha</th>
                <th className="header-cell">Factura Id</th>
                <th className="header-cell">Numero de mesa</th>
                <th className="header-cell">Cliente</th>
                <th className="header-cell">Forma de pago</th>
                <th className="header-cell">Total</th>
              </tr>
            </thead>
            <tbody>
              {currentFacturas.map((factura) => (
                <tr key={factura.facturaId}>
                  <td className="cell">{factura.fecha}</td>
                  <td className="cell">{factura.factura_id}</td>
                  <td className="cell">{factura.num_mesa}</td>
                  <td className="cell">{factura.usuario_id}</td>
                  <td className="cell">{factura.formasPago}</td>
                  <td className="cell">{factura.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pagination">
          {filteredFacturas.length > facturasPerPage && (
            <Pagination
              facturasPerPage={facturasPerPage}
              totalFacturas={filteredFacturas.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const Pagination = ({ facturasPerPage, totalFacturas, paginate, currentPage }) => {
    const pageNumbers = [];
    const maxPageNumbers = 5; // Número máximo de números de página a mostrar
  
    for (let i = 1; i <= Math.ceil(totalFacturas / facturasPerPage); i++) {
      pageNumbers.push(i);
    }
  
    let paginationItems = pageNumbers;
  
    if (pageNumbers.length > maxPageNumbers) {
      const minPage = Math.max(currentPage - Math.floor(maxPageNumbers / 2), 1);
      const maxPage = minPage + maxPageNumbers - 1;
      paginationItems = pageNumbers.slice(minPage - 1, maxPage);
    }
  
    return (
      <ul>
        {currentPage > 1 && (
          <li>
            <button onClick={() => paginate(currentPage - 1)}>{"<"}</button>
          </li>
        )}
  
        {paginationItems.map((number) => (
          <li key={number}>
            <button
              className={currentPage === number ? "active" : ""}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          </li>
        ))}
  
        {currentPage < pageNumbers.length && (
          <li>
            <button onClick={() => paginate(currentPage + 1)}>{">"}</button>
          </li>
        )}
      </ul>
    );
  };
  
  export default Facturas;