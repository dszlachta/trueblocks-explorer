/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, PageCaddie } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick } from 'components/utils';
import { navigate, notEmpty, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';

import { useStatus, LOADING, NOT_LOADING, useMonitorMap } from 'store/status_store';
import { NameDialog } from 'dialogs/NameDialog/NameDialog';

import './Signatures.css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Signatures = (props) => {
  const { signatures, dispatch } = useSignatures();
  const loading = useStatus().state.loading;
  const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(signaturesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('signaturesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');
  const [debug, setDebug] = useState(false);

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/abi';
  const cmdUrl = 'http://localhost:8080/abi';

  const dataQuery = 'verbose=10&monitored&known';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const signaturesHandler = useCallback(
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
          localStorage.setItem('signaturesTag', tag);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Signature', record: record });
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
        case 'delete':
          {
            const cmdQuery = 'editCmd=delete&terms=' + action.record_id + addendum(record, action.record_id);
            statusDispatch(LOADING);
            dispatch(action);
            sendServerCommand(cmdUrl, cmdQuery).then(() => {
              // we assume the delete worked, so we don't reload the data
              statusDispatch(NOT_LOADING);
            });
          }
          break;
        case 'undelete':
          {
            const cmdQuery = 'editCmd=undelete&terms=' + action.record_id + addendum(record, action.record_id);
            statusDispatch(LOADING);
            dispatch(action);
            sendServerCommand(cmdUrl, cmdQuery).then(() => {
              // we assume the delete worked, so we don't reload the data
              statusDispatch(NOT_LOADING);
            });
          }
          break;
        case 'remove':
          {
            const cmdQuery = 'editCmd=remove&terms=' + action.record_id + addendum(record, action.record_id);
            statusDispatch(LOADING);
            sendServerCommand(cmdUrl, cmdQuery).then((theData) => {
              // the command worked, but now we need to reload the data
              refreshSignaturesData(dataUrl, dataQuery, dispatch);
              statusDispatch(NOT_LOADING);
            });
          }
          break;

        // EXISTING_CODE
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered, statusDispatch]
  );

  useEffect(() => {
    statusDispatch(LOADING);
    refreshSignaturesData(dataUrl, dataQuery, dispatch, mocked);
    statusDispatch(NOT_LOADING);
  }, [dataQuery, dispatch, statusDispatch, mocked]);

  useEffect(() => {
    Mousetrap.bind('plus', (e) => handleClick(e, signaturesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind('plus');
    };
  }, [signaturesHandler]);

  useMemo(() => {
    // prettier-ignore
    if (signatures && signatures.data) {
      setTagList(getTagList(signatures));
      const result = signatures.data.filter((item) => {
        // EXISTING_CODE
        // EXISTING_CODE
        return curTag === 'All' || (item.tags && item.tags.includes(curTag));
      });
      setFiltered(result);
    }
  }, [signatures, curTag, debug, mocked]);

  let custom = null;
  let title = 'Signatures';
  // EXISTING_CODE
  // EXISTING_CODE

  const table = getInnerTable(signatures, curTag, filtered, title, searchFields, recordIconList, signaturesHandler);
  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={signaturesHandler}
        loading={loading}
      />
      {mocked && <span className="warning"><b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b></span>}
      {debug && <pre>{JSON.stringify(signatures, null, 2)}</pre>}
      {table}
      {/* prettier-ignore */}
      <NameDialog showing={editDialog.showing} handler={signaturesHandler} object={{ address: curRecordId }} />
      {custom}
    </div>
  );
};

//----------------------------------------------------------------------
const getTagList = (signatures) => {
  // prettier-ignore
  let tagList = ['Functions', 'Events', 'Constructors', '|', 'Known', 'Monitored', '|', 'Names Only', 'Signatures Only', 'Cross'];
  tagList.unshift('|');
  tagList.unshift('All');
  tagList.push('|');
  tagList.push('Debug');
  tagList.push('MockData');
  return tagList;
};

//----------------------------------------------------------------------
const getInnerTable = (signatures, curTag, filtered, title, searchFields, recordIconList, signaturesHandler) => {
  // EXISTING_CODE
  // EXISTING_CODE
  return (
    <DataTable
      tableName={'signaturesTable'}
      data={filtered}
      columns={signaturesSchema}
      title={title}
      search={true}
      searchFields={searchFields}
      pagination={true}
      recordIcons={recordIconList}
      parentHandler={signaturesHandler}
    />
  );
};

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'footer-CSV',
  'footer-TXT',
  //
];
const defaultSort = ['encoding', 'type', 'name'];
const defaultSearch = ['encoding', 'type', 'name'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshSignaturesData(url, query, dispatch, mocked) {
  getServerData(url, query + (mocked ? '&mockData' : '')).then((theData) => {
    let signatures = theData.data;
    // EXISTING_CODE
    signatures = signatures.filter((item) => item.type !== 'constructor');
    // EXISTING_CODE
    if (signatures) theData.data = sortArray(signatures, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const signaturesDefault = [];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
  let signatures = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = signatures.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          signatures.data = replaceRecord(signatures.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      signatures = action.payload;
      break;
    default:
    // do nothing
  }
  return signatures;
};

//----------------------------------------------------------------------
export const useSignatures = () => {
  return useContext(GlobalContext).signatures;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.encoding;
    case 'outputs':
    case 'inputs': {
      if (!record[fieldName]) return '';
      return JSON.stringify(record[fieldName]);
    }
    case 'function': {
      const value = record['inputs'];
      if (!value || !value.length) return '';
      let str = '';
      const sig = record['signature'];
      if (sig && sig !== undefined && sig.contains && sig.contains(')')) {
        const types = record['signature'].replace(')', '').split('(')[1].split(',');
        str = value
          .map((item, index) => {
            return types[index] + ' ' + item.name;
          })
          .join(', ');
      } else {
        str = sig;
      }
      return record.name + '(' + str + ')';
    }
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
export const signaturesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
    width: 1,
    copyable: true,
    searchable: true,
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    width: 1,
    isPill: true,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 2,
    searchable: true,
  },
  {
    name: 'Signature',
    selector: 'signature',
    type: 'string',
    hidden: true,
    width: 2,
  },
  {
    name: 'Input Names',
    selector: 'inputs',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Output Names',
    selector: 'outputs',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Signature',
    selector: 'function',
    type: 'string',
    width: 6,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
