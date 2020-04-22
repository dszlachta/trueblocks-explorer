import React, { useState } from 'react';

import { DataTable, ObjectTable, ButtonCaddie } from 'components';
import { stateFromStorage } from 'components/utils';

import { menuSchema } from 'pages/';

import { dashboardSchema } from 'pages/Dashboard/Dashboard';
import { projectsSchema } from 'pages/Projects/Projects';
import { monitorsSchema } from 'pages/Monitors/Monitors';
import { explorerSchema } from 'pages/Explorer/Explorer';
import { blocksSchema } from 'pages/Explorer/ExplorerBlocks';
import { transactionsSchema } from 'pages/Explorer/ExplorerTransactions';
import { receiptsSchema } from 'pages/Explorer/ExplorerReceipts';
import { logsSchema } from 'pages/Explorer/ExplorerLogs';
import { tracesSchema } from 'pages/Explorer/ExplorerTraces';
import { traceActionsSchema } from 'pages/Explorer/ExplorerTraceActions';
import { traceResultsSchema } from 'pages/Explorer/ExplorerTraceResults';
import { appearancesSchema } from 'pages/Explorer/ExplorerAppearances';
import { abisSchema } from 'pages/Explorer/ExplorerAbis';
import { functionsSchema } from 'pages/Explorer/ExplorerFunctions';
import { parametersSchema } from 'pages/Explorer/ExplorerParameters';
import { pricequotesSchema } from 'pages/Explorer/ExplorerPricequotes';
import { pricesourcesSchema } from 'pages/Explorer/ExplorerPricesources';
import { namesSchema, groupsSchema } from 'pages/Names/Names';
import { signaturesSchema } from 'pages/Signatures/Signatures';
import { digestsSchema } from 'pages/Digests/Digests';
import { cachesSchema } from 'pages/Caches/Caches';
import { otherSchema } from 'pages/Other/Other';
import { systemsSchema } from 'pages/Settings/SettingsSystems';

//------------------------------------------------------------------------------
export const SettingsSchemas = () => {
  const [current, setCurrent] = useState(stateFromStorage('current-schema', 'systemsSchema', true));

  //------------------------------------------------------------------------------
  const schemas = [
    { group: 'system', name: 'menuSchema', schema: menuSchema },
    { group: 'system', name: 'systemsSchema', schema: systemsSchema },
    { group: 'system', name: 'schemasSchema', schema: schemasSchema },
    { group: 'pages_', name: 'dashboardSchema', schema: dashboardSchema },
    { group: 'pages_', name: 'projectsSchema', schema: projectsSchema },
    { group: 'pages_', name: 'monitorsSchema', schema: monitorsSchema },
    { group: 'pages_', name: 'explorerSchema', schema: explorerSchema },
    { group: 'pages_', name: 'namesSchema', schema: namesSchema },
    { group: 'pages_', name: 'groupsSchema', schema: groupsSchema },
    { group: 'pages_', name: 'signaturesSchema', schema: signaturesSchema },
    { group: 'pages_', name: 'digestsSchema', schema: digestsSchema },
    { group: 'pages_', name: 'cachesSchema', schema: cachesSchema },
    { group: 'pages_', name: 'otherSchema', schema: otherSchema },
    { group: 'explore', name: 'abisSchema', schema: abisSchema },
    { group: 'explore', name: 'functionsSchema', schema: functionsSchema },
    { group: 'explore', name: 'parametersSchema', schema: parametersSchema },
    { group: 'explore', name: 'blocksSchema', schema: blocksSchema },
    { group: 'explore', name: 'transactionsSchema', schema: transactionsSchema },
    { group: 'explore', name: 'receiptsSchema', schema: receiptsSchema },
    { group: 'explore', name: 'logsSchema', schema: logsSchema },
    { group: 'explore', name: 'tracesSchema', schema: tracesSchema },
    { group: 'explore', name: 'traceActionsSchema', schema: traceActionsSchema },
    { group: 'explore', name: 'traceResultsSchema', schema: traceResultsSchema },
    { group: 'explore', name: 'appearancesSchema', schema: appearancesSchema },
    { group: 'explore', name: 'pricequotesSchema', schema: pricequotesSchema },
    { group: 'explore', name: 'pricesourcesSchema', schema: pricesourcesSchema },
  ];

  const matched = schemas.filter((item) => item.name === current)[0];
  const mocks = matched ? mockData(matched.schema) : [];
  let unknown = [];
  let known = [];
  let x = [];
  if (matched) {
    matched.schema
      .filter((item) => {
        switch (item.type) {
          case 'string':
          case 'function':
          case 'hash':
          case 'bool':
          case 'object':
          case 'timestamp':
          case 'array':
          case 'filesize':
            known.push(item.type);
            return false;
          case 'blknum':
          case 'address':
          case 'uint32':
          case 'uint64':
          case 'wei':
          case 'gas':
          case 'bytes32':
          case 'double':
            x.push(item.type);
            return false;
          case 'CAbi':
          case 'CBlock':
          case 'CLogEntry':
          case 'CParameter':
          case 'CTrace':
          case 'CTransaction':
          case 'CClient':
          case 'CFunction':
          case 'CTraceAction':
          case 'CTraceResult':
          case 'CReceipt':
            x.push(item.type);
            return false;
          case 'CAddressArray':
          case 'CFunctionArray':
          case 'CParameterArray':
          case 'CStringArray':
          case 'CTopicArray':
          case 'CLogEntryArray':
          case 'CTraceArray':
          case 'CTransactionArray':
            x.push(item.type);
            return false;
          default:
            unknown.push('unhandled: ' + item.type);
            return true;
        }
      })
      .join(', ');
  }

  const changeSchema = (action) => {
    switch (action.type) {
      case 'change-schema':
        localStorage.setItem('current-schema', action.payload);
        setCurrent(action.payload);
        break;
      default:
        break;
    }
  };

  const systemList = schemas.filter((s) => s.group === 'system').map((schema) => schema.name);
  const pagesList = schemas.filter((s) => s.group === 'pages_').map((schema) => schema.name);
  const exploreList = schemas.filter((s) => s.group === 'explore').map((schema) => schema.name);

  return (
    <div>
      <ButtonCaddie
        name="system"
        buttons={systemList}
        current={current}
        action="change-schema"
        handler={changeSchema}
      />
      <ButtonCaddie name="pages_" buttons={pagesList} current={current} action="change-schema" handler={changeSchema} />
      <ButtonCaddie
        name="explore"
        buttons={exploreList}
        current={current}
        action="change-schema"
        handler={changeSchema}
      />
      <div className="okay">{known.join(', ')}</div>
      <div className="caution">{x.join(', ')}</div>
      <div className="warning">{unknown.join(', ')}</div>
      <div>
        <br />
        <DataTable
          key={matched.name + 'm'}
          title={'Schema for ' + matched.name.replace('Schema', '')}
          data={matched.schema}
          columns={schemasSchema}
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

//------------------------------------------------------------------------------
function mock(columns, tag) {
  let record = {};
  columns.map((column) => {
    let value = column.name + '_' + tag;
    if (column.type === 'uint64') value = 12 + Number(tag);
    if (column.type === 'filesize') value = 1200100 + Number(tag);
    if (column.type === 'timestamp') value = 1438270144 + Number(tag);
    if (column.type === 'function') value = 'function' + Number(tag);
    return (record[column.selector] = value);
  });
  return record;
}

//------------------------------------------------------------------------------
function mockData(columns) {
  return [mock(columns, '1'), mock(columns, '2')];
}

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.selector; // this is right - it's a confusing name
    default:
      return record[fieldName];
  }
}
//------------------------------------------------------------------------------
// auto-generate: schema
export const schemasSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    name: 'Selector',
    selector: 'selector',
    type: 'string',
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
  },
  {
    name: 'Width',
    selector: 'width',
    type: 'uint64',
    align: 'center',
  },
  {
    name: 'Class Name',
    selector: 'cn',
    type: 'string',
    align: 'center',
  },
  {
    name: 'Alignment',
    selector: 'align',
    type: 'string',
    align: 'center',
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    align: 'center',
  },
  {
    name: 'Editable',
    selector: 'editable',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Hidden',
    selector: 'hidden',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'isPill',
    selector: 'isPill',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Domain',
    selector: 'domain',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Range',
    selector: 'range',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'Sortable',
    selector: 'sortable',
    type: 'bool',
    isPill: true,
    align: 'center',
  },
  {
    name: 'onDisplay',
    selector: 'onDisplay',
    type: 'function',
  },
  {
    name: 'onAccept',
    selector: 'onAccept',
    type: 'function',
  },
  {
    name: 'onValidate',
    selector: 'onValidate',
    type: 'function',
  },
];
// auto-generate: schema
