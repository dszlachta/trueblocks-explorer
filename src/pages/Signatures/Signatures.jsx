/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, PageCaddie, Dialog } from 'components';
import { calcValue, getServerData, sendServerCommand, sortArray, handleClick, replaceRecord, stateFromStorage } from 'components/utils';

import { useStatus, LOADING, NOT_LOADING } from 'store/status_store';

import { signaturesSchema } from './SignaturesSchema';
import './Signatures.css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Signatures = (props) => {
  const { signatures, dispatch } = useSignatures();
  const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(signaturesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('signaturesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');
  const [debug, setDebug] = useState(false);
  const [detailLevel, setDetailLevel] = useState(Number(stateFromStorage('signaturesPageDetails', 0)));

  // EXISTING_CODE
  // EXISTING_CODE

  const cmdUrl = 'http://localhost:8080/abi';

  const dataQuery = 'monitored&known';
  function addendum(record, record_id) {
    let ret = '';
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
        case 'toggle-detail':
          setDetailLevel((detailLevel + 1) % 3);
          localStorage.setItem('signaturesPageDetails', (detailLevel + 1) % 3);
          break;
        case 'select-tag':
          if (action.payload === 'Debug') {
            setDebug(!debug);
            setTag('All');
            localStorage.setItem('signaturesTag', 'All');
          } else if (action.payload === 'MockData') {
            statusDispatch({ type: 'mocked', payload: !mocked });
            setTag('All');
            localStorage.setItem('signaturesTag', 'All');
          } else {
            setTag(action.payload);
            localStorage.setItem('signaturesTag', action.payload);
          }
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'enter':
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
              refreshSignaturesData(dataQuery, dispatch, mocked);
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
    let partialFetch = false;
    // EXISTING_CODE
    // EXISTING_CODE
    if (!partialFetch) {
      refreshSignaturesData(dataQuery, dispatch, mocked);
    }
  }, [dataQuery, dispatch, mocked]);

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
    statusDispatch(NOT_LOADING);
  }, [signatures, curTag, statusDispatch]);

  let custom = null;
  let title = 'Signatures';
  // EXISTING_CODE
  // EXISTING_CODE

  const table = getInnerTable(signatures, curTag, filtered, title, detailLevel, searchFields, recordIconList, signaturesHandler);
  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={signaturesHandler}
      />
      {mocked && (
        <span className="warning">
          <b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b>
        </span>
      )}
      {debug && <pre>{JSON.stringify(signatures, null, 2)}</pre>}
      {table}
      {/* prettier-ignore */}
      <Dialog showing={editDialog.showing} header={'Edit/Add Signature'} handler={signaturesHandler} object={editDialog.record} columns={signaturesSchema}/>
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
const getInnerTable = (signatures, curTag, filtered, title, detailLevel, searchFields, recordIconList, signaturesHandler) => {
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
      detailLevel={detailLevel}
    />
  );
};

// EXISTING_CODE
// EXISTING_CODE

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
const getDataUrl = () => {
  return 'http://localhost:8080/abi';
}

//----------------------------------------------------------------------
export function refreshSignaturesData(query, dispatch, mocked) {
  getServerData(getDataUrl(), query + (mocked ? '&mockData' : '')).then((theData) => {
    let signatures = theData.data;
    // EXISTING_CODE
    signatures = signatures.filter((item) => item.type !== 'constructor');
    // EXISTING_CODE
    theData.data = sortArray(signatures, defaultSort, ['asc', 'asc', 'asc']); // will return if array is null
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
export function getFieldValue(record, fieldName) {
  if (!record) return '';
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
