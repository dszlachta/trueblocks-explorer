import React, { Fragment, useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

import { Toolbar } from 'components';

import './ChartTable.css';

//-----------------------------------------------------------------
export const ChartTable = ({ columns, data, title = 'Chart Table (ct-)', search = true, pagination = true }) => {
  const [range, setRange] = useState('firstTs');
  const [domain, setDomain] = useState('nAddresses');

  const chartCtx = {
    range: range,
    setRange: setRange,
    domain: domain,
    setDomain: setDomain,
    rangeCol: columns.filter((column) => {
      return column.selector === range;
    })[0],
    domainCol: columns.filter((column) => {
      return column.selector === domain;
    })[0],
  };

  const theTitle = (title === '' ? '' : title + ': ') + chartCtx.domainCol.name + ' X ' + chartCtx.rangeCol.name;
  return (
    <div style={{ display: 'inline' }}>
      <Toolbar title={theTitle} search={search} pagination={pagination} />
      <ChartHeader title={domain + ' / ' + range} />
      <ChartBody data={data} columns={columns} chartCtx={chartCtx} />
    </div>
  );
};

//-----------------------------------------------------------------
const ChartHeader = ({ title }) => {
  return <Fragment></Fragment>;
  //<div className="base-header at-header ct-header">{title}</div>;
};

const ChartBody = ({ data, columns, chartCtx }) => {
  return <Scatter data={data} columns={columns} chartCtx={chartCtx} />;
};

//-----------------------------------------------------------------
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

//-----------------------------------------------------------------
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

//-----------------------------------------------------------------
function Scatter({ data, columns, chartCtx }) {
  const w = 800;
  const h = 800;
  const margin = {
    top: 40,
    bottom: 40,
    left: 40,
    right: 40,
  };

  const width = w - margin.right - margin.left;
  const height = h - margin.top - margin.bottom;

  const xScale = scaleLinear()
    .domain(extent(data, (d) => d[chartCtx.rangeCol.selector]))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(
      extent(data, (d) => {
        return chartCtx.domain === 'nAppearances' ? d[chartCtx.domainCol.selector] * 2 : d[chartCtx.domainCol.selector];
      })
    )
    .range([height, 0]);

  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={3}
      cx={xScale(d[chartCtx.range])}
      cy={yScale(d[chartCtx.domain])}
      style={{ fill: 'lightblue' }}
    />
  ));

  const selected = { backgroundColor: 'blue', color: 'white', fontSize: '.9em', margin: '2px' };
  const notSelected = { fontSize: '.9em', margin: '2px' };
  const getStyle = (axis, field) => {
    return axis === 'range'
      ? field === chartCtx.range
        ? selected
        : notSelected
      : field === chartCtx.domain
      ? selected
      : notSelected;
  };
  const getButton = (axis, column) => {
    const key = axis + '_' + column.selector;
    return axis === 'range' ? (
      <button key={key} style={getStyle(axis, column.selector)} onClick={() => chartCtx.setRange(column.selector)}>
        {column.name + (column.function ? '*' : '')}
      </button>
    ) : (
      <button key={key} style={getStyle(axis, column.selector)} onClick={() => chartCtx.setDomain(column.selector)}>
        {column.name + (column.function ? '*' : '')}
      </button>
    );
  };

  return (
    <div
      style={{
        border: '1px dashed brown',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr 1fr',
        justifyItems: 'center',
      }}
      className="at-body"
    >
      <div>
        <h4>Range: </h4>
        {columns.map((column) => {
          if (!column.range) return '';
          return getButton('range', column);
        })}
        <br />
        <br />
        <h4>Domain: </h4>
        {columns.map((column) => {
          if (!column.domain) return '';
          return getButton('domain', column);
        })}
        <hr />
        {'* - functional fields'}
      </div>
      <div className="at-row" style={{ backgroundColor: 'white', margin: '8px' }}>
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
