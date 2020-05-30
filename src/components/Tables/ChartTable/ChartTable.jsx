import React, { Fragment, useState, useCallback } from 'react';
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
  const [type, setType] = useState(localStorage.getItem(chartName + '-type') || chartCtx.type || '');

  const chartHandler = useCallback(
    (which, value) => {
      switch (which) {
        case 'setType':
          setType(value);
          localStorage.setItem(chartName + '-type', value);
          break;
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
    },
    [chartName, domain, range]
  );

  const chartCtx2 = {
    ...chartCtx,
    type: type,
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
      <Tablebar title={theTitle} search={false} pagination={false} handler={chartHandler} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr minmax(auto, ' + w + 'px) 2fr 2fr',
          paddingTop: '8px',
        }}
        className="at-body"
      >
        <div></div>
        <ChartControls data={data} columns={columns} chartCtx={chartCtx2} />
        <ChartChart data={data} columns={columns} chartCtx={chartCtx2} />
        <ChartDataTable data={data} columns={columns} chartCtx={chartCtx2} />
        <div></div>
      </div>
    </div>
  );
};

//-----------------------------------------------------------------
function ChartChart({ data, columns, chartCtx }) {
  chartCtx.width = w - margin.right - margin.left;

  chartCtx.height = h - margin.top - margin.bottom;

  chartCtx.xScale = scaleLinear()
    .domain(extent(data, (d) => calcValue(d, chartCtx.rangeCol)))
    .range([0, chartCtx.width]);

  chartCtx.yScale = scaleLinear()
    .domain(extent(data, (d) => calcValue(d, chartCtx.domainCol)))
    .range([chartCtx.height, 0]);

  switch (chartCtx.type) {
    case 'scatter':
      return <ScatterChart data={data} columns={columns} chartCtx={chartCtx} />;
    case 'line':
      return <LineChart data={data} columns={columns} chartCtx={chartCtx} />;
    case 'bar':
      return 'BAR';
    default:
      return 'Unknown chart type ' + chartCtx.type;
  }
}

//-----------------------------------------------------------------
const LineChart = ({ data, columns, chartCtx }) => {
  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={chartCtx.radius || 2}
      cx={chartCtx.xScale(calcValue(d, chartCtx.rangeCol))}
      cy={chartCtx.yScale(calcValue(d, chartCtx.domainCol))}
      style={{ fill: 'steelblue' }}
    />
  ));

  return (
    <div className="at-row chart">
      <svg width={w} height={h}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <YAxis chartCtx={chartCtx} />
          <XAxis chartCtx={chartCtx} />
          {circles}
        </g>
      </svg>
    </div>
  );
};

//-----------------------------------------------------------------
const ScatterChart = ({ data, columns, chartCtx }) => {
  const circles = data.map((d, i) => (
    <circle
      key={i}
      r={chartCtx.radius || 2}
      cx={chartCtx.xScale(calcValue(d, chartCtx.rangeCol))}
      cy={chartCtx.yScale(calcValue(d, chartCtx.domainCol))}
      style={{ fill: 'steelblue' }}
    />
  ));

  return (
    <div className="at-row chart">
      <svg width={w} height={h}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <YAxis chartCtx={chartCtx} />
          <XAxis chartCtx={chartCtx} />
          {circles}
        </g>
      </svg>
    </div>
  );
};

//-----------------------------------------------------------------
const YAxis = ({ chartCtx }) => {
  const axis = chartCtx.yScale.ticks(5).map((tick, i) => {
    const scaledTick = chartCtx.yScale(tick);
    return (
      <g key={i} className="y-tick">
        <line style={{ stroke: '#e4e5eb' }} x1={0} y1={scaledTick} x2={chartCtx.width} y2={scaledTick} />
        <text style={{ fontSize: 12 }} x={-20} y={scaledTick} dy=".32em">
          {tick}
        </text>
      </g>
    );
  });
  return <>{axis}</>;
};

//-----------------------------------------------------------------
function XAxis({ chartCtx }) {
  const axis = chartCtx.xScale.ticks(5).map((d, i) => (
    <g className="x-tick" key={i}>
      <line x1={chartCtx.xScale(d)} y1={0} x2={chartCtx.xScale(d)} y2={chartCtx.height} style={{ stroke: '#e4e5eb' }} />
      <text dy=".71em" x={chartCtx.xScale(d)} y={chartCtx.height + 10} style={{ textAnchor: 'middle', fontSize: 12 }}>
        {d}
      </text>
    </g>
  ));
  return <>{axis}</>;
}

//-----------------------------------------------------------------
const w = 800;
const h = 800;
const margin = {
  top: 40,
  bottom: 40,
  left: 40,
  right: 40,
};

//-----------------------------------------------------------------
const ChartDataTable = ({ data, columns, chartCtx }) => {
  const idCol = {
    width: 1,
    name: 'ID',
    selector: 'id',
    hidden: true,
    onDisplay: (record, fieldName) => '12',
  };
  let dtCols = [idCol, chartCtx.rangeCol, chartCtx.domainCol];
  dtCols[1].hidden = false;
  dtCols[1].width = 1;
  dtCols[2].hidden = false;
  dtCols[2].width = 1;

  return (
    <div>
      <DataTable
        name="chartSideTable"
        style={{ justifySelf: 'center' }}
        data={data}
        columns={dtCols}
        title=""
        search={false}
        pagination={true}
        paginationParts="arrows-only"
      />
    </div>
  );
};

//-----------------------------------------------------------------
const ChartControls = ({ data, columns, chartCtx }) => {
  const getStyle = (which, field) => {
    if (which !== 'range' && which !== 'domain' && which !== 'type') return 'notSelected';
    if (which === 'type') {
      return field === chartCtx.type ? 'selected' : 'notSelected';
    }
    return which === 'range'
      ? field === chartCtx.range
        ? 'selected'
        : 'notSelected'
      : field === chartCtx.domain
      ? 'selected'
      : 'notSelected';
  };
  const getButton = (which, column) => {
    const key = which + '_' + (column && column.selector);
    if (which === 'range') {
      return (
        <button
          key={key}
          className={getStyle(which, column.selector)}
          onClick={() => chartCtx.handler('setRange', column.selector)}
        >
          {column.name + (column.onDisplay ? '*' : '')}
        </button>
      );
    } else if (which === 'domain') {
      return (
        <button
          key={key}
          className={getStyle(which, column.selector)}
          onClick={() => chartCtx.handler('setDomain', column.selector)}
        >
          {column.name + (column.onDisplay ? '*' : '')}
        </button>
      );
    } else if (which === 'type') {
      return (
        <button
          key={key}
          className={getStyle('type', column.selector)}
          onClick={() => chartCtx.handler('setType', column.selector)}
        >
          {column.name}
        </button>
      );
    } else if (which === 'radius') {
      return (
        <button
          key={key}
          className={getStyle(which, '')}
          onClick={() => chartCtx.handler('setRadius', (chartCtx.radius + 1) % 8)}
        >
          radius: {chartCtx.radius}
        </button>
      );
    } else if (which === 'flip') {
      return (
        <button key={key} className={getStyle(which, '')} onClick={() => chartCtx.handler('flip', 0)}>
          flip
        </button>
      );
    } else {
      return <div>Unknown type</div>;
    }
  };

  const scatter = { name: 'Scatter', selector: 'scatter' };
  const line = { name: 'Line', selector: 'line' };
  const bar = { name: 'Bar', selector: 'bar' };
  return (
    <div>
      <h4>Type: </h4>
      {getButton('type', scatter)}
      {getButton('type', line)}
      {getButton('type', bar)}
      <br />
      <br />
      <h4>Range: </h4>
      {columns.map((column, index) => {
        if (!column.range) return '';
        return getButton('range', column);
      })}
      <br />
      <br />
      <h4>Domain: </h4>
      {columns.map((column, index) => {
        if (!column.domain) return '';
        return getButton('domain', column);
      })}
      {'* - functional columns'}
      <br />
      <br />
      <h4>Settings: </h4>
      <div>{getButton('radius')}</div>
      <div>{getButton('flip')}</div>
    </div>
  );
};
