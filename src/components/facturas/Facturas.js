import React, { useState, useEffect } from "react";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";
import axios from 'axios';
import Grafica from "./Grafica";

function Facturas() {
  const [facturas, setFacturas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [facturasPerPage] = useState(10);
  const [fechaInicial, setFechaInicial] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [filteredFacturas, setFilteredFacturas] = useState([]);
  const [ticketMedio, setTicketMedio] = useState(0);

  useEffect(() => {
    fetchFacturas();
  }, []);

  useEffect(() => {
    handleFilter();
    calculateTicketMedio();
  }, [fechaInicial, fechaFinal]);

  const fetchFacturas = async () => {
    try {
      const response = await axios.get("http://localhost:8090/facturas/lista");
      console.log(response.data);
      setFacturas(response.data);
      setFilteredFacturas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

  const handleFilter = () => {
    const filteredFacturas = facturas.filter((factura) => {
      if (fechaInicial && fechaFinal) {
        const fecha = new Date(factura.fecha);
        const fechaFinalAdjusted = new Date(fechaFinal);
        fechaFinalAdjusted.setDate(fechaFinalAdjusted.getDate() + 1); // Agregar un día a la fecha final
        return fecha >= new Date(fechaInicial) && fecha < fechaFinalAdjusted;
      }
      return true;
    });
  
    setFilteredFacturas(filteredFacturas);
  };

  const calculateTicketMedio = () => {
    if (currentFacturas.length > 0) {
      const totalSum = currentFacturas.reduce((sum, factura) => sum + factura.total, 0);
      const ticketMedioValue = totalSum / currentFacturas.length;
      const ticketMedioFormatted = ticketMedioValue.toFixed(2);
      setTicketMedio(ticketMedioFormatted);
    } else {
      setTicketMedio(0);
    }
  };

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

  return (
    <div className="container-facturas">
      <div className="facturas-container" >
        <div style={{backgroundColor:'#FFFFEB', textAlign:'center', marginTop:'20px',marginLeft:'100px', marginRight:'100px'}}>
        <h1 className="title-facturas">Facturas</h1>
        </div>
        <div className="filters">
          <div className="filter">
            <label style={{backgroundColor:'white', marginLeft:'20px', marginRight:'20px', color:'black', fontSize: '18px', border: '2px solid #452404'}} htmlFor="fechaInicial">
              Fecha inicial:
              </label>
            <input
              type="date"
              id="fechaInicial"
              value={fechaInicial}
              onChange={(e) => setFechaInicial(e.target.value)}
            />
          </div>
          <div className="filter" style={{marginLeft:'50px', marginRight:'50px'}}>
            <label style={{backgroundColor:'white', marginLeft:'20px', marginRight:'20px', color:'black', fontSize: '18px', border: '2px solid #452404'}} htmlFor="fechaFinal">
              Fecha final:
              </label>
            <input
              type="date"
              id="fechaFinal"
              value={fechaFinal}
              onChange={(e) => setFechaFinal(e.target.value)}
            />
          </div>
          <div className="filter">
            <button style={{padding:'5px', marginLeft:'20px', marginTop:'10px', backgroundColor:'#ece2c6', borderColor:'#452404', color:'#452404', fontSize: '18px'}} onClick={exportToCsv}>
              Exportar a CSV
            </button>
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th className="header-cell">Fecha</th>
                <th className="header-cell">Factura Id</th>
                <th className="header-cell">Numero de mesa</th>
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
                  <td className="cell">{factura.formasPago}</td>
                  <td className="cell">{factura.total}€</td>
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
      <div className="grafica-container">
        <Grafica datos={facturas} ticketMedio={ticketMedio} />
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