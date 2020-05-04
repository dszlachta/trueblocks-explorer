/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal, PageCaddie } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick } from 'components/utils';
import { navigate, notEmpty, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';

import { useStatus, LOADING, NOT_LOADING, useMonitorMap } from 'store/status_store';

import './Appearances.css';

// EXISTING_CODE
import { data } from './data';
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Appearances = ({ addresses = [] }) => {
  const { appearances, dispatch } = useAppearances();
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(appearancesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('appearancesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/export';
  const dataQuery = 'addrs=0xf503017d7baf7fbc0fff7492b751025c6a78179b&verbose=10';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const appearancesHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
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
        case 'externallink':
          navigate('https://etherscan.io/tx/' + action.record_id, true);
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered]
  );

  useEffect(() => {
    refreshAppearancesData(dataUrl, dataQuery, dispatch);
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, appearancesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [appearancesHandler]);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(appearances.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [appearances]);

  useMemo(() => {
    const result = appearances.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [appearances, curTag]);

  let custom = null;
  // EXISTING_CODE
  // EXISTING_CODE

  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={appearancesHandler}
        loading={loading}
      />
      <DataTable
        name={'appearancesTable'}
        data={filtered}
        columns={appearancesSchema}
        title={'Appearances for ' + addresses[0]}
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={appearancesHandler}
      />
      <Modal showing={editDialog.showing} handler={appearancesHandler}>
        {/* prettier-ignore */}
        <ObjectTable
            data={editDialog.record}
            columns={appearancesSchema}
            title={editDialog.name}
            editable={true}
            showHidden={true}
          />
      </Modal>
      {custom}
    </div>
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
const defaultSort = ['tags', 'address'];
const defaultSearch = ['tags', 'address'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshAppearancesData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const appearancesDefault = [];

//----------------------------------------------------------------------
export const appearancesReducer = (state, action) => {
  let ret = state;
  // switch (action.type.toLowerCase()) {
  //   case 'undelete':
  //   case 'delete':
  //     {
  //       const record = ret.filter((r) => {
  //         const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
  //         return val === action.record_id;
  //       })[0];
  //       if (record) {
  //         record.deleted = !record.deleted;
  //         ret = replaceRecord(ret, record, action.record_id, calcValue, getFieldValue);
  //       }
  //     }
  //     break;
  //   case 'success':
  //     ret = action.payload;
  //     break;
  //   default:
  //   // do nothing
  // }
  return ret;
};

//----------------------------------------------------------------------
export const useAppearances = () => {
  return { appearances: data, dispatch: appearancesReducer };
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.hash;
    case 'marker':
      return record.blockNumber + '.' + record.transactionIndex;
    case 'isError':
      return record.isError ? 'error' : '';
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
    onDisplay: getFieldValue,
    underField: 'marker',
  },
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Marker',
    selector: 'marker',
    type: 'string',
    width: 2,
    onDisplay: getFieldValue,
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
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    width: 5,
    searchable: true,
    underField: 'fromName',
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    width: 5,
    searchable: true,
    underField: 'toName',
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
    width: 2,
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'wei',
    width: 2,
  },
  {
    name: 'Gas Cost',
    selector: 'gasCost',
    type: 'wei',
    width: 2,
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
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
    name: 'Compressed',
    selector: 'compressedTx',
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
    type: 'CFunction',
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
    type: 'hash',
    hidden: true,
  },
  {
    name: 'Error',
    selector: 'isError',
    type: 'string',
    width: 1,
    isPill: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
