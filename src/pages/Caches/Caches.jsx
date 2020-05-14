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

import './Caches.css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Caches = (props) => {
  const { caches, dispatch } = useCaches();
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(cachesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('cachesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/status';
  const cmdUrl = 'http://localhost:8080/status';

  const dataQuery = 'verbose=10&modes=abis%20caches&types=all&details&depth=1';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const cachesHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      setCurRecordId(record_id);
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('cachesTag', action.payload);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Cache', record: record });
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
              refreshCachesData(dataUrl, dataQuery, dispatch);
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
    refreshCachesData(dataUrl, dataQuery, dispatch);
    statusDispatch(NOT_LOADING);
  }, [dataQuery, dispatch, statusDispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, cachesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [cachesHandler]);

  useMemo(() => {
    // prettier-ignore
    if (caches && caches.data) {
      let tagList = [...new Set(caches.data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
      tagList = sortStrings(tagList, true);
      tagList.unshift('All');
      setTagList(tagList);
    }
  }, [caches]);

  useMemo(() => {
    if (caches && caches.data) {
      const result = caches.data.filter((item) => {
        return curTag === 'All' || item.tags.includes(curTag);
      });
      setFiltered(result);
    }
  }, [caches, curTag]);

  let custom = null;
  let title = 'Caches';
  // EXISTING_CODE
  // EXISTING_CODE

  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={cachesHandler}
        loading={loading}
      />
      <DataTable
        name={'cachesTable'}
        data={filtered}
        columns={cachesSchema}
        title={title}
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        parentHandler={cachesHandler}
      />
      {/* prettier-ignore */}
      {/*<AddName
        showing={editDialog.showing}
        handler={cachesHandler}
        columns={cachesSchema}
        data={editDialog.record}
        title={editDialog.name}
        showHidden={true}
      />*/}
      {custom}
    </div>
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
const defaultSort = ['path'];
const defaultSearch = ['path'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshCachesData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let caches = theData.data;
    // EXISTING_CODE
    if (caches)
      caches = caches[0].caches
    // EXISTING_CODE
    if (caches) theData.data = sortArray(caches, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const cachesDefault = [];

//----------------------------------------------------------------------
export const cachesReducer = (state, action) => {
  let caches = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = caches.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          caches.data = replaceRecord(caches.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      caches = action.payload;
      break;
    default:
    // do nothing
  }
  return caches;
};

//----------------------------------------------------------------------
export const useCaches = () => {
  return useContext(GlobalContext).caches;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.path;
    case 'bytesPerFile':
      return record.nFiles ? record.sizeInBytes / record.nFiles : 0;
    case 'perFolder':
      return record.nFolders ? record.nFiles / record.nFolders : 0;
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
export const cachesSchema = [
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
    name: 'Cache Type',
    selector: 'type',
    type: 'string',
    width: 1,
    searchable: true,
  },
  {
    name: 'Location',
    selector: 'path',
    type: 'string',
    width: 2,
    searchable: true,
  },
  {
    name: '# Folders',
    selector: 'nFolders',
    type: 'uint64',
    width: 1,
  },
  {
    name: '# Files',
    selector: 'nFiles',
    type: 'uint64',
    width: 1,
  },
  {
    name: 'Total Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    width: 1,
  },
  {
    name: 'Average Size',
    selector: 'bytesPerFile',
    type: 'filesize',
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'perFolder',
    selector: 'perFolder',
    type: 'double',
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Valid',
    selector: 'is_valid',
    type: 'bool',
    hidden: true,
    width: 1,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
