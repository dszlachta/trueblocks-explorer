import React, { useState } from 'react';

import { DataTable, ObjectTable, ButtonCaddie } from 'components';
import { stateFromStorage } from 'components/utils';

import { abisSchema } from 'pages/Explorer/ExplorerAbis';
import { appearancesSchema } from 'pages/Explorer/ExplorerAppearances';
import { blocksSchema } from 'pages/Explorer/ExplorerBlocks';
import { cachesSchema } from 'pages/Caches/Caches';
import { collectionsSchema } from 'pages/Collections/Collections';
import { dashboardSchema } from 'pages/Dashboard/Dashboard';
import { digestsSchema } from 'pages/Digests/Digests';
import { explorerSchema } from 'pages/Explorer/Explorer';
import { functionsSchema } from 'pages/Explorer/ExplorerFunctions';
import { logsSchema } from 'pages/Explorer/ExplorerLogs';
import { menuSchema } from 'pages/index';
import { monitorsSchema } from 'pages/Monitors/Monitors';
import { namesSchema } from 'pages/Names/Names';
import { otherSchema } from 'pages/Other/Other';
import { parametersSchema } from 'pages/Explorer/ExplorerParameters';
import { pricequotesSchema } from 'pages/Explorer/ExplorerPricequotes';
import { pricesourcesSchema } from 'pages/Explorer/ExplorerPricesources';
import { receiptsSchema } from 'pages/Explorer/ExplorerReceipts';
import { signaturesSchema } from 'pages/Signatures/Signatures';
import { systemsSchema } from 'pages/Settings/SettingsSystems';
import { tagsSchema } from 'pages/Tags/Tags';
import { traceActionsSchema } from 'pages/Explorer/ExplorerTraceActions';
import { traceResultsSchema } from 'pages/Explorer/ExplorerTraceResults';
import { tracesSchema } from 'pages/Explorer/ExplorerTraces';
import { transactionsSchema } from 'pages/Explorer/ExplorerTransactions';
import { viewSchema } from 'pages/Monitors/MonitorsView';

//------------------------------------------------------------------------------
export const SettingsSchemas = () => {
  const [current, setCurrent] = useState(stateFromStorage('current-schema', 'systemsSchema', true));

  const schemas = useSchemas();
  const matched = schemas.filter((item) => item.name === current)[0];
  const mocks = matched ? mockData(matched.schema) : [];
  let unknown = [];
  let known = [];
  let classes = [];
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
            classes.push(item.type);
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
            classes.push(item.type);
            return false;
          case 'CAddressArray':
          case 'CFunctionArray':
          case 'CParameterArray':
          case 'CStringArray':
          case 'CTopicArray':
          case 'CLogEntryArray':
          case 'CTraceArray':
          case 'CTransactionArray':
            classes.push(item.type);
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
      {/* prettier-ignore */}
      <ButtonCaddie
        name="system"
        buttons={systemList}
        current={current}
        action="change-schema"
        handler={changeSchema}
      />
      {/* prettier-ignore */}
      <ButtonCaddie
        name="pages_"
        buttons={pagesList}
        current={current}
        action="change-schema"
        handler={changeSchema}
      />
      <ButtonCaddie
        name="explore"
        buttons={exploreList}
        current={current}
        action="change-schema"
        handler={changeSchema}
      />
      <div className="okay">{known.join(', ')}</div>
      <div className="caution">{classes.join(', ')}</div>
      <div className="warning">{unknown.join(', ')}</div>
      {/* prettier-ignore */}
      <div>
        <br />
        <DataTable
          name={'schemaTable'}
          key={matched.name + 'm'}
          title={'Schema for ' + matched.name.replace('Schema', '')}
          data={matched.schema}
          columns={schemasSchema}
          search={false}
          pagination={false}
        />
      </div>
      <br />
      <table width="100%" style={{ border: '1px solid black' }}>
        <tr>
          <td valign="top" align="left" width="25%" style={{ border: '1px solid black' }}>
            <h4>JSON</h4>
            <pre>{JSON.stringify(mocks, null, 2)}</pre>
          </td>
          <td valign="top" align="left" width="75%" style={{ border: '1px solid black' }}>
            <h4>Example Tables</h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 30fr 1fr',
              }}
            >
              <div></div>
              <div>
                <DataTable
                  name={'mocksTable'}
                  key={matched.name + 'm'}
                  title={''}
                  data={mocks}
                  columns={matched.schema}
                  search={false}
                  pagination={false}
                  showHidden={true}
                />
                <br />
              </div>
              <div></div>
              <div></div>
              <div>
                <ObjectTable
                  key={matched.name + 'm'}
                  title={''}
                  data={mocks[0]}
                  columns={matched.schema}
                  search={false}
                  pagination={false}
                  showHidden={true}
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      {/*
       */}
    </div>
  );
};

const useSchemas = () => {
  return [
    { group: 'system', name: 'menuSchema', schema: menuSchema },
    { group: 'system', name: 'systemsSchema', schema: systemsSchema },
    { group: 'system', name: 'schemasSchema', schema: schemasSchema },
    { group: 'pages_', name: 'dashboardSchema', schema: dashboardSchema },
    { group: 'pages_', name: 'collectionsSchema', schema: collectionsSchema },
    { group: 'pages_', name: 'monitorsSchema', schema: monitorsSchema },
    { group: 'pages_', name: 'viewSchema', schema: viewSchema },
    { group: 'pages_', name: 'explorerSchema', schema: explorerSchema },
    { group: 'pages_', name: 'namesSchema', schema: namesSchema },
    { group: 'pages_', name: 'tagsSchema', schema: tagsSchema },
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
