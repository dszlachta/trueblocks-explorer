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

import './[{PROPER}].css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const [{PROPER}] = () => {
  const { [{LONG}], dispatch } = use[{PROPER}]();
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState([{LONG}]Default);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('[{LONG}]Tag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = '[{DATAURL}]';
  const cmdUrl = '[{CMDURL}]';

  const dataQuery = '[{DATAQUERY}]';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const [{LONG}]Handler = useCallback(
    (action) => {
      const record_id = action.record_id;
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('[{LONG}]Tag', action.payload);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit [{SINGULAR}]', record: record });
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
              refresh[{PROPER}]Data(dataUrl, dataQuery, dispatch);
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
    refresh[{PROPER}]Data(dataUrl, dataQuery, dispatch);
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, [{LONG}]Handler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [[{LONG}]Handler]);

  useMemo(() => {
    // prettier-ignore
    if ([{LONG}] && [{LONG}].data) {
      let tagList = [...new Set([{LONG}].data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
      tagList = sortStrings(tagList, true);
      tagList.unshift('All');
      setTagList(tagList);
    }
  }, [[{LONG}]]);

  useMemo(() => {
    if ([{LONG}] && [{LONG}].data) {
      const result = [{LONG}].data.filter((item) => {
        return curTag === 'All' || item.tags.includes(curTag);
      });
      setFiltered(result);
    }
  }, [[{LONG}], curTag]);

  let custom = null;
  let title = '[{PROPER}]';
  // EXISTING_CODE
  // EXISTING_CODE

  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={[{LONG}]Handler}
        loading={loading}
      />
      <DataTable
        name={'[{LONG}]Table'}
        data={filtered}
        columns={[{LONG}]Schema}
        title={title}
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        parentHandler={[{LONG}]Handler}
      />
      {/* prettier-ignore */}
      {/*<AddName
        showing={editDialog.showing}
        handler={[{LONG}]Handler}
        columns={[{LONG}]Schema}
        data={editDialog.record}
        title={editDialog.name}
        showHidden={true}
      />*/}
      {custom}
    </div>
  );
};

// auto-generate: page-settings
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refresh[{PROPER}]Data(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let [{LONG}] = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    if ([{LONG}]) theData.data = sortArray([{LONG}], defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const [{LONG}]Default = [];

//----------------------------------------------------------------------
export const [{LONG}]Reducer = (state, action) => {
  let [{LONG}] = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = [{LONG}].data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          [{LONG}].data = replaceRecord([{LONG}].data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      [{LONG}] = action.payload;
      break;
    default:
    // do nothing
  }
  return [{LONG}];
};

//----------------------------------------------------------------------
export const use[{PROPER}] = () => {
  return useContext(GlobalContext).[{LONG}];
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  // EXISTING_CODE
  return record[fieldName];
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
// auto-generate: schema
