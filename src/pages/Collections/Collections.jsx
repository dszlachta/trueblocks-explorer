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

import './Collections.css';

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
const defaultSort = ['tags', 'address', 'name'];
const defaultSearch = ['tags', 'address', 'name'];
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const Collections = () => {
  const { collections, dispatch } = useCollections();
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

  let query = 'verbose=10&collections';
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      let result = theData.data;
      // EXISTING_CODE
      // EXISTING_CODE
      const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
      dispatch({ type: 'update', payload: sorted });
    });
  }, [query, dispatch]);

  useMemo(() => {
    let tagList = [
      ...new Set(collections.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
    ];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [collections]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, clickHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  const filtered = collections.filter((item) => {
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
        columns={collectionsSchema}
        title="Collections"
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
            columns={collectionsSchema}
            title="Add Collection"
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
export const collectionsDefault = [];

//----------------------------------------------------------------------
export const collectionsReducer = (state, action) => {
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
    type: 'CClient',
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
