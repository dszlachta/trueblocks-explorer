import React, { useState } from 'react';

import { DataTable, ObjectTable } from 'components';
import { handleClick, stateFromStorage } from 'components/utils';

import { menuSchema } from 'pages/';
import { cachesSchema } from 'pages/Caches/Caches';
import { dashboardSchema } from 'pages/Dashboard/Dashboard';
import { digestsSchema } from 'pages/Digests/Digests';
import { groupsSchema, namesSchema } from 'pages/Names/Names';
import { otherSchema } from 'pages/Other/Other';
import { projectsSchema } from 'pages/Projects/Projects';
import { systemSchema } from 'pages/Settings/SettingsStatus';
import { signaturesSchema } from 'pages/Signatures/Signatures';

export const SettingsSchemas = () => {
  const [current, setCurrent] = useState(stateFromStorage('current-schema', 'systemSchema', true));

  const changeCurrent = (value) => {
    localStorage.setItem('current-schema', value);
    setCurrent(value);
  };

  const schemas = [
    { name: 'menuSchema', schema: menuSchema },
    { name: 'cachesSchema', schema: cachesSchema },
    { name: 'dashboardSchema', schema: dashboardSchema },
    { name: 'digestsSchema', schema: digestsSchema },
    { name: 'groupsSchema', schema: groupsSchema },
    { name: 'namesSchema', schema: namesSchema },
    { name: 'otherSchema', schema: otherSchema },
    { name: 'projectsSchema', schema: projectsSchema },
    { name: 'systemSchema', schema: systemSchema },
    { name: 'signaturesSchema', schema: signaturesSchema },
  ];

  const matched = schemas.filter((item) => item.name === current)[0];
  const mocks = mockData(matched.schema);
  return (
    <div>
      {schemas.map((schema) => {
        return (
          <button key={schema.name} onClick={(e) => handleClick(e, changeCurrent, schema.name)}>
            {schema.name}
          </button>
        );
      })}
      <div>
        <br />
        <DataTable
          key={matched.name + 'm'}
          title={'Schema for ' + matched.name.replace('Schema', '')}
          data={matched.schema}
          columns={schemaSchema}
          search={false}
          pagination={false}
          expandable={true}
        />
      </div>
      <h4
        style={{
          borderTop: '2px solid brown',
          paddingTop: '5px',
          marginTop: '5px',
        }}
      >
        Examples:{' '}
      </h4>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 15fr 1fr 15fr 1fr',
        }}
      >
        <div></div>
        <div>
          <DataTable
            key={matched.name + 'm'}
            title={''}
            data={mocks}
            columns={matched.schema}
            search={false}
            pagination={false}
            expandable={true}
            showHidden={true}
          />
          <pre>{JSON.stringify(mocks, null, 2)}</pre>
          {/*<pre>{JSON.stringify(matched.schema, null, 2)}</pre>*/}
        </div>
        <div></div>
        <div>
          <ObjectTable
            key={matched.name + 'm'}
            title={''}
            data={mocks[0]}
            columns={matched.schema}
            search={false}
            pagination={false}
            expandable={true}
            compact={true}
            showHidden={true}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export const schemaSchema = [
  {
    name: 'ID',
    selector: 'id',
    function: (record) => record.selector,
    type: 'string',
  },
  {
    name: 'Name',
    selector: 'name',
  },
  {
    name: 'Selector',
    selector: 'selector',
  },
  {
    name: 'Type',
    selector: 'type',
  },
  {
    name: 'Editable',
    selector: 'editable',
    type: 'bool',
    align: 'center',
    isPill: true,
  },
  {
    name: 'Hidden',
    selector: 'hidden',
    type: 'bool',
    align: 'center',
    isPill: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'number',
    align: 'center',
  },
  {
    name: 'isPill',
    selector: 'pill',
    type: 'bool',
    align: 'center',
  },
  {
    name: 'hideZero',
    selector: 'hideZero',
    type: 'bool',
    align: 'center',
  },
  {
    name: 'Width',
    selector: 'width',
    type: 'number',
    align: 'center',
  },
  {
    name: 'Alignment',
    selector: 'align',
    align: 'center',
  },
  {
    name: 'Class Name',
    selector: 'cn',
    align: 'center',
  },
  {
    name: 'Domain',
    selector: 'domain',
    type: 'bool',
    align: 'center',
  },
  {
    name: 'Range',
    selector: 'range',
    type: 'bool',
    align: 'center',
  },
  {
    name: 'isAccessor',
    selector: 'isAccessor',
    function: (record) => {
      return record.function ? true : false;
    },
    type: 'bool',
  },
  {
    name: 'Function',
    selector: 'function',
    hidden: true,
  },
  {
    name: 'onAccept',
    selector: 'onAccept',
  },
  {
    name: 'onValidate',
    selector: 'onValidate',
  },
];

function mock(columns, tag) {
  let record = {};
  columns.map((column) => {
    let value = column.name + '_' + tag;
    if (column.type === 'number') value = 12 + Number(tag);
    if (column.type === 'filesize') value = 1200100 + Number(tag);
    if (column.type === 'timestamp') value = 1438270144 + Number(tag);
    if (column.function) value = 'function: ' + column.function + '\nvalue: ' + value;
    return (record[column.selector] = value);
  });
  return record;
}

function mockData(columns) {
  return [mock(columns, '1'), mock(columns, '2')];
}
