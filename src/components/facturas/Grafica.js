import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

const Grafica = ({ datos }) => {
  const data = datos.map((factura) => ({
    x: factura.fecha,
    y: factura.total,
  }));

  return (
    <div className="grafica" style={{backgroundColor:'white'}}>
      <XYPlot width={1000} height={300} xType="ordinal">
        <VerticalBarSeries data={data} />
        <XAxis
          tickLabelAngle={-45}
          hideTicks
          style={{ line: { stroke: 'black' }, text: { fill: 'black' } }}
          tickStyle={{ fontSize: '12px', color: 'black' }}
          title="Clientes"
          titleStyle={{ fontSize: '14px', color: 'black' }}
        />
        <YAxis
          style={{ line: { stroke: 'black' }, text: { fill: 'black' } }}
          tickStyle={{ fontSize: '12px', color: 'black' }}
          title="Precio"
          titleStyle={{ fontSize: '14px', color: 'black' }}
        />
      </XYPlot>
    </div>
  );
};

export default Grafica;