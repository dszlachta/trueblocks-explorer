/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { ObjectTable, SidebarTable, PageCaddie } from 'components';
import { getServerData, sortArray, handleClick } from 'components/utils';
import { navigate, replaceRecord, fmtNum } from 'components/utils';
import { calcValue } from 'store';
import { getIcon } from 'pages/utils';
import { useStatus, LOADING, NOT_LOADING } from 'store/status_store';

import './Appearances.css';

// EXISTING_CODE
import { useNames } from 'pages/Names/Names';
import { NameDialog } from 'dialogs/NameDialog/NameDialog';
import { axisRight } from 'd3';
let g_focusValue = '';
var g_Handler = null;
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Appearances = ({ addresses = [], name }) => {
  const { appearances, dispatch } = useAppearances();
  const appearancesDispatch = dispatch;
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(appearancesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('appearancesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curAdd, setCurAddr] = useState('');

  // EXISTING_CODE
  const { names } = useNames().names;
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/export';
  const dataQuery = 'addrs=' + addresses.value + '&verbose=7&dollars&articulate&write_txs&write_traces';
  g_focusValue = addresses.value;
  function addendum(record, record_id) {
    let ret = '&verbose=7';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const appearancesHandler = useCallback(
    (action) => {
      //console.log(action);
      const record_id = action.record_id;
      setCurAddr(record_id);
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('appearancesTag', action.payload);
          break;
        case 'add':
          setEditDialog({ showing: true, record: { tags: 'MyTags' } });
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
          // query += '&verbose=7';
          // query += '&expand';
          // query += record ? (record.is_custom ? '&to_custom' : '') : '';
          // query += '&to_custom=false';
          // statusDispatch(LOADING);
          // appearancesDispatch(action);
          // sendServerCommand(url, query).then(() => {
          //  // we assume the delete worked, so we don't reload the data
          //  statusDispatch(NOT_LOADING);
          // });
          setEditDialog({ showing: false, record: {} });
          break;
        // EXISTING_CODE
        case 'row-changed':
          console.log('row-changed: ', action);
          break;
        case 'externallink':
          navigate('https://etherscan.io/tx/' + action.record_id, true);
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [filtered]
  );

  useEffect(() => {
    statusDispatch(LOADING);
    refreshAppearancesData(dataUrl, dataQuery, appearancesDispatch);
    statusDispatch(NOT_LOADING);
  }, [dataQuery, appearancesDispatch, statusDispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, appearancesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [appearancesHandler]);

  useMemo(() => {
    // prettier-ignore
    if (appearances.data) {
      // let tagList = [...new Set(appearances.data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
      // tagList = sortStrings(tagList, true);
      // tagList.unshift('All');
      let tagList = ['All', '|', 'Tokens', 'Grants', 'Airdrops', '|', 'Neighbors', 'Balances', 'Functions', 'Events', 'Creations', "SelfDestructs"]
      setTagList(tagList);
    }
  }, [appearances.data]);

  useMemo(() => {
    if (appearances.data) {
      const result = appearances.data.filter((item) => {
        switch (curTag) {
          case 'Airdrops':
            return item['toName'] && item['toName'].name.includes('Airdrop');
          case 'Grants':
            return (
              (item['toName'] && item['toName'].name.includes('Gitcoin')) ||
              (item['fromName'] && item['fromName'].name.includes('Gitcoin'))
            );
          case 'Tokens':
            if (!item['articulatedTx']) return false;
            const art = item['articulatedTx'];
            return art.name === 'transfer' || art.name === 'approve' || art.name === 'transferFrom';
          case 'Balances':
          case 'Neighbors':
          case 'Functions':
          case 'Events':
            return false;
          case 'All':
          default:
            return true;
        }
        //        return curTag === 'All' || (item.tags && item.tags.includes(curTag));
      });
      setFiltered(result);
    }
  }, [appearances.data, curTag]);

  let custom = null;
  let title = 'Appearances';
  // EXISTING_CODE
  title =
    addresses.value &&
    addresses.value.substr(0, 10) +
      '...' +
      addresses.value.substr(addresses.value.length - 6, addresses.value.length - 1) +
      (name ? ' (' + name.replace('%20', ' ') + ')' : '');
  // const name =
  //   names &&
  //   names.filter((rec) => {
  //     return rec.address === addresses.value;
  //   });
  // title += name ? ' (' + name[0] + ')' : '';
  g_Handler = appearancesHandler;
  // EXISTING_CODE

  let table = <div>The Table</div>;
  if (curTag !== 'Neighbors') {
    table = (
      <SidebarTable
        name={'appearancesTable'}
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
  } else {
    const metaSchema = [
      {
        name: 'ID',
        selector: 'id',
        type: 'string',
        hidden: true,
      },
      {
        selector: 'namedFromAndTo',
        onDisplay: getFieldValue,
      },
      {
        selector: 'unNamedFromAndTo',
        onDisplay: getFieldValue,
      },
      {
        selector: 'namedFrom',
        onDisplay: getFieldValue,
      },
      {
        selector: 'unNamedFrom',
        onDisplay: getFieldValue,
      },
      {
        selector: 'namedTo',
        onDisplay: getFieldValue,
      },
      {
        selector: 'unNamedTo',
        onDisplay: getFieldValue,
      },
    ];

    table = (
      <Fragment>
        {/*<pre>{JSON.stringify(appearances.meta, null, 2)}</pre>*/}
        <ObjectTable data={appearances.meta} columns={metaSchema} />
      </Fragment>
    );
  }

  const debug = false;
  return (
    <div>
      {debug && (
        <a target="_blank" rel="noopener noreferrer" href={dataUrl + '?' + dataQuery}>
          {dataUrl + '?' + dataQuery}
        </a>
      )}
      {debug && <pre>{JSON.stringify(appearances, null, 2)}</pre>}
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={appearancesHandler}
        loading={loading}
      />
      {table}
      <NameDialog showing={editDialog.showing} handler={appearancesHandler} object={{ address: curAdd }} />
      {custom}
    </div>
  );
};

// auto-generate: page-settings
const recordIconList = [
  'ExternalLink/None',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['blockNumber', 'transactionIndex'];
const defaultSearch = ['tags', 'address'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshAppearancesData(url, query, appearancesDispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    result = result && result.length > 0 ? result[0] : result;
    let named = result;
    if (result && theData.meta) {
      named = result.map((item) => {
        if (theData.meta.namedFromAndTo && theData.meta.namedFromAndTo[item.from])
          item.fromName = theData.meta.namedFromAndTo[item.from];
        else item.fromName = theData.meta.namedFrom && theData.meta.namedFrom[item.from];
        if (theData.meta.namedFromAndTo && theData.meta.namedFromAndTo[item.to])
          item.toName = theData.meta.namedFromAndTo[item.to];
        else item.toName = theData.meta.namedTo && theData.meta.namedTo[item.to];
        return item;
      });
    }
    result = named;
    // EXISTING_CODE
    theData.data = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    appearancesDispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const appearancesDefault = [];

//----------------------------------------------------------------------
export const appearancesReducer = (state, action) => {
  let ret = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = ret.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          ret = replaceRecord(ret, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  return ret;
};

//----------------------------------------------------------------------
export const useAppearances = () => {
  return useContext(GlobalContext).appearances;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  if (!record) return '';
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
  const internal = record.from !== g_focusValue && record.to !== g_focusValue;
  switch (fieldName) {
    case 'inflow':
      if (record.ether === 0) return '';
      if (record.to !== g_focusValue) return '';
      return <div className="inflow">{record.ether}</div>;
    case 'outflow':
      if (record.ether === 0) return '';
      if (record.from !== g_focusValue) return '';
      return <div className="outflow">({record.ether})</div>;
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
    case 'gasCost':
      if (record.from !== g_focusValue) return '';
      return record.gasCost;
    case 'internal':
      return internal ? 'int' : '';
    case 'from': {
      const val = record.fromName ? record.fromName.name : record.from;
      if (record.from === g_focusValue) return <div className="focusValue">{val}</div>;
      return <div className="nonFocusValue">{val}</div>;
    }
    case 'to': {
      const val = record.toName ? record.toName.name : record.to;
      if (record.to === g_focusValue) return <div className="focusValue">{val}</div>;
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
    case 'compressedTx':
      if (!record['compressedTx']) return;
      let arr = record.compressedTx.replace('(', ',').split(',');
      return (
        <div>
          {arr.map((item) => {
            return <div key={item}>{item}</div>;
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
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const appearancesSchema = [
  {
    name: 'Date/Block',
    selector: 'date',
    type: 'string',
    width: 3,
    underField: 'marker',
    onDisplay: getFieldValue,
  },
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
    copyable: true,
  },
  {
    name: 'Marker',
    selector: 'marker',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
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
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    width: 5,
    searchable: true,
    underField: 'fromName',
    onDisplay: getFieldValue,
    copyable: true,
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
    copyable: true,
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
    name: 'Value',
    selector: 'value',
    type: 'wei',
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
    name: 'Compressed',
    selector: 'compressedTx',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
    hidden: true,
  },
  {
    name: 'Ether',
    selector: 'ether',
    type: 'blknum',
    width: 2,
    hidden: true,
  },
  {
    name: 'Inflow',
    selector: 'inflow',
    type: 'blknum',
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Outflow',
    selector: 'outflow',
    type: 'blknum',
    width: 2,
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
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'wei',
    hidden: true,
    width: 2,
  },
  {
    name: 'Gas Cost',
    selector: 'gasCost',
    type: 'wei',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
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
    name: 'Gas Cost',
    selector: 'etherGasCost',
    type: 'ether',
    hidden: true,
    width: 2,
  },
  {
    name: 'Function',
    selector: 'function',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
    width: 5,
    hidden: true,
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
    type: 'doube',
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
    name: 'Age',
    selector: 'age',
    type: 'number',
    hidden: true,
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'string',
    searchable: true,
    width: 5,
    hidden: true,
  },
  {
    name: 'Error',
    selector: 'isError',
    type: 'string',
    width: 1,
    isPill: true,
    //onDisplay: getFieldValue,
    hidden: true,
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
  },
];
// auto-generate: schema
