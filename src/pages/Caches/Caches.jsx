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

import './Caches.css';

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

//---------------------------------------------------------------------------
export const Caches = () => {
  const { caches, dispatch } = useCaches();

  const [filtered, setFiltered] = useState(cachesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('cachesTag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });

  const cachesHandler = (action) => {
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
        if (record) setEditor({ showing: true, name: 'Edit Cache', record: record });
        break;
      case 'close':
      case 'cancel':
      case 'okay':
        setEditor({ showing: false, record: {} });
        break;
      case 'set-tags':
        setTag(action.payload);
        localStorage.setItem('cachesTag', action.payload);
        break;
      case 'explorer':
        setEditor({ showing: true, name: 'Explore Cache', record: record });
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
          const url = 'http://localhost:8080/status';
          let query = 'verbose=10&modes=abis%20caches&types=all&details&depth=1';
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

  const url = 'http://localhost:8080/status';
  let query = 'verbose=10&modes=abis%20caches&types=all&details&depth=1';
  useEffect(() => {
    refreshData(url, query, dispatch);
  }, [query, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, cachesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(caches.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [caches]);

  useMemo(() => {
    const result = caches.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [caches, curTag]);

  return (
    <div>
      {/*<pre>url: {url + "?" + query}</pre>*/}
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={cachesHandler} />
      ) : null}
      <DataTable
        name={'cachesTable'}
        data={filtered}
        columns={cachesSchema}
        title="Caches"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={cachesHandler}
      />
      {editor.showing && (
        <Modal showing={true} handler={cachesHandler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={editor.record}
            columns={cachesSchema}
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
    result = theData.data[0].caches;
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const cachesDefault = [];

//----------------------------------------------------------------------
export const cachesReducer = (state, action) => {
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
    default:
      break;
  }
  // EXISTING_CODE
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
