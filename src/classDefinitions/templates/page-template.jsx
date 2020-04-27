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

import './[{PROPER}].css';

// auto-generate: page-settings
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const [{PROPER}] = () => {
  const { [{LONG}], dispatch } = use[{PROPER}]();

  const [filtered, setFiltered] = useState([{LONG}]Default);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState('All');
  const [dialogShowing, setShowing] = useState(false);

  const [{LONG}]Handler = (action) => {
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

  let query = '[{QUERY}]';
  const url = '[{URL}]';
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
    Mousetrap.bind(['plus'], (e) => handleClick(e, [{LONG}]Handler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  useMemo(() => {
    let tagList = [
      ...new Set([{LONG}].map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
    ];
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
      <pre>url: {url + "?" + query}</pre>
      {/* prettier-ignore */}
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={[{LONG}]Handler} />
      ) : null}
      <DataTable
        data={filtered}
        columns={[{LONG}]Schema}
        title="[{PROPER}]"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
      />
      {dialogShowing && (
        <Modal showing={dialogShowing} handler={[{LONG}]Handler}>
          {/* prettier-ignore */}
          <ObjectTable
            data={{}}
            columns={[{LONG}]Schema}
            title="Add [{SINGULAR}]"
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
export const [{LONG}]Default = [];

//----------------------------------------------------------------------
export const [{LONG}]Reducer = (state, action) => {
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
