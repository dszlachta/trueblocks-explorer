/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal } from 'components';
import {
  getServerData,
  sendServerCommand,
  sortArray,
  sortStrings,
  handleClick,
  navigate,
  notEmpty,
  replaceRecord,
  stateFromStorage,
} from 'components/utils';
import { calcValue } from 'store';

import './Tags.css';

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

//---------------------------------------------------------------------------
export const Tags = () => {
  const { tags, dispatch } = useTags();

  const [filtered, setFiltered] = useState(tagsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('tagsTag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });

  const tagsHandler = (action) => {
    const record_id = action.record_id;
    let record = filtered.filter((record) => {
      return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
    });
    if (record) record = record[0];
    switch (action.type.toLowerCase()) {
      case 'add':
        setEditor({ showing: true, record: null });
        break;
      case 'edit':
        if (record) setEditor({ showing: true, name: 'Edit Tag', record: record });
        break;
      case 'close':
      case 'cancel':
      case 'okay':
        setEditor({ showing: false, record: {} });
        break;
      case 'set-tags':
        setTag(action.payload);
        localStorage.setItem('tagsTag', action.payload);
        break;
      case 'explorer':
        setEditor({ showing: true, name: 'Explore Tag', record: record });
        break;
      case 'delete':
      case 'undelete':
        const url1 = 'http://localhost:8080/rm';
        let query1 = 'verbose=10&address=' + action.record_id;
        sendServerCommand(url1, query1).then(() => {
          // we assume the delete worked, so we don't reload the data
        });
        dispatch(action);
        break;
      case 'remove':
        let url2 = 'http://localhost:8080/rm';
        let query2 = 'verbose=10&address=' + action.record_id + '&yes';
        sendServerCommand(url2, query2).then((theData) => {
          // the command worked, but now we need to reload the data
          const url = 'http://localhost:8080/names';
          let query = 'verbose=10&tags';
          refreshData(url, query, dispatch);
        });
        break;
      case 'externallink':
        navigate('https://etherscan.io/address/' + action.record_id, true);
        break;
      // EXISTING_CODE
      // EXISTING_CODE
      default:
        break;
    }
  };

  const url = 'http://localhost:8080/names';
  let query = 'verbose=10&tags';
  useEffect(() => {
    refreshData(url, query, dispatch);
  }, [query, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, tagsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(tags.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [tags]);

  useMemo(() => {
    const result = tags.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [tags, curTag]);

  return (
    <div>
      {/*<pre>url: {url + "?" + query}</pre>*/}
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={tagsHandler} />
      ) : null}
      <DataTable
        name={'tagsTable'}
        data={filtered}
        columns={tagsSchema}
        title="Tags"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={tagsHandler}
      />
      {editor.showing && (
        <Modal showing={true} handler={tagsHandler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={editor.record}
            columns={tagsSchema}
            title={editor.name}
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
function refreshData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const tagsDefault = [];

//----------------------------------------------------------------------
export const tagsReducer = (state, action) => {
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
export const useTags = () => {
  return useContext(GlobalContext).tags;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  if (!record.tags) return '';
  const array = record.tags.split(':');
  switch (fieldName) {
    case 'id':
      return record.tags;
    case 'tags':
      return array.length > 0 ? array[0] : '';
    case 'substag1':
      return array.length > 1 ? array[1] : '';
    case 'substag2':
      return array.length > 2 ? array[2] : '';
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const tagsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Subtags 1',
    selector: 'subtags1',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Subtags 2',
    selector: 'subtags2',
    type: 'string',
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
