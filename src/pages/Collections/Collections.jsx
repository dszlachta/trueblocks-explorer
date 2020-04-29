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

import './Collections.css';

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'footer-CSV',
  'footer-TXT',
  //
];
const defaultSort = ['tags', 'name', 'client'];
const defaultSearch = ['tags', 'name', 'client'];
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const Collections = () => {
  const { collections, dispatch } = useCollections();

  const [filtered, setFiltered] = useState(collectionsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('collectionsTag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });

  const collectionsHandler = (action) => {
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
        if (record) setEditor({ showing: true, name: 'Edit Collection', record: record });
        break;
      case 'close':
      case 'cancel':
      case 'okay':
        setEditor({ showing: false, record: {} });
        break;
      case 'set-tags':
        setTag(action.payload);
        localStorage.setItem('collectionsTag', action.payload);
        break;
      case 'explorer':
        setEditor({ showing: true, name: 'Explore Collection', record: record });
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
          let query = 'verbose=10&collections';
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
  let query = 'verbose=10&collections';
  useEffect(() => {
    refreshData(url, query, dispatch);
  }, [query, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, collectionsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(collections.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [collections]);

  useMemo(() => {
    const result = collections.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [collections, curTag]);

  return (
    <div>
      {/*<pre>url: {url + "?" + query}</pre>*/}
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={collectionsHandler} />
      ) : null}
      <DataTable
        name={'collectionsTable'}
        data={filtered}
        columns={collectionsSchema}
        title="Collections"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={collectionsHandler}
      />
      {editor.showing && (
        <Modal showing={true} handler={collectionsHandler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={editor.record}
            columns={collectionsSchema}
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
export const collectionsDefault = [];

//----------------------------------------------------------------------
export const collectionsReducer = (state, action) => {
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
export const useCollections = () => {
  return useContext(GlobalContext).collections;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.address;
    // case 'tags':
    //   const array = record.tags.split(':');
    //   return array.length > 0 ? array[0] : '';
    default:
      break;
  }
  // EXISTING_CODE
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
