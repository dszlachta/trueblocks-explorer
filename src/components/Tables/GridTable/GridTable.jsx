import React, { useState, Fragment, useEffect } from 'react';
import styled from 'styled-components';

import { Toolbar, Card, ObjectTable, ObjectTable2, PanelTable } from 'components';
import { fmtNum, handleClick } from 'components/utils';

import 'components/Tables/DataTable/DataTable.css';
import './GridTable.css';

//-----------------------------------------------------------------
export const GridTable = ({
  data,
  columns,
  title = 'Grid Table (gt-)',
  search = true,
  pagination = true,
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

  return (
    <Fragment>
      <div>selected: {selected}</div>
      <Toolbar title={title} search={search} pagination={pagination} />
      <GridHeader cols={cols} cellSize={cellSize} />
      <div className="at-body gt-body">
        {rows.map((row) => {
          return (
            <GridRow
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
      <DetailTable data={data} columns={columns} start={selected} cellSize={cellSize / 10} />{' '}
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
          <div className={'dt-cell gt-cell ' + cn} onClick={(e) => handleClick(e, setSelected, row * 1e6 + col * 1e5)}>
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
      {cols.map((n) => {
        return <div>{fmtNum(n * (cellSize / 10))}</div>;
      })}
    </div>
  );
};

//-----------------------------------------------------------------
const DetailTable = ({ data, columns, start, cellSize }) => {
  if (start === undefined) return <div>Click a box to see details</div>;

  const range = { start: start, end: start + cellSize };
  const filteredData = data.filter(
    (item) => (item.firstAppearance >= range.start) & (item.firstAppearance < range.end)
  );
  if (filteredData.length > 200 || cellSize > 100000) return 'Click on a box to load its details...';

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
        }}
      >
        <h4>{subtit}</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '4fr 92 4fr', justifyItems: 'center' }}>
          <div></div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              justifyItems: 'space between',
              gridGap: '4px',
            }}
          >
            {filteredData.map((item) => {
              return (
                <Card
                  key={item.index_hash}
                  title={item.firstAppearance + '-' + item.latestAppearance + '.bin'}
                  headerClass={''}
                  iconTray={null}
                  headerLink={''}
                  topIcon={null}
                >
                  <ObjectTable data={item} columns={columns} />
                </Card>
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

// <div style={{border: '1px dashed brown', justifySelf: 'stretch'}}>
// X
// </div>
