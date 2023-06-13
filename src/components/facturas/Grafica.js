import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

const Grafica = ({ datos, ticketMedio}) => {
  const data = datos.map((factura) => ({
    x: factura.fecha,
    y: factura.total,
  }));

  return (
    <div className="grafica" style={{backgroundColor:'#FFFFEB'}}>
      <XYPlot width={1000} height={300} xType="ordinal">
      <VerticalBarSeries data={data} color="#a25e2a"/>
      <XAxis
          tickLabelAngle={-45}
          hideTicks
          style={{ line: { stroke: 'black' }, text: { fill: 'black' } }}
          tickStyle={{ fontSize: '12px', color: 'black' }}
        />
        <YAxis
          style={{ line: { stroke: 'black' }, text: { fill: 'black' } }}
          tickStyle={{ fontSize: '12px', color: 'black' }}
        />
      </XYPlot>
      <div className="grafica-title" style={{textAlign:'center', fontSize:'20px',marginTop:'-40px',padding:'15px'}}>
      <span>Ticket Medio: {ticketMedio}€</span>
      </div>
    </div>
  );
};

export default Grafica;