/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick } from 'components/utils';
import { navigate, notEmpty, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';

import './Names.css';

//---------------------------------------------------------------------------
export const Names = () => {
  const { names, dispatch } = useNames();

  const [filtered, setFiltered] = useState(namesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('namesTag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });

  const namesHandler = (action) => {
    const record_id = action.record_id;
    let record = filtered.filter((record) => {
      return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
    });
    if (record) record = record[0];
    switch (action.type.toLowerCase()) {
      case 'add':
        setEditor({ showing: true, record: {} });
        break;
      case 'edit':
        if (record) setEditor({ showing: true, name: 'Edit Name', record: record });
        break;
      case 'close':
      case 'cancel':
        setEditor({ showing: false, record: {} });
        break;
      case 'okay':
        setEditor({ showing: false, record: {} });
        const url3 = 'http://localhost:8080/names';
        let query3 = 'verbose=10&edit=A%2B0xaaaaeeeeddddccccbbbbaaaa0e92113ea9d19ca3%2BC%2BD%2BE%2BF';
        sendServerCommand(url3, query3).then(() => {
          // we assume the delete worked, so we don't reload the data
        });
        dispatch(action);
        break;
        break;
      case 'set-tags':
        setTag(action.payload);
        localStorage.setItem('namesTag', action.payload);
        break;
      case 'explorer':
        setEditor({ showing: true, name: 'Explore Name', record: record });
        break;
      case 'delete':
      case 'undelete':
        const url1 = 'http://localhost:8080/names';
        let query1 = 'verbose=10&del=' + action.record_id;
        sendServerCommand(url1, query1).then(() => {
          // we assume the delete worked, so we don't reload the data
        });
        dispatch(action);
        break;
      case 'remove':
        let url2 = 'http://localhost:8080/names';
        let query2 = 'verbose=10&remove=' + action.record_id;
        sendServerCommand(url2, query2).then((theData) => {
          // the command worked, but now we need to reload the data
          const url = 'http://localhost:8080/names';
          let query = 'verbose=10&all';
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
  let query = 'verbose=10&all';
  useEffect(() => {
    refreshData(url, query, dispatch);
  }, [query, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, namesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(names.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [names]);

  useMemo(() => {
    const result = names.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [names, curTag]);

  return (
    <div>
      {/*<pre>url: {url + "?" + query}</pre>*/}
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={namesHandler} />
      ) : null}
      <DataTable
        name={'namesTable'}
        data={filtered}
        columns={namesSchema}
        title="Names"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={namesHandler}
      />
      {editor.showing && (
        <Modal showing={true} handler={namesHandler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={editor.record}
            columns={namesSchema}
            title={editor.name}
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

// auto-generate: page-settings
const recordIconList = [
  'ExternalLink',
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['tags', 'address', 'name'];
const defaultSearch = ['tags', 'address', 'name'];
// auto-generate: page-settings

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
export const namesDefault = [];

//----------------------------------------------------------------------
export const namesReducer = (state, action) => {
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
export const useNames = () => {
  return useContext(GlobalContext).names;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.address;
    case 'tags':
      const array = record.tags.split(':');
      return array.length > 0 ? array[0] : '';
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const namesSchema = [
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
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    width: 3,
    editable: true,
    searchable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    width: 6,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    width: 2,
    editable: true,
    align: 'center',
    searchable: true,
  },
  {
    name: 'Source',
    selector: 'source',
    type: 'string',
    hidden: true,
    width: 4,
    editable: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    width: 2,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'First Appearance',
    selector: 'firstAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    hidden: true,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
