import React, { Fragment, useEffect, useState } from 'react';
import { scaleLinear } from 'd3-scale';
import { extent } from 'd3-array';

import { Tablebar, DataTable } from 'components';
import { calcValue } from 'store';

import './ChartTable.css';

//-----------------------------------------------------------------
export const ChartTable = ({
  data,
  columns,
  title = 'Chart Table (ct-)',
  chartName = '',
  chartCtx = { defPair: ['none', 'none'] },
}) => {
  const [range, setRange] = useState(localStorage.getItem(chartName + '-range') || chartCtx.defPair[0]);
  const [domain, setDomain] = useState(localStorage.getItem(chartName + '-domain') || chartCtx.defPair[1]);
  const [radius, setRadius] = useState(localStorage.getItem(chartName + '-radius') || chartCtx.radius || 2);

  const chartHandler = (which, value) => {
    switch (which) {
      case 'setRange':
        setRange(value);
        localStorage.setItem(chartName + '-range', value);
        break;
      case 'setDomain':
        setDomain(value);
        localStorage.setItem(chartName + '-domain', value);
        break;
      case 'setRadius':
        setRadius(value);
        localStorage.setItem(chartName + '-radius', value);
        break;
      case 'flip':
        const r = range;
        const d = domain;
        localStorage.setItem(chartName + '-range', d);
        setRange(domain);
        localStorage.setItem(chartName + '-domain', r);
        setDomain(r);
        break;
      default:
        break;
    }
  };

  const chartCtx2 = {
    ...chartCtx,
    range: range,
    domain: domain,
    radius: radius,
    handler: chartHandler,
    rangeCol: columns.filter((column) => {
      return column.selector === range;
    })[0],
    domainCol: columns.filter((column) => {
      return column.selector === domain;
    })[0],
  };
  if (!(chartCtx2.domainCol && chartCtx2.rangeCol)) return <div>Chart not properly initialized</div>;

  const theTitle = title !== '' ? title : chartCtx2.domainCol.name + ' as a function of ' + chartCtx2.rangeCol.name;
  return (
    <div style={{ display: 'inline' }}>
      <Tablebar title={theTitle} search={false} pagination={false} />
      <ChartHeader />
      <ChartBody data={data} columns={columns} chartCtx={chartCtx2} />
    </div>
  );
};

//-----------------------------------------------------------------
const ChartHeader = ({ title }) => {
  return <div className="at-header-base at-header ct-header">{title}</div>;
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
    .domain(extent(data, (d) => calcValue(d, chartCtx.rangeCol)))
    .range([0, width]);

  const yScale = scaleLinear()
    .domain(
      extent(data, (d) => {
        return calcValue(d, chartCtx.domainCol);
      })
    )
    .range([height, 0]);

  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={chartCtx.radius || 2}
      cx={xScale(calcValue(d, chartCtx.rangeCol))}
      cy={yScale(calcValue(d, chartCtx.domainCol))}
      style={{ fill: 'steelblue' }}
    />
  ));

  const idCol = {
    width: 1,
    name: 'ID',
    selector: 'id',
    hidden: true,
    onDisplay: (record, fieldName) => '12',
  };
  let dtCols = [
    idCol,
    chartCtx.rangeCol,
    { selector: 'spacer', type: 'spacer', name: '', width: 1 },
    chartCtx.domainCol,
  ];
  dtCols[1].hidden = false;
  dtCols[1].width = 12;
  dtCols[2].hidden = false;
  dtCols[2].width = 12;
  dtCols[2].align = 'center';

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '2fr 2fr minmax(auto, ' + w + 'px) 2fr 2fr',
        paddingTop: '8px',
      }}
      className="at-body"
    >
      <div></div>
      <Selectors fields={columns} chartCtx={chartCtx} />
      <div className="at-row chart">
        <svg width={w} height={h}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            <AxisLeft yScale={yScale} width={width} />
            <AxisBottom xScale={xScale} height={height} />
            {circles}
          </g>
        </svg>
      </div>
      <div>
        <DataTable
          name="chartSideTable"
          style={{ justifySelf: 'center' }}
          data={data}
          columns={dtCols}
          title=""
          search={false}
          pagination={true}
          arrowsOnly={true}
        />
      </div>
      <div></div>
    </div>
  );
}

const Selectors = ({ fields, chartCtx }) => {
  const selected = { backgroundColor: 'blue', color: 'white', fontSize: '.9em', margin: '2px' };
  const notSelected = { fontSize: '.9em', margin: '2px' };
  const getStyle = (which, field) => {
    if (which !== 'range' && which !== 'domain') return notSelected;
    return which === 'range'
      ? field === chartCtx.range
        ? selected
        : notSelected
      : field === chartCtx.domain
      ? selected
      : notSelected;
  };
  const getButton = (which, column) => {
    const key = which + '_' + (column && column.selector);
    if (which === 'range') {
      return (
        <button
          key={key}
          style={getStyle(which, column.selector)}
          onClick={() => chartCtx.handler('setRange', column.selector)}
        >
          {column.name + (column.onDisplay ? '*' : '')}
        </button>
      );
    } else if (which === 'domain') {
      return (
        <button
          key={key}
          style={getStyle(which, column.selector)}
          onClick={() => chartCtx.handler('setDomain', column.selector)}
        >
          {column.name + (column.onDisplay ? '*' : '')}
        </button>
      );
    } else if (which === 'radius') {
      return (
        <button
          key={key}
          style={getStyle(which, '')}
          onClick={() => chartCtx.handler('setRadius', (chartCtx.radius + 1) % 8)}
        >
          radius: {chartCtx.radius}
        </button>
      );
    } else if (which === 'flip') {
      return (
        <button key={key} style={getStyle(which, '')} onClick={() => chartCtx.handler('flip', 0)}>
          flip
        </button>
      );
    } else {
      return <div>Unknown type</div>;
    }
  };

  return (
    <div>
      <h4>Range: </h4>
      {fields.map((column, index) => {
        if (!column.range) return '';
        return getButton('range', column);
      })}
      <br />
      <br />
      <h4>Domain: </h4>
      {fields.map((column, index) => {
        if (!column.domain) return '';
        return getButton('domain', column);
      })}
      {'* - functional fields'}
      <br />
      <br />
      <h4>Settings: </h4>
      <div>{getButton('radius')}</div>
      <div>{getButton('flip')}</div>
    </div>
  );
};
