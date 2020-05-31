/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import {
  ObjectTable,
  ChartTable,
  PageCaddie,
  ProgressBar
} from 'components';
import { getServerData, sortArray, handleClick } from 'components/utils';
import { navigate, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';

import { useStatus } from 'store/status_store';
import { NameDialog } from 'dialogs/NameDialog/NameDialog';

import './Appearances.css';

// EXISTING_CODE
import { currentPage } from 'components/utils';
import { SidebarTable } from 'components';
import { useNames } from 'pages/Names/Names';
import { getIcon } from 'pages/utils';
let g_focusValue = '';
var g_Handler = null;
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Appearances = (props) => {
  const { appearances, dispatch } = useAppearances();
  const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(appearancesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('appearancesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');
  const [debug, setDebug] = useState(false);

  // EXISTING_CODE
  const { params } = currentPage();
  const addresses = params[0];
  const name = params.length > 1 ? params[1].value : '';
  g_focusValue = addresses.value.toLowerCase();
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/export';

  const dataQuery = 'accounting&ether&addrs=' + addresses.value;
  function addendum(record, record_id) {
    let ret = '';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const appearancesHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      setCurRecordId(record_id);
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          let tag = action.payload;
          if (action.payload === 'Debug') {
            setDebug(!debug);
            tag = 'All';
          } else if (action.payload === 'MockData') {
            statusDispatch({ type: 'mocked', payload: !mocked });
            tag = 'All';
          }
          setTag(tag);
          localStorage.setItem('appearancesTag', tag);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Appearance', record: record });
          break;
        case 'close':
        case 'cancel':
          setEditDialog({ showing: false, record: {} });
          break;
        case 'okay':
          // let query = 'editCmd=edit';
          // query += record ? 'edit' : 'add';
          // query += '&term=';
          // query += "!" + (record ? record.)
          // query += '&terms=A!0xaaaaeeeeddddccccbbbbaaaa0e92113ea9d19ca3!C!D!E!F!false!false';
          // query += '&verbose=10';
          // query += '&expand';
          // query += record ? (record.is_custom ? '&to_custom' : '') : '';
          // query += '&to_custom=false';
          // statusDispatch(LOADING);
          // dispatch(action);
          // sendServerCommand(url, query).then(() => {
          //  // we assume the delete worked, so we don't reload the data
          //  statusDispatch(NOT_LOADING);
          // });
          setEditDialog({ showing: false, record: {} });
          break;

        // EXISTING_CODE
        case 'addmonitor':
          // {
          //   const cmdQuery = 'addrs=' + action.record_id + '&verbose=10&dollars';
          //   statusDispatch(LOADING);
          //   sendServerCommand('http://localhost:8080/export/', cmdQuery).then((theData) => {
          //     // the command worked, but now we need to reload the data
          //     statusDispatch(NOT_LOADING);
          //     if (editDialog) {
          //       // only navigate if the user hasn't shut the dialog
          //       navigate('/monitors/explore?addrs=' + action.record_id, false);
          //     }
          //   });
          // }
          // setEditDialog({ showing: true, name: 'Reload', record: record });
          navigate('/monitors/explore?addrs=' + action.record_id + (record ? '&name=' + record.name : ''), false);
          break;
        case 'view':
          navigate('/monitors/explore?addrs=' + action.record_id + (record ? '&name=' + record.name : ''), false);
          break;
        case 'row-changed':
          break;
        case 'externallink':
          navigate('https://etherscan.io/tx/' + action.record_id, true);
          break;
        case 'enter':
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered, statusDispatch]
  );

  useEffect(() => {
    const qqq = 'count&addrs=' + addresses.value + '' + (mocked ? '&mockData' : '');
    getServerData(dataUrl, qqq).then((theData) => {
      let nRecords = mocked ? 100 : theData && theData.data && theData.data.length > 0 ? theData.data[0].nRecords : 0;
      const stepSize = stateFromStorage('perPage', 10) * 1; // start with five pages, double each time
      refreshAppearancesData(dataUrl, dataQuery, dispatch, mocked, nRecords, stepSize);
      // statusDispatch(NOT_LOADING);
    });
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind('plus', (e) => handleClick(e, appearancesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind('plus');
    };
  }, [appearancesHandler]);

  useMemo(() => {
    // prettier-ignore
    if (appearances && appearances.data) {
      setTagList(getTagList(appearances));
      const result = appearances.data.filter((item) => {
        // EXISTING_CODE
        switch (curTag) {
          case 'Airdrops':
            return item['toName'] && item['toName'].name.includes('Airdrop');
          case 'Grants':
            return (
              (item['toName'] && item['toName'].name.includes('Gitcoin')) ||
              (item['fromName'] && item['fromName'].name.includes('Gitcoin'))
            );
          case 'Eth':
            if (!item['statements']) return false;
            const statements = item['statements'][0];
            if (statements.inflow !== '') return true;
            if (statements.intInflow !== '') return true;
            if (statements.suicideInflow !== '') return true;
            if (statements.outflow !== '') return true;
            if (statements.intOutflow !== '') return true;
            if (statements.suicideOutflow !== '') return true;
            if (statements.weiGasCost !== '') return true;
            return false
          case 'Not Eth':
            if (!item['statements']) return false;
            const statements1 = item['statements'][0];
            if (statements1.inflow !== '') return false;
            if (statements1.intInflow !== '') return false;
            if (statements1.suicideInflow !== '') return false;
            if (statements1.outflow !== '') return false;
            if (statements1.intOutflow !== '') return false;
            if (statements1.suicideOutflow !== '') return false;
            if (statements1.weiGasCost !== '') return false;
            return true;
          case 'Tokens':
            if (!item['articulatedTx']) return false;
            const art = item['articulatedTx'];
            return art.name === 'transfer' || art.name === 'approve' || art.name === 'transferFrom';
          case 'Reconciled':
            if (!item['statements'] || !item.statements[0]['reconciled']) return false;
            return item.statements[0]['reconciliationType'] === '';
          case 'Partial':
            if (!item['statements'] || !item.statements[0]['reconciled']) return false;
            return item.statements[0]['reconciliationType'].includes('partial');
          case 'Unreconciled':
            if (!item['statements'] || !item.statements[0]['reconciled']) return false;
            return !item.statements[0]['reconciled'];
          case 'Neighbors':
          case 'Functions':
          case 'Events':
            return false;
          case 'Balances':
          case 'All':
          default:
            return true;
        }
        // EXISTING_CODE
        return curTag === 'All' || (item.tags && item.tags.includes(curTag));
      });
      setFiltered(result);
    }
  }, [appearances, curTag, debug, mocked]);

  let custom = null;
  let title = 'Appearances';
  // EXISTING_CODE
  title = name
    ? decodeURIComponent(name.replace(/\+/g, '%20'))
    : addresses.value
    ? addresses.value.substr(0, 10) +
      '...' +
      addresses.value.substr(addresses.value.length - 6, addresses.value.length - 1)
    : 'No Name';
  g_Handler = appearancesHandler;
  // EXISTING_CODE

  const table = getInnerTable(appearances, curTag, filtered, title, searchFields, recordIconList, appearancesHandler);
  return (
    <div>
      <ProgressBar id="export" />
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={appearancesHandler}
      />
      {mocked && (
        <span className="warning">
          <b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b>
        </span>
      )}
      {debug && <pre>{JSON.stringify(appearances, null, 2)}</pre>}
      {table}
      {/* prettier-ignore */}
      <NameDialog showing={editDialog.showing} handler={appearancesHandler} object={{ address: curRecordId }} />
      {custom}
    </div>
  );
};

//----------------------------------------------------------------------
const getTagList = (appearances) => {
  // prettier-ignore
  let tagList = ['Eth', 'Not Eth', '|', 'Tokens', 'Grants', 'Airdrops', '|', 'Reconciled', 'Partial', 'Unreconciled', '|', 'Neighbors', 'Balances', 'Functions', 'Events', 'Creations', 'SelfDestructs'];
  tagList.unshift('|');
  tagList.unshift('All');
  tagList.push('|');
  tagList.push('Debug');
  tagList.push('MockData');
  return tagList;
};

//----------------------------------------------------------------------
const getInnerTable = (appearances, curTag, filtered, title, searchFields, recordIconList, appearancesHandler) => {
  // EXISTING_CODE
  if (curTag === 'Neighbors') {
    return (
      <Fragment>
        <ObjectTable data={appearances.meta} columns={metaSchema} />
      </Fragment>
    );
  } else if (curTag === 'Balances') {
    return (
      <ChartTable
        columns={appearancesSchema}
        data={filtered}
        title=""
        search={false}
        chartName="appearances"
        chartCtx={{ type: 'line', defPair: ['blockNumber', 'statements.endBal'] }}
        pagination={true}
      />
    );
  }
  // EXISTING_CODE
  return (
    <SidebarTable
      tableName={'appearancesTable'}
      data={filtered}
      columns={appearancesSchema}
      title={title}
      search={true}
      searchFields={searchFields}
      pagination={true}
      recordIcons={recordIconList}
      parentHandler={appearancesHandler}
    />
  );
};

// auto-generate: page-settings
const recordIconList = [
  'ExternalLink',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['blockNumber', 'transactionIndex'];
const defaultSearch = ['blockNumber', 'transactionIndex', 'fromName', 'toName'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshAppearancesData(url, query, dispatch, mocked, nRecords, stepSize) {
  getServerData(
    url,
    query + (mocked ? '&mockData' : '') + (stepSize !== -1 ? '&first_record=0&max_records=' + stepSize : '')
  ).then((theData) => {
    let appearances = theData.data;
    // EXISTING_CODE
    if (!mocked) appearances = appearances && appearances.length > 0 ? appearances[0] : appearances;
    let named = appearances;
    if (!mocked && appearances && theData.meta) {
      named = appearances.map((item) => {
        if (theData.meta.namedFromAndTo && theData.meta.namedFromAndTo[item.from])
          item.fromName = theData.meta.namedFromAndTo[item.from];
        else item.fromName = theData.meta.namedFrom && theData.meta.namedFrom[item.from];
        if (theData.meta.namedFromAndTo && theData.meta.namedFromAndTo[item.to])
          item.toName = theData.meta.namedFromAndTo[item.to];
        else item.toName = theData.meta.namedTo && theData.meta.namedTo[item.to];
        return item;
      });
    }
    appearances = named;
    // EXISTING_CODE
    if (appearances) theData.data = sortArray(appearances, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
    if (stepSize < nRecords) refreshAppearancesData(url, query, dispatch, mocked, nRecords, stepSize * 2);
  });
}

//----------------------------------------------------------------------
export const appearancesDefault = [];

//----------------------------------------------------------------------
export const appearancesReducer = (state, action) => {
  let appearances = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = appearances.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          appearances.data = replaceRecord(appearances.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      appearances = action.payload;
      break;
    default:
    // do nothing
  }
  return appearances;
};

//----------------------------------------------------------------------
export const useAppearances = () => {
  return useContext(GlobalContext).appearances;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  if (!record) return '';
  // EXISTING_CODE
  switch (fieldName) {
    case 'namedFromAndTo':
    case 'unNamedFromAndTo':
    case 'namedFrom':
    case 'unNamedFrom':
    case 'namedTo':
    case 'unNamedTo':
      return <pre>{JSON.stringify(record[fieldName], null, 2)}</pre>;
    default:
      break;
  }

  if (fieldName && fieldName.includes('statements.')) {
    let fn = fieldName.replace('statements.', '');
    if (fn === 'begBalDiff' && record && record.statements && record.statements[0] && record.statements[0][fn] === 0)
      return '';
    if (fn === 'endBalDiff' && record && record.statements && record.statements[0] && record.statements[0][fn] === 0)
      return '';
    if (record && record.statements && record.statements[0] && fn === 'reconciled')
      return getIcon(
        'reconciled',
        record.statements[0][fn]
          ? record.statements[0]['reconciliationType'] === ''
            ? 'CheckCircle'
            : 'CheckCircleYellow'
          : 'XCircle'
      );
    if (record && record.statements && record.statements[0]) return record.statements[0][fn];
  }

  const internal = record.from !== g_focusValue && record.to !== g_focusValue;
  switch (fieldName) {
    case 'id':
      return record.hash;
    case 'marker':
      return (
        <Fragment>
          {record.blockNumber + '.' + record.transactionIndex}
          {internal ? <div className="internal">{'int'}</div> : ''}
          {record.isError ? <div className="isError">{'error'}</div> : ''}
        </Fragment>
      );
    case 'isError':
      return record.isError ? 'error' : '';
    case 'internal':
      return internal ? 'int' : '';
    case 'from': {
      const val = record.fromName ? record.fromName.name : record.from;
      if (record.from === g_focusValue.toLowerCase()) return <div className="focusValue">{val}</div>;
      return <div className="nonFocusValue">{val}</div>;
    }
    case 'to': {
      const val = record.toName ? record.toName.name : record.to;
      if (record.to === g_focusValue.toLowerCase()) return <div className="focusValue">{val}</div>;
      return <div className="nonFocusValue">{val}</div>;
    }
    case 'fromName':
      return record.fromName ? (
        record.from
      ) : (
        <div
          onClick={(e) => handleClick(e, g_Handler, { type: 'Add', record_id: record.from })}
          style={{ color: 'green' }}
        >
          {getIcon(record.from, 'AddName', false, false, 12)}
        </div>
      );
    case 'toName':
      return record.toName ? (
        record.to
      ) : (
        <div
          onClick={(e) => handleClick(e, g_Handler, { type: 'Add', record_id: record.to })}
          style={{ color: 'green' }}
        >
          {getIcon(record.to, 'AddName', false, false, 12)}
        </div>
      );
    case 'creations':
      if (!record['receipt']) return null;
      if (!record.receipt['contractAddress']) return null;
      return record.receipt.contractAddress;
    case 'compressedTx':
      if (!record['compressedTx']) return null;
      if (record['compressedTx'] === '0x ( )') return <div key={'xxx'}>{<b>{'0x'}</b>}</div>;
      if (record['compressedTx'].substr(0, 8) === 'message:')
        return (
          <div key={'xxx'}>
            <b>{record['compressedTx'].replace('message:', '')}</b>
          </div>
        );
      let arr = record.compressedTx.replace(')', '').replace('(', ',').split(',');
      return (
        <div>
          {arr.map((item, index) => {
            if (index === 0) {
              return <div key={item}>{<b>{item}</b>}</div>;
            } else {
              let s = item.split(':');
              if (!s) {
                s[0] = s[1] = '';
              } else if (!s[1]) {
                s[1] = '';
              }
              s[1] = s[1].trim();
              const ofInterest = s[1].includes(g_focusValue);
              return (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                    <div key={item + '_a'}>{index + ' ' + (s[0] === ' stub' ? '0x' : s[0] + ':')}</div>
                    <div className={ofInterest ? 'focusValue' : ''} key={item + '_b'}>
                      {s[1] + '-' + JSON.stringify(s[1].length)}
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      );
    default:
      break;
  }
  // EXISTING_CODE
  return record[fieldName];
}

// EXISTING_CODE
const metaSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
  },
  {
    selector: 'unNamedTo',
    onDisplay: getFieldValue,
  },
  {
    selector: 'namedTo',
    onDisplay: getFieldValue,
  },
  {
    selector: 'unNamedFrom',
    onDisplay: getFieldValue,
  },
  {
    selector: 'namedFrom',
    onDisplay: getFieldValue,
  },
  {
    selector: 'unNamedFromAndTo',
    onDisplay: getFieldValue,
  },
  {
    selector: 'namedFromAndTo',
    onDisplay: getFieldValue,
  },
];
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const appearancesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Date/Block',
    selector: 'date',
    type: 'string',
    width: 3,
    underField: 'marker',
    onDisplay: getFieldValue,
    range: true,
  },
  {
    name: 'Marker',
    selector: 'marker',
    type: 'string',
    hidden: true,
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    width: 5,
    searchable: true,
    underField: 'fromName',
    onDisplay: getFieldValue,
    range: true,
  },
  {
    name: 'fromName',
    selector: 'fromName',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    width: 5,
    searchable: true,
    underField: 'toName',
    onDisplay: getFieldValue,
    range: true,
  },
  {
    name: 'toName',
    selector: 'toName',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'toSymbol',
    selector: 'toSymbol',
    type: 'string',
    searchable: true,
    hide_empty: true,
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'wei',
    hidden: true,
    domain: true,
  },
  {
    name: 'Ether',
    selector: 'ether',
    type: 'blknum',
    hidden: true,
    width: 2,
    domain: true,
  },
  {
    name: 'Sep1',
    selector: 'separator1',
    type: 'separator',
    hidden: true,
    detail: true,
  },
  {
    name: 'Asset',
    selector: 'statements.asset',
    type: 'string',
    width: 2,
    align: 'center',
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Beg',
    selector: 'statements.begBal',
    type: 'value',
    width: 2,
    detail: true,
    underField: 'statements.begBalDiff',
    onDisplay: getFieldValue,
  },
  {
    name: 'Beg Diff',
    selector: 'statements.begBalDiff',
    type: 'value',
    hidden: true,
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Income',
    selector: 'statements.inflow',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'I-Income',
    selector: 'statements.intInflow',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'S-Income',
    selector: 'statements.suicideInflow',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Spending',
    selector: 'statements.outflow',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'I-Spending',
    selector: 'statements.intOutflow',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'S-Spending',
    selector: 'statements.suicideOutflow',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Gas Cost',
    selector: 'statements.weiGasCost',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
    domain: true,
  },
  {
    name: 'Ending',
    selector: 'statements.endBal',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
    domain: true,
  },
  {
    name: 'Calc',
    selector: 'statements.endBalCalc',
    type: 'value',
    hidden: true,
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'End Diff',
    selector: 'statements.endBalDiff',
    type: 'value',
    hidden: true,
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Type',
    selector: 'statements.reconciliationType',
    type: 'string',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Okay',
    selector: 'statements.reconciled',
    type: 'string',
    align: 'center',
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Gas',
    selector: 'gas',
    type: 'gas',
    hidden: true,
    width: 2,
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
    hidden: true,
    width: 2,
    domain: true,
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'wei',
    hidden: true,
    width: 2,
  },
  {
    name: 'Gas Cost (Eth)',
    selector: 'etherGasCost',
    type: 'ether',
    hidden: true,
    width: 2,
  },
  {
    name: 'Sep2',
    selector: 'separator2',
    type: 'separator',
    hidden: true,
    detail: true,
  },
  {
    name: 'Compressed',
    selector: 'compressedTx',
    type: 'string',
    hidden: true,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Creations',
    selector: 'creations',
    type: 'string',
    hidden: true,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Sep3',
    selector: 'separator3',
    type: 'separator',
    hidden: true,
  },
  {
    name: 'Age',
    selector: 'age',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
    hidden: true,
  },
  {
    name: 'Receipt',
    selector: 'receipt',
    type: 'CReceipt',
    hidden: true,
  },
  {
    name: 'Articulated Tx',
    selector: 'articulatedTx',
    type: 'CFunction',
    hidden: true,
    searchable: true,
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
    hidden: true,
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
    hidden: true,
  },
  {
    name: 'Blk',
    selector: 'blockNumber',
    type: 'blknum',
    hidden: true,
    width: 1,
  },
  {
    name: 'Tx',
    selector: 'transactionIndex',
    type: 'string',
    hidden: true,
    width: 1,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    hidden: true,
    range: true,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    hidden: true,
    width: 5,
    searchable: true,
  },
  {
    name: 'Nonce',
    selector: 'nonce',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Input',
    selector: 'input',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'Function',
    selector: 'function',
    type: 'string',
    hidden: true,
    width: 5,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Events',
    selector: 'events',
    type: 'string',
    hidden: true,
    width: 3,
  },
  {
    name: 'Price',
    selector: 'price',
    type: 'double',
    hidden: true,
    width: 3,
  },
  {
    name: 'Date Short',
    selector: 'datesh',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Time',
    selector: 'time',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Error',
    selector: 'isError',
    type: 'string',
    hidden: true,
    width: 1,
    isPill: true,
  },
  {
    name: 'Internal',
    selector: 'internal',
    type: 'string',
    hidden: true,
    width: 2,
    align: 'center',
    onDisplay: getFieldValue,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
    hidden: true,
  },
];
// auto-generate: schema