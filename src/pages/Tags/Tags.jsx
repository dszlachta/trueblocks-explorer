/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, PageCaddie } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick, replaceRecord } from 'components/utils';
import { calcValue } from 'store';

import { useStatus, LOADING, NOT_LOADING } from 'store/status_store';
import { NameDialog } from 'dialogs';

import { tagsSchema } from './TagsSchema';
import './Tags.css';

// EXISTING_CODE
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Tags = (props) => {
  const { tags, dispatch } = useTags();
  const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(tagsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('tagsTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');
  const [debug, setDebug] = useState(false);

  // EXISTING_CODE
  // EXISTING_CODE

  const cmdUrl = 'http://localhost:8080/names';

  const dataQuery = 'verbose=10&tags';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const tagsHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      setCurRecordId(record_id);
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'select-tag':
          if (action.payload === 'Debug') {
            setDebug(!debug);
            setTag('All');
            localStorage.setItem('tagsTag', 'All');
          } else if (action.payload === 'MockData') {
            statusDispatch({ type: 'mocked', payload: !mocked });
            setTag('All');
            localStorage.setItem('tagsTag', 'All');
          } else {
            setTag(action.payload);
            localStorage.setItem('tagsTag', action.payload);
          }
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Tag', record: record });
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
              refreshTagsData(dataQuery, dispatch, mocked);
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
      refreshTagsData(dataQuery, dispatch, mocked);
    }
    statusDispatch(NOT_LOADING);
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind('plus', (e) => handleClick(e, tagsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind('plus');
    };
  }, [tagsHandler]);

  useMemo(() => {
    // prettier-ignore
    if (tags && tags.data) {
      setTagList(getTagList(tags));
      const result = tags.data.filter((item) => {
        // EXISTING_CODE
        // EXISTING_CODE
        return curTag === 'All' || (item.tags && item.tags.includes(curTag));
      });
      setFiltered(result);
    }
  }, [tags, curTag, debug, mocked]);

  let custom = null;
  let title = 'Tags';
  // EXISTING_CODE
  // EXISTING_CODE

  const table = getInnerTable(tags, curTag, filtered, title, searchFields, recordIconList, tagsHandler);
  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={tagsHandler}
      />
      {mocked && (
        <span className="warning">
          <b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b>
        </span>
      )}
      {debug && <pre>{JSON.stringify(tags, null, 2)}</pre>}
      {table}
      {/* prettier-ignore */}
      <NameDialog showing={editDialog.showing} handler={tagsHandler} object={{ address: curRecordId }} columns={tagsSchema}/>
      {custom}
    </div>
  );
};

//----------------------------------------------------------------------
const getTagList = (tags) => {
  // prettier-ignore
  let tagList = sortStrings([...new Set(tags.data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))], true);
  tagList.unshift('|');
  tagList.unshift('All');
  tagList.push('|');
  tagList.push('Debug');
  tagList.push('MockData');
  return tagList;
};

//----------------------------------------------------------------------
const getInnerTable = (tags, curTag, filtered, title, searchFields, recordIconList, tagsHandler) => {
  // EXISTING_CODE
  // EXISTING_CODE
  return (
    <DataTable
      tableName={'tagsTable'}
      data={filtered}
      columns={tagsSchema}
      title={title}
      search={true}
      searchFields={searchFields}
      pagination={true}
      recordIcons={recordIconList}
      parentHandler={tagsHandler}
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
  //
];
const defaultSort = ['tags', 'subtags1', 'subtags2'];
const defaultSearch = ['tags', 'subtags1', 'subtags2'];
// auto-generate: page-settings

//----------------------------------------------------------------------
const getDataUrl = () => {
  return 'http://localhost:8080/names';
}

//----------------------------------------------------------------------
export function refreshTagsData(query, dispatch, mocked) {
  getServerData(getDataUrl(), query + (mocked ? '&mockData' : '')).then((theData) => {
    let tags = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    if (tags) theData.data = sortArray(tags, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const tagsDefault = [];

//----------------------------------------------------------------------
export const tagsReducer = (state, action) => {
  let tags = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = tags.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          tags.data = replaceRecord(tags.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      tags = action.payload;
      break;
    default:
    // do nothing
  }
  return tags;
};

//----------------------------------------------------------------------
export const useTags = () => {
  return useContext(GlobalContext).tags;
};

//----------------------------------------------------------------------------
export function getFieldValue(record, fieldName) {
  if (!record) return '';
  // EXISTING_CODE
  if (!record.tags) return '';
  const array = record.tags.split(':');
  switch (fieldName) {
    case 'id':
      return record.tags;
    case 'tags':
      return array.length > 0 ? array[0] : '';
    case 'subtags1':
      return array.length > 1 ? array[1] : '';
    case 'subtags2':
      return array.length > 2 ? array[2] : '';
    default:
      break;
  }
  // EXISTING_CODE
  return record[fieldName];
}

// EXISTING_CODE
// EXISTING_CODE
