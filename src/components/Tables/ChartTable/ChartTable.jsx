import React, { Fragment, useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

import { Toolbar } from 'components';

import './ChartTable.css';

//-----------------------------------------------------------------
export const ChartTable = ({ columns, data, title = 'Chart Table (ct-)', search = true, pagination = true }) => {
  const [type, setType] = useState('scatter');
  return (
    <Fragment>
      {' '}
      |<button onClick={() => setType('nAddresses')}>nAddresses</button>
      <button onClick={() => setType('nAppearances')}>nAppearances</button>
      <button onClick={() => setType('indexSizeBytes')}>indexSizeBytes</button>
      <button onClick={() => setType('bloomSizeBytes')}>bloomSizeBytes</button>
      <Toolbar title={title + ': ' + type} search={search} pagination={pagination} />
      <ChartHeader />
      <ChartBody data={data} column={type} />
    </Fragment>
  );
};

//-----------------------------------------------------------------
const ChartHeader = ({ cols }) => {
  return <div className="base-header at-header ct-header">Chart Title</div>;
};

//-----------------------------------------------------------------
const ChartBody = ({ data, column }) => {
  return <Scatter data={data} column={column} />;
};

// function RandomData() {
//   const data = [...Array(100)].map((e, i) => {
//     return {
//       x: Math.random() * 40,
//       y: Math.random() * 40,
//       temparature: Math.random() * 500,
//     };
//   });
//   return data;
// }

function AxisLeft({ yScale, width }) {
  const textPadding = -20;
  const axis = yScale.ticks(5).map((d, i) => (
    <g key={i} className="y-tick">
      <line style={{ stroke: '#e4e5eb' }} y1={yScale(d)} y2={yScale(d)} x1={0} x2={width} />
      <text style={{ fontSize: 12 }} x={textPadding} dy=".32em" y={yScale(d)}>
        {d}
      </text>
    </g>
  ));
  return <Fragment>{axis}</Fragment>;
}

function AxisBottom({ xScale, height }) {
  const textPadding = 10;
  const axis = xScale.ticks(10).map((d, i) => (
    <g className="x-tick" key={i}>
      <line style={{ stroke: '#e4e5eb' }} y1={0} y2={height} x1={xScale(d)} x2={xScale(d)} />
      <text style={{ textAnchor: 'middle', fontSize: 12 }} dy=".71em" x={xScale(d)} y={height + textPadding}>
        {d}
      </text>
    </g>
  ));
  return <Fragment>{axis}</Fragment>;
}

function Scatter({ data, column }) {
  // const data1 = data,
  const w = 800,
    h = 800,
    margin = {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    };

  const width = w - margin.right - margin.left,
    height = h - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, (d) => d.firstTs))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(
      extent(data, (d) => {
        return column === 'nAppearances' ? d[column] * 2 : d[column];
      })
    )
    .range([height, 0]);

  const circles = data.map((d, i) => (
    <circle key={i} r={2} cx={xScale(d.firstTs)} cy={yScale(d[column])} style={{ fill: 'lightblue' }} />
  ));

  return (
    <div
      style={{
        border: '1px dashed brown',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr 1fr',
        justifyItems: 'center',
      }}
    >
      <div></div>
      <div>
        <svg width={w} height={h}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <AxisLeft yScale={yScale} width={width} />
            <AxisBottom xScale={xScale} height={height} />
            {circles}
          </g>
        </svg>
      </div>
      <div></div>
    </div>
  );
}
