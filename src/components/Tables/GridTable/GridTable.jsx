import React, { useState, Fragment, useEffect } from 'react';

import { Toolbar, PanelTable } from 'components';
import { fmtNum, handleClick } from 'components/utils';

import './GridTable.css';
import { calcValue } from 'store';

//-----------------------------------------------------------------
export const GridTable = ({
  data,
  columns,
  title = 'Grid Table (gt-)',
  search = true,
  meta = { max: 300000, completed: 220001 },
  cellSize = 1e6,
}) => {
  const [selected, setSelected] = useState(localStorage.getItem('grid-select'));
  const largest = meta.max;

  const cols = Array(10)
    .fill()
    .map((_, idx) => idx);

  const rows = Array(Math.ceil(largest / cellSize))
    .fill()
    .map((_, idx) => idx);

  const selectionChanged = (newSelected) => {
    setSelected(newSelected);
    localStorage.setItem('grid-select', newSelected);
  };

  useEffect(() => {
    setSelected(localStorage.getItem('grid-select'));
  }, [meta]);

  function idColumn(columns) {
    const ret = columns.filter((c) => c.selector === 'id');
    return ret ? ret[0] : ret;
  }
  const idCol = idColumn(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  return (
    <Fragment>
      <Toolbar title={title} search={search} />
      <GridHeader cols={cols} cellSize={cellSize} />
      <div className="at-body gt-body">
        {rows.map((row) => {
          return (
            <GridRow
              key={row}
              row={row}
              cols={cols}
              meta={meta}
              cellSize={cellSize}
              selected={selected}
              setSelected={selectionChanged}
            />
          );
        })}
      </div>
      <DetailTable idCol={idCol} data={data} columns={columns} start={selected} cellSize={cellSize / 10} />{' '}
    </Fragment>
  );
};

//-----------------------------------------------------------------
const GridRow = ({ row, cols, meta, cellSize, selected, setSelected }) => {
  return (
    <div className="at-row gt-row">
      <div className="base-header at-sider">{fmtNum(row * cellSize)}:</div>
      {cols.map((col) => {
        const cellStart = row * cellSize + col * (cellSize / 10);
        const cellEnd = row * cellSize + (col + 1) * (cellSize / 10);
        let cn = 'inactive';
        if (meta.completed >= cellEnd) cn = 'completed';
        else if (meta.completed >= cellStart) cn = 'in-progress';
        if (selected === cellStart) cn += ' selected';
        return (
          <div
            key={col}
            className={'at-cell gt-cell ' + cn}
            onClick={(e) => handleClick(e, setSelected, row * 1e6 + col * 1e5)}
          >
            {cn.includes('completed') && '✔'}
          </div>
        );
      })}
    </div>
  );
};

//-----------------------------------------------------------------
const GridHeader = ({ cols, cellSize }) => {
  return (
    <div className="base-header at-header gt-header">
      <div> </div>
      {cols.map((n, idx) => {
        return <div key={n * idx}>{fmtNum(n * (cellSize / 10))}</div>;
      })}
    </div>
  );
};

//-----------------------------------------------------------------
const DetailTable = ({ data, columns, idCol, start, cellSize }) => {
  if (start === undefined) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 50fr 1fr',
          justifyItems: 'space between',
        }}
      >
        <div></div>
        <div
          className="at-body"
          style={{
            borderTop: '0px',
            paddingLeft: '10px',
          }}
        >
          <h4>Click a box to see details</h4>
        </div>
        <div></div>
      </div>
    );
  }

  const range = { start: start, end: start + cellSize };
  const filteredData = data.filter(
    (item) => (item.firstAppearance >= range.start) & (item.firstAppearance < range.end)
  );
  if (filteredData.length > 200 || cellSize > 100000) {
    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 50fr 1fr',
          justifyItems: 'space between',
        }}
      >
        <div></div>
        <div
          className="at-body"
          style={{
            borderTop: '0px',
            paddingLeft: '10px',
          }}
        >
          <h4>Click a box to see details</h4>
        </div>
        <div></div>
      </div>
    );
  }

  const subtit =
    'Details: ' +
    (filteredData.length ? filteredData.length : 'No') +
    ' completed chunks in block range ' +
    range.start +
    '-' +
    range.end;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 50fr 1fr',
        justifyItems: 'space between',
      }}
    >
      <div></div>
      <div
        className="at-body"
        style={{
          borderTop: '0px',
          paddingLeft: '10px',
        }}
      >
        <h4>{subtit}</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 92 4fr', justifyItems: 'center' }}>
          <div></div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
              justifyItems: 'space between',
              gridGap: '4px',
            }}
          >
            {filteredData.map((record) => {
              return (
                <PanelTable
                  key={calcValue(record, idCol) + record.start}
                  data={record}
                  columns={columns}
                  title={record.filename}
                />
              );
            })}
          </div>
          <div></div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
