import React from 'react';

import './SettingsSkins.css';

import { Card, PanelTable, ChartTable, DataTable, GridTable, ObjectTable } from 'components';

export const SettingsSkins = () => {
  const shits = [
    {
      name: 'operatorBurn operatorBurn operatorBurn operatorBurn operatorBurn operatorBurn',
      type: 'function',
      isReady: 'warning',
    },
    {
      name: 'row2',
      type: 'row2',
      isReady: 'value',
    },
    {
      name: 'row3',
      type: 'row3',
      isReady: 'okay',
    },
    {
      name: 'row4',
      type: 'row4',
      isReady: 'warning',
    },
    {
      name: 'row5',
      type: 'row5',
      isReady: 'okay',
    },
  ];
  const shit = shits[0];
  const fields = [
    {
      name: 'ID',
      selector: 'id',
      hidden: true,
      function: (record) => {
        return record.name;
      },
    },
    {
      name: 'Name',
      type: 'number',
      selector: 'name',
      editable: true,
      range: true,
      domain: true,
    },
    {
      name: 'Type',
      selector: 'type',
      type: 'string',
      align: 'center',
      range: true,
      domain: true,
    },
    {
      name: 'Ready',
      selector: 'isReady',
      type: 'string',
      pill: true,
      align: 'center',
      range: true,
      domain: true,
    },
  ];
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    justifyItems: 'stretch',
  };

  return (
    <div style={{ width: '1200px' }}>
      <div style={style}>
        <Present>
          <Card title="Card" headerLink={null} headerClass="card-center">
            <ObjectTable data={shit} columns={fields} />
          </Card>
        </Present>
        <Present>
          <PanelTable data={shit} columns={fields} />
        </Present>
        <Present>
          <ObjectTable data={shit} columns={fields} />
        </Present>
      </div>
      <Present>
        <DataTable data={shits} columns={fields} />
      </Present>
      <Present>
        <GridTable data={shits} columns={fields} cellSize={1e5} search={true} />
      </Present>
      <Present>
        <ChartTable
          data={shits}
          chartName="skins"
          columns={fields}
          pagination={true}
          chartCtx={{ defPair: ['type', 'isReady'] }}
        />
      </Present>
    </div>
  );
};

const Present = ({ children }) => {
  return <div style={{ border: '1px dashed black', padding: '30px', marginTop: '10px' }}>{children}</div>;
};
