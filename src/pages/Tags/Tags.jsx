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

import './Tags.css';

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Edit/Remove',
  'Delete/Undelete',
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
  const [curTag, setTag] = useState('All');
  const [dialogShowing, setShowing] = useState(false);

  const tagsHandler = (action) => {
    switch (action.type.toLowerCase()) {
      case 'add':
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

  let query = 'verbose=10&tags';
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

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, tagsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    let tagList = [
      ...new Set(tags.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
    ];
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
      <pre>url: {url + "?" + query}</pre>
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={tagsHandler} />
      ) : null}
      <DataTable
        name="tags-table"
        data={filtered}
        columns={tagsSchema}
        title="Tags"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
      />
      {dialogShowing && (
        <Modal showing={dialogShowing} handler={tagsHandler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={{}}
            columns={tagsSchema}
            title="Add Tag"
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
export const tagsDefault = [];

//----------------------------------------------------------------------
export const tagsReducer = (state, action) => {
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
