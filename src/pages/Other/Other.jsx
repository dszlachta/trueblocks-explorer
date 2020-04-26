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

import './Other.css';

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Edit/Remove',
  'Delete/Undelete',
  //
];
const defaultSort = ['blockNumber', 'name', 'date'];
const defaultSearch = ['blockNumber', 'name', 'date'];
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const Other = () => {
  const { other, dispatch } = useOther();
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

  let query = 'verbose=10&list';
  const url = 'http://localhost:8080/when';
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
      ...new Set(other.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
    ];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [other]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, clickHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  const filtered = other.filter((item) => {
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
        columns={otherSchema}
        title="Other"
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
            columns={otherSchema}
            title="Add Other"
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
export const otherDefault = [];

//----------------------------------------------------------------------
export const otherReducer = (state, action) => {
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
