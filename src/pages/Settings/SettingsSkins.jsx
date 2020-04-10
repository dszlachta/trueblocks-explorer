import React, { useContext } from 'react';

import './SettingsSkins.css';

import { PanelTable, ChartTable, DataTable, GridTable, ObjectTable2 } from 'components';

export const SettingsSkins = () => {
  const shits = [
    {
      name: 'operatorBurn operatorBurn operatorBurn operatorBurn operatorBurn operatorBurn',
      type: 'function',
      is_ready: 'warning',
    },
    {
      name: 'row2',
      type: 'row2',
      is_ready: 'value',
    },
    {
      name: 'row3',
      type: 'row3',
      is_ready: 'okay',
    },
    {
      name: 'row4',
      type: 'row4',
      is_ready: 'warning',
    },
    {
      name: 'row5',
      type: 'row5',
      is_ready: 'okay',
    },
  ];
  const shit = shits[0];
  const fields = [
    {
      name: 'Name',
      type: 'number',
      selector: 'name',
      editable: true,
    },
    {
      name: 'Type',
      selector: 'type',
      type: 'string',
      align: 'center',
    },
    {
      name: 'Ready',
      selector: 'is_ready',
      type: 'string',
      pill: true,
      align: 'center',
    },
  ];

  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    justifyItems: 'stretch',
  };

  return (
    <div style={{ width: '1500px' }}>
      <div style={style}>
        <Present>
          <PanelTable data={shit} columns={fields} />
        </Present>
        <Present>
          <ObjectTable2 data={shit} columns={fields} />
        </Present>
      </div>
      <Present>
        <DataTable data={shits} columns={fields} />
      </Present>
      <Present>
        <GridTable data={shits} columns={fields} cellSize={1e5} />
      </Present>
      <Present>
        <ChartTable data={shits} columns={fields} />
      </Present>
    </div>
  );
};

const Present = ({ children }) => {
  return <div style={{ border: '1px dashed black', padding: '30px', marginTop: '10px' }}>{children}</div>;
};

// const displayFunc = (record, field) => {
//   console.log('displayFunc: ', record, ' field: ', field);
//   //  if (field.name !== 'body') return null;
//   const datum = record[field.name];
//   if (!datum) return null;
//   const style = {
//     backgroundColor: datum['bgcolor'],
//     color: datum['color'],
//   };
//   return <div style={style}>{field.name}</div>;
// };

// export const SettingsSkins = () => {
//   return <Caddie cn="skins" title="Skins" cards={skins} columns={skinsSchema} displayFunc={displayFunc} />;
// };

// const skin1 = {
//   name: 'Skin Name 1',
//   body: {
//     bgcolor: 0x265077,
//   },
//   whole_page: {
//     color: 'lightyellow',
//     bgcolor: '#265077',
//     border: 'ridge 3px darkgrey',
//   },
//   page: {
//     color: 'lightyellow',
//     bgcolor: '#265077',
//     border: '1px solid grey',
//   },
//   panel: {
//     color: 'lightyellow',
//     bgcolor: '#265077',
//     hover: 'orange',
//     border: '1px dotted rgba(255, 255, 224, 30%)',
//     padding: '10px',
//   },
//   panel2: {
//     color: '#265077',
//     bgcolor: 'white',
//     border: '1px dotted #265077',
//     padding: '10px',
//   },
//   ot: {
//     padding: '4px',
//     border: '1px solid black',
//   },
//   dt: {
//     color: 'var(--color-panel)',
//     bgcolor: 'var(--bgcolor-panel)',
//     color2: 'var(--color-panel)',
//     bgcolor2: 'var(--bgcolor-panel)',
//     border: '1px solid black',
//     padding: '10px',
//   },
//   menu: {
//     hover: '#1f2605',
//     bghover: '#77879c',
//   },
//   card: {
//     color: 'black',
//     bgcolor: 'white',
//     width: '325px',
//   },
//   h4: {
//     color: '#03415d',
//   },
// };

// const skin2 = { name: 'Skin1' };

// const skins = [skin1, skin2];

// const skinsSchema = [
//   {
//     name: 'name',
//     type: 'string',
//     hidden: true,
//   },
//   {
//     name: 'body',
//     type: 'string',
//   },
//   {
//     name: 'whole_page',
//     type: 'string',
//   },
//   {
//     name: 'page',
//     type: 'string',
//   },
//   {
//     name: 'panel',
//     type: 'string',
//   },
//   {
//     name: 'panel2',
//     type: 'string',
//   },
//   {
//     name: 'ot',
//     type: 'string',
//   },
//   {
//     name: 'dt',
//     type: 'string',
//   },
//   {
//     name: 'menu',
//     type: 'string',
//   },
//   {
//     name: 'card',
//     type: 'string',
//   },
//   {
//     name: 'h4',
//     type: 'string',
//   },
// ];

// const skinSchema = [
//   {
//     name: 'color',
//     type: 'color',
//   },
//   {
//     name: 'bgcolor',
//     type: 'color',
//   },
//   {
//     name: 'hover',
//     type: 'color',
//   },
//   {
//     name: 'bghover',
//     type: 'color',
//   },
//   {
//     name: 'padding',
//     type: 'string',
//   },
//   {
//     name: 'border',
//     type: 'string',
//   },
//   {
//     name: 'width',
//   },
// ];
