/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal } from 'components';
import { getServerData, sortArray, sortStrings, handleClick, notEmpty } from 'components/utils';
import { calcValue } from 'store';

import './Caches.css';

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Edit/Remove',
  'Delete/Undelete',
  'ExternalLink',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['path'];
const defaultSearch = ['path'];
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const Caches = () => {
  const { caches, dispatch } = useCaches();
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState('All');
  const [dialogShowing, setShowing] = useState(false);

  const clickHandler = (action) => {
    switch (action.type) {
      case 'Add':
        setShowing(true);
        break;
      case 'close':
      case 'cancel':
      case 'okay':
        setShowing(false);
        break;
      case 'set-tags':
        setTag(action.payload);
        break;
      default:
        break;
    }
  };

  let query = 'verbose=10&modes=abis%20caches&types=all&details&depth=1';
  const url = 'http://localhost:8080/status';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      let result = theData.data;
      // EXISTING_CODE
      result = theData.data[0].caches;
      // EXISTING_CODE
      const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
      dispatch({ type: 'update', payload: sorted });
    });
  }, [query, dispatch]);

  useMemo(() => {
    let tagList = [
      ...new Set(caches.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
    ];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [caches]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, clickHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  const filtered = caches.filter((item) => {
    return curTag === 'All' || item.tags.includes(curTag);
  });

  return (
    <div>
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={clickHandler} />
      ) : null}
      <DataTable
        data={filtered}
        columns={cachesSchema}
        title="Caches"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
      />
      {dialogShowing && (
        <Modal showing={dialogShowing} handler={clickHandler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={{}}
            columns={cachesSchema}
            title="Add Cache"
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
export const cachesDefault = [];

//----------------------------------------------------------------------
export const cachesReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
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
