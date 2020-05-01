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
import { MonitorsView } from './MonitorsView';
import { useStatusData } from 'store';
import { currentPage } from 'components/utils';
// EXISTING_CODE

import './Monitors.css';

//---------------------------------------------------------------------------
export const Monitors = () => {
  const { monitors, dispatch } = useMonitors();

  const [filtered, setFiltered] = useState(monitorsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('monitorsTag') || 'All');
  const [editor, setEditor] = useState({ showing: false, record: {} });
  const [loading, setLoading] = useState(false);

  const dataUrl = 'http://localhost:8080/status';
  const cmdUrl = 'http://localhost:8080/rm';

  const dataQuery = 'modes=monitors&details&verbose=10';
  //function addendum(record) {
  //  return '&verbose=10&expand' + (record ? (record.is_custom ? '&to_custom' : '') : '');
  //}

  const monitorsHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('monitorsTag', action.payload);
          break;
        case 'explorer':
          setEditor({ showing: true, name: 'Explore Monitor', record: record });
          break;
        case 'add':
          setEditor({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditor({ showing: true, name: 'Edit Monitor', record: record });
          break;
        case 'close':
        case 'cancel':
          setEditor({ showing: false, record: {} });
          break;
        case 'okay':
          // let query = 'editcmd=edit';
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
            // const cmdQuery = 'editcmd=delete&terms=' + action.record_id + addendum(record);
            const cmdQuery = 'verbose=10&address=' + action.record_id;
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
            // const cmdQuery = 'editcmd=undelete&terms=' + action.record_id + addendum(record);
            const cmdQuery = 'verbose=10&address=' + action.record_id;
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
            // const cmdQuery = 'editcmd=remove&terms=' + action.record_id + addendum(record);
            const cmdQuery = 'verbose=10&address=' + action.record_id + '&yes';
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
    Mousetrap.bind(['plus'], (e) => handleClick(e, monitorsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind(['plus']);
    };
  }, [monitorsHandler]);

  useMemo(() => {
    // prettier-ignore
    let tagList = [...new Set(monitors.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
    tagList = sortStrings(tagList, true);
    tagList.unshift('All');
    setTagList(tagList);
  }, [monitors]);

  useMemo(() => {
    const result = monitors.filter((item) => {
      return curTag === 'All' || item.tags.includes(curTag);
    });
    setFiltered(result);
  }, [monitors, curTag]);

  // EXISTING_CODE
  const subpage = currentPage().subpage;
  switch (subpage) {
    case 'view':
      return <MonitorsView />;
    default:
      break;
  }
  // EXISTING_CODE

  return (
    <div>
      <PageCaddie caddieName="Tags" caddieData={tagList} current={curTag} handler={monitorsHandler} loading={loading} />
      <DataTable
        name={'monitorsTable'}
        data={filtered}
        columns={monitorsSchema}
        title="Monitors"
        search={true}
        searchFields={searchFields}
        pagination={true}
        recordIcons={recordIconList}
        buttonHandler={monitorsHandler}
      />
      <Modal showing={editor.showing} handler={monitorsHandler}>
        {/* prettier-ignore */}
        <ObjectTable
            data={editor.record}
            columns={monitorsSchema}
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
  'ExternalLink',
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'Explorer/None',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['tags', 'address'];
const defaultSearch = ['tags', 'address'];
// auto-generate: page-settings

//----------------------------------------------------------------------
function refreshData(url, query, dispatch) {
  getServerData(url, query).then((theData) => {
    let result = theData.data;
    // EXISTING_CODE
    result = theData.data[0].caches[0].items;
    // EXISTING_CODE
    const sorted = sortArray(result, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: sorted });
  });
}

//----------------------------------------------------------------------
export const monitorsDefault = [];

//----------------------------------------------------------------------
export const monitorsReducer = (state, action) => {
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
export const useMonitors = () => {
  return useContext(GlobalContext).monitors;
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
/*
    case 'update':
      record[action.fieldName] = action.value;
      console.log('record: ', record);
      ret = replaceRecord(ret, record, action.id);
      console.log('ret: ', ret.find((p) => p.id === action.id));
*/
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const monitorsSchema = [
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
    hidden: true,
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
    searchable: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    hidden: true,
    width: 2,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    hidden: true,
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
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
  },
  {
    name: 'File Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
