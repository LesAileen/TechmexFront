import React from 'react';
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';

const Grafica = ({ datos }) => {
  const data = datos.map((factura) => ({
    x: factura.fecha,
    y: factura.total,
  }));

  return (
    <div className="grafica-container">
      <XYPlot width={1000} height={300} xType="ordinal">
        <VerticalBarSeries data={data} />
        <XAxis tickLabelAngle={-45} hideTicks />
        <YAxis />
      </XYPlot>
    </div>
  );
};

export default Grafica;