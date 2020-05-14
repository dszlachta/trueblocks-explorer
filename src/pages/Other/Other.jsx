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

import './Other.css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Other = (props) => {
  const { other, dispatch } = useOther();
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(otherDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('otherTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/when';
  const cmdUrl = 'http://localhost:8080/when';

  const dataQuery = 'verbose=10&list';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const otherHandler = useCallback(
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
          localStorage.setItem('otherTag', action.payload);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Other', record: record });
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
              refreshOtherData(dataUrl, dataQuery, dispatch);
              statusDispatch(NOT_LOADING);
            });
          }
          break;
        // EXISTING_CODE
        case 'externallink':
          navigate('https://etherscan.io/blocks/' + action.record_id, true);
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered, statusDispatch]
  );

  useEffect(() => {
    statusDispatch(LOADING);
    refreshOtherData(dataUrl, dataQuery, dispatch);
    statusDispatch(NOT_LOADING);
  }, [dataQuery, dispatch, statusDispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, otherHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [otherHandler]);

  useMemo(() => {
    // prettier-ignore
    if (other && other.data) {
      let tagList = [...new Set(other.data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
      tagList = sortStrings(tagList, true);
      tagList.unshift('All');
      setTagList(tagList);
    }
  }, [other]);

  useMemo(() => {
    if (other && other.data) {
      const result = other.data.filter((item) => {
        return curTag === 'All' || item.tags.includes(curTag);
      });
      setFiltered(result);
    }
  }, [other, curTag]);

  let custom = null;
  let title = 'Other';
  // EXISTING_CODE
  // EXISTING_CODE

  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={otherHandler}
        loading={loading}
      />
      <DataTable
        name={'otherTable'}
        data={filtered}
        columns={otherSchema}
        title={title}
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        parentHandler={otherHandler}
      />
      {/* prettier-ignore */}
      {/*<AddName
        showing={editDialog.showing}
        handler={otherHandler}
        columns={otherSchema}
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
  //
];
const defaultSort = ['blockNumber', 'name', 'date'];
const defaultSearch = ['blockNumber', 'name', 'date'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshOtherData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let other = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    if (other) theData.data = sortArray(other, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const otherDefault = [];

//----------------------------------------------------------------------
export const otherReducer = (state, action) => {
  let other = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = other.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          other.data = replaceRecord(other.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      other = action.payload;
      break;
    default:
    // do nothing
  }
  return other;
};

//----------------------------------------------------------------------
export const useOther = () => {
  return useContext(GlobalContext).other;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.blockNumber;
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
export const otherSchema = [
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
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 1,
    searchable: true,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
    width: 2,
    align: 'center',
    searchable: true,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    width: 2,
    align: 'center',
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string',
    width: 2,
    align: 'center',
    searchable: true,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
