/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, Modal, PageCaddie } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick } from 'components/utils';
import { navigate, notEmpty, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';
// EXISTING_CODE
// EXISTING_CODE

import './Signatures.css';

//---------------------------------------------------------------------------
export const Signatures = () => {
  const { signatures, dispatch } = useSignatures();

  const [filtered, setFiltered] = useState(signaturesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('signaturesTag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });
  const [loading, setLoading] = useState(false);

  const dataUrl = 'http://localhost:8080/abi';
  const cmdUrl = 'http://localhost:8080/rm';

  const dataQuery = 'verbose=10&monitored&known';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    // EXISTING_CODE
    return ret;
  }

  const signaturesHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('signaturesTag', action.payload);
          break;
        case 'explorer':
          setEditor({ showing: true, name: 'Explore Signature', record: record });
          break;
        case 'add':
          setEditor({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditor({ showing: true, name: 'Edit Signature', record: record });
          break;
        case 'close':
        case 'cancel':
          setEditor({ showing: false, record: {} });
          break;
        case 'okay':
          // let query = 'editCmd=edit';
          // query += record ? 'edit' : 'add';
          // query += '&term=';
          // query += "!" + (record ? record.)
          // query += '&terms=A!0xaaaaeeeeddddccccbbbbaaaa0e92113ea9d19ca3!C!D!E!F!false!false';
          // query += '&verbose=10';
          // query += '&expand';
          // query += record ? (record.is_custom ? '&to_custom' : '') : '';
          // query += '&to_custom=false';
          // setLoading(true);
          // dispatch(action);
          // sendServerCommand(url, query).then(() => {
          //  // we assume the delete worked, so we don't reload the data
          //  setLoading(false);
          // });
          setEditor({ showing: false, record: {} });
          break;
        case 'delete':
          {
            const cmdQuery = 'editCmd=delete&terms=' + action.record_id + addendum(record, action.record_id);
            setLoading(true);
            dispatch(action);
            sendServerCommand(cmdUrl, cmdQuery).then(() => {
              // we assume the delete worked, so we don't reload the data
              setLoading(false);
            });
          }
          break;
        case 'undelete':
          {
            const cmdQuery = 'editCmd=undelete&terms=' + action.record_id + addendum(record, action.record_id);
            setLoading(true);
            dispatch(action);
            sendServerCommand(cmdUrl, cmdQuery).then(() => {
              // we assume the delete worked, so we don't reload the data
              setLoading(false);
            });
          }
          break;
        case 'remove':
          {
            const cmdQuery = 'editCmd=remove&terms=' + action.record_id + addendum(record, action.record_id);
            setLoading(true);
            sendServerCommand(cmdUrl, cmdQuery).then((theData) => {
              // the command worked, but now we need to reload the data
              refreshData(dataUrl, dataQuery, dispatch);
              setLoading(false);
            });
          }
          break;
        case 'externallink':
          navigate('https://etherscan.io/address/' + action.record_id, true);
          break;
        // EXISTING_CODE
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered]
  );

  useEffect(() => {
    refreshData(dataUrl, dataQuery, dispatch);
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind(['plus'], (e) => handleClick(e, signaturesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [signaturesHandler]);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(signatures.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [signatures]);

  useMemo(() => {
    const result = signatures.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [signatures, curTag]);

  // EXISTING_CODE
  // EXISTING_CODE

  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={signaturesHandler}
        loading={loading}
      />
      <DataTable
        name={'signaturesTable'}
        data={filtered}
        columns={signaturesSchema}
        title="Signatures"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={signaturesHandler}
      />
      <Modal showing={editor.showing} handler={signaturesHandler}>
        {/* prettier-ignore */}
        <ObjectTable
            data={editor.record}
            columns={signaturesSchema}
            title={editor.name}
            editable={true}
            showHidden={true}
          />
      </Modal>
    </div>
  );
};

// auto-generate: page-settings
const recordIconList = [
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'footer-CSV',
  'footer-TXT',
  //
];
const defaultSort = ['encoding', 'type', 'name'];
const defaultSearch = ['encoding', 'type', 'name'];
// auto-generate: page-settings

//----------------------------------------------------------------------
function refreshData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    result = theData.data.filter((item) => item.type !== 'constructor');
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const signaturesDefault = [];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
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
