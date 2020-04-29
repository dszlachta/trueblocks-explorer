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

import './[{PROPER}].css';

// auto-generate: page-settings
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const [{PROPER}] = () => {
  const { [{LONG}], dispatch } = use[{PROPER}]();

  const [filtered, setFiltered] = useState([{LONG}]Default);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('[{LONG}]Tag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });

  const [{LONG}]Handler = (action) => {
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
        if (record) setEditor({ showing: true, name: 'Edit [{SINGULAR}]', record: record });
        break;
      case 'close':
      case 'cancel':
      case 'okay':
        setEditor({ showing: false, record: {} });
        break;
      case 'set-tags':
        setTag(action.payload);
        localStorage.setItem('[{LONG}]Tag', action.payload);
        break;
      case 'explorer':
        setEditor({ showing: true, name: 'Explore [{SINGULAR}]', record: record });
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
          const url = '[{URL}]';
          let query = '[{QUERY}]';
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

  const url = '[{URL}]';
  let query = '[{QUERY}]';
  useEffect(() => {
    refreshData(url, query, dispatch);
  }, [query, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, [{LONG}]Handler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set([{LONG}].map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [[{LONG}]]);

  useMemo(() => {
    const result = [{LONG}].filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [[{LONG}], curTag]);

  return (
    <div>
      {/*<pre>url: {url + "?" + query}</pre>*/}
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={[{LONG}]Handler} />
      ) : null}
      <DataTable
        name={'[{LONG}]Table'}
        data={filtered}
        columns={[{LONG}]Schema}
        title="[{PROPER}]"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={[{LONG}]Handler}
      />
      {editor.showing && (
        <Modal showing={true} handler={[{LONG}]Handler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={editor.record}
            columns={[{LONG}]Schema}
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
export const [{LONG}]Default = [];

//----------------------------------------------------------------------
export const [{LONG}]Reducer = (state, action) => {
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
export const use[{PROPER}] = () => {
  return useContext(GlobalContext).[{LONG}];
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
// auto-generate: schema
