import React, { Fragment, useState, useEffect, useRef } from 'react';

import { DataTable } from 'components';

import { menuSchema } from 'pages/';
import { cachesSchema } from 'pages/Caches/Caches';
import { dashboardSchema } from 'pages/Dashboard/Dashboard';
import { digestsSchema } from 'pages/Digests/Digests';
import { groupsSchema, namesSchema } from 'pages/Names/Names';
import { otherSchema } from 'pages/Other/Other';
import { projectsSchema } from 'pages/Projects/Projects';
import { systemSchema } from 'pages/Settings/SettingsStatus';
import { signaturesSchema } from 'pages/Signatures/Signatures';

const schemas = [
  // { name: 'menuSchema', schema: menuSchema },
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

export const SettingsSchemas = () => {
  const [current, setCurrent] = useState('digestsSchema');

  const matched = schemas.filter((item) => item.name === current)[0];
  const details = (
    <DataTable
      key={matched.name + 'm'}
      title={matched.name}
      data={matched.schema}
      columns={schemaSchema}
      search={false}
      pagination={false}
      expandable={true}
    />
  );

  return (
    <div>
      {schemas.map((schema) => {
        return (
          <Fragment key={schema.name + Math.random()}>
            <button onClick={(e) => setCurrent(schema.name)}>{schema.name}</button>{' '}
          </Fragment>
        );
      })}
      <div style={{ backgrounColor: 'red' }}>{details}</div>
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
    name: 'Function',
    selector: 'function',
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
