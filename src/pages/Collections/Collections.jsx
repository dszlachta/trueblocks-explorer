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

import './Collections.css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Collections = () => {
  const { collections, dispatch } = useCollections();
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(collectionsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('collectionsTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/names';
  const cmdUrl = 'http://localhost:8080/names';

  const dataQuery = 'verbose=10&collections';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const collectionsHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('collectionsTag', action.payload);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Collection', record: record });
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
              refreshCollectionsData(dataUrl, dataQuery, dispatch);
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
    refreshCollectionsData(dataUrl, dataQuery, dispatch);
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, collectionsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [collectionsHandler]);

  useMemo(() => {
    // prettier-ignore
    if (collections && collections.data) {
      let tagList = [...new Set(collections.data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
      tagList = sortStrings(tagList, true);
      tagList.unshift('All');
      setTagList(tagList);
    }
  }, [collections]);

  useMemo(() => {
    if (collections && collections.data) {
      const result = collections.data.filter((item) => {
        return curTag === 'All' || item.tags.includes(curTag);
      });
      setFiltered(result);
    }
  }, [collections, curTag]);

  let custom = null;
  let title = 'Collections';
  // EXISTING_CODE
  // EXISTING_CODE

  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={collectionsHandler}
        loading={loading}
      />
      <DataTable
        name={'collectionsTable'}
        data={filtered}
        columns={collectionsSchema}
        title={title}
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        parentHandler={collectionsHandler}
      />
      {/* prettier-ignore */}
      {/*<AddName
        showing={editDialog.showing}
        handler={collectionsHandler}
        columns={collectionsSchema}
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
  'View/None',
  'footer-CSV',
  'footer-TXT',
  //
];
const defaultSort = ['tags', 'name', 'client'];
const defaultSearch = ['tags', 'name', 'client'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshCollectionsData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let collections = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    if (collections) theData.data = sortArray(collections, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const collectionsDefault = [];

//----------------------------------------------------------------------
export const collectionsReducer = (state, action) => {
  let collections = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = collections.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          collections.data = replaceRecord(collections.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      collections = action.payload;
      break;
    default:
    // do nothing
  }
  return collections;
};

//----------------------------------------------------------------------
export const useCollections = () => {
  return useContext(GlobalContext).collections;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  // EXISTING_CODE
  return record[fieldName];
}

// EXISTING_CODE
//----------------------------------------------------------------------------
const validateUserInput = (fieldName, value) => {
  if (fieldName === 'group') return notEmpty(fieldName, value);
  return true;
};
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const collectionsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
  },
  {
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    editable: true,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    editable: true,
    searchable: true,
  },
  {
    name: 'Client',
    selector: 'client',
    type: 'string',
    editable: true,
    searchable: true,
    onValidate: validateUserInput,
  },
  {
    name: 'Monitored',
    selector: 'monitored',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Addresses',
    selector: 'addresses',
    type: 'CAddressArray',
    width: 4,
    searchable: true,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
