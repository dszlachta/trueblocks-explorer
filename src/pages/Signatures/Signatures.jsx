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

import './Signatures.css';

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Edit/Remove',
  'Delete/Undelete',
  'footer-CSV',
  'footer-TXT',
  //
];
const defaultSort = ['encoding', 'type', 'name'];
const defaultSearch = ['encoding', 'type', 'name'];
// auto-generate: page-settings

//---------------------------------------------------------------------------
export const Signatures = () => {
  const { signatures, dispatch } = useSignatures();
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

  let query = 'verbose=10&monitored&known';
  const url = 'http://localhost:8080/abi';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      let result = theData.data;
      // EXISTING_CODE
      result = theData.data.filter((item) => item.type !== 'constructor');
      // EXISTING_CODE
      const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
      dispatch({ type: 'update', payload: sorted });
    });
  }, [query, dispatch]);

  useMemo(() => {
    let tagList = [
      ...new Set(signatures.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
    ];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [signatures]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, clickHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, []);

  const filtered = signatures.filter((item) => {
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
        columns={signaturesSchema}
        title="Signatures"
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
            columns={signaturesSchema}
            title="Add Signature"
            editable={true}
            showHidden={true}
          />
        </Modal>
      )}
    </div>
  );
};

//----------------------------------------------------------------------
export const signaturesDefault = [];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
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
export const useSignatures = () => {
  return useContext(GlobalContext).signatures;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  // EXISTING_CODE
  switch (fieldName) {
    case 'id':
      return record.encoding;
    case 'outputs':
    case 'inputs': {
      if (!record[fieldName]) return '';
      return JSON.stringify(record[fieldName]);
    }
    case 'function': {
      const value = record['inputs'];
      if (!value || !value.length) return '';
      let str = '';
      const sig = record['signature'];
      if (sig && sig !== undefined && sig.contains && sig.contains(')')) {
        const types = record['signature'].replace(')', '').split('(')[1].split(',');
        str = value
          .map((item, index) => {
            return types[index] + ' ' + item.name;
          })
          .join(', ');
      } else {
        str = sig;
      }
      return record.name + '(' + str + ')';
    }
    default:
      break;
  }
  // EXISTING_CODE
}

// EXISTING_CODE
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const signaturesSchema = [
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
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
    width: 1,
    searchable: true,
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    width: 1,
    isPill: true,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 2,
    searchable: true,
  },
  {
    name: 'Signature',
    selector: 'signature',
    type: 'string',
    hidden: true,
    width: 2,
  },
  {
    name: 'Input Names',
    selector: 'inputs',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Output Names',
    selector: 'outputs',
    type: 'string',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Signature',
    selector: 'function',
    type: 'string',
    width: 6,
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
