/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext from 'store';

import { DataTable, ObjectTable, ButtonCaddie, PageCaddie } from 'components';
import { getServerData, sendServerCommand, sortArray, sortStrings, handleClick } from 'components/utils';
import { navigate, notEmpty, replaceRecord, stateFromStorage } from 'components/utils';
import { calcValue } from 'store';

import { useStatus, LOADING, NOT_LOADING, useMonitorMap } from 'store/status_store';
import { NameDialog } from 'dialogs/NameDialog/NameDialog';

import './Monitors.css';

// EXISTING_CODE
import { Appearances } from '../Appearances/Appearances';
import { useStatusData } from 'store';
import { currentPage } from 'components/utils';
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Monitors = (props) => {
  const { monitors, dispatch } = useMonitors();
  const loading = useStatus().state.loading;
  const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(monitorsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('monitorsTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');
  const [debug, setDebug] = useState(false);

  // EXISTING_CODE
  // EXISTING_CODE

  const dataUrl = 'http://localhost:8080/status';
  const cmdUrl = 'http://localhost:8080/rm';

  const dataQuery = 'modes=monitors&details&verbose=10';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    ret += '&address=' + record_id;
    // EXISTING_CODE
    return ret;
  }

  const monitorsHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      setCurRecordId(record_id);
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          let tag = action.payload;
          if (action.payload === 'Debug') {
            setDebug(!debug);
            tag = 'All';
          } else if (action.payload === 'MockData') {
            statusDispatch({ type: 'mocked', payload: !mocked });
            tag = 'All';
          }
          setTag(tag);
          localStorage.setItem('monitorsTag', tag);
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Monitor', record: record });
          break;
        case 'close':
        case 'cancel':
          setEditDialog({ showing: false, record: {} });
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
          // statusDispatch(LOADING);
          // dispatch(action);
          // sendServerCommand(url, query).then(() => {
          //  // we assume the delete worked, so we don't reload the data
          //  statusDispatch(NOT_LOADING);
          // });
          setEditDialog({ showing: false, record: {} });
          break;
        case 'delete':
          {
            const cmdQuery = 'editCmd=delete&terms=' + action.record_id + addendum(record, action.record_id);
            statusDispatch(LOADING);
            dispatch(action);
            sendServerCommand(cmdUrl, cmdQuery).then(() => {
              // we assume the delete worked, so we don't reload the data
              statusDispatch(NOT_LOADING);
            });
          }
          break;
        case 'undelete':
          {
            const cmdQuery = 'editCmd=undelete&terms=' + action.record_id + addendum(record, action.record_id);
            statusDispatch(LOADING);
            dispatch(action);
            sendServerCommand(cmdUrl, cmdQuery).then(() => {
              // we assume the delete worked, so we don't reload the data
              statusDispatch(NOT_LOADING);
            });
          }
          break;
        case 'remove':
          {
            const cmdQuery = 'editCmd=remove&terms=' + action.record_id + addendum(record, action.record_id);
            statusDispatch(LOADING);
            sendServerCommand(cmdUrl, cmdQuery).then((theData) => {
              // the command worked, but now we need to reload the data
              refreshMonitorsData(dataUrl, dataQuery, dispatch);
              statusDispatch(NOT_LOADING);
            });
          }
          break;

        // EXISTING_CODE
        case 'externallink':
          navigate('https://etherscan.io/address/' + action.record_id, true);
          break;
        case 'row_doubleclick':
        case 'view':
          navigate('/monitors/explore?addrs=' + action.record_id + (record ? '&name=' + record.name : ''), false);
          //          navigate('/monitors/explore?addrs=' + action.record_id, false);
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered, statusDispatch]
  );

  useEffect(() => {
    statusDispatch(LOADING);
    refreshMonitorsData(dataUrl, dataQuery, dispatch, mocked);
    statusDispatch(NOT_LOADING);
  }, [dataQuery, dispatch, statusDispatch, mocked]);

  useEffect(() => {
    Mousetrap.bind('plus', (e) => handleClick(e, monitorsHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind('plus');
    };
  }, [monitorsHandler]);

  useMemo(() => {
    // prettier-ignore
    if (monitors && monitors.data) {
      setTagList(getTagList(monitors));
      const result = monitors.data.filter((item) => {
        // EXISTING_CODE
        // EXISTING_CODE
        return curTag === 'All' || (item.tags && item.tags.includes(curTag));
      });
      setFiltered(result);
    }
  }, [monitors, curTag, debug, mocked]);

  let custom = null;
  let title = 'Monitors';
  // EXISTING_CODE
  const { subpage, params } = currentPage();
  switch (subpage) {
    case 'explore':
      return <Appearances addresses={params[0]} name={params.length > 1 ? params[1].value : ''} />;
    default:
      break;
  }
  // EXISTING_CODE

  const table = getInnerTable(monitors, curTag, filtered, title, searchFields, recordIconList, monitorsHandler);
  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={monitorsHandler}
        loading={loading}
      />
      {mocked && <span className="warning"><b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b></span>}
      {debug && <pre>{JSON.stringify(monitors, null, 2)}</pre>}
      {table}
      {/* prettier-ignore */}
      <NameDialog showing={editDialog.showing} handler={monitorsHandler} object={{ address: curRecordId }} />
      {custom}
    </div>
  );
};

//----------------------------------------------------------------------
const getTagList = (monitors) => {
  // prettier-ignore
  let tagList = sortStrings([...new Set(monitors.data.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))], true);
  tagList.unshift('|');
  tagList.unshift('All');
  tagList.push('|');
  tagList.push('Debug');
  tagList.push('MockData');
  return tagList;
};

//----------------------------------------------------------------------
const getInnerTable = (monitors, curTag, filtered, title, searchFields, recordIconList, monitorsHandler) => {
  // EXISTING_CODE
  // EXISTING_CODE
  return (
    <DataTable
      tableName={'monitorsTable'}
      data={filtered}
      columns={monitorsSchema}
      title={title}
      search={true}
      searchFields={searchFields}
      pagination={true}
      recordIcons={recordIconList}
      parentHandler={monitorsHandler}
    />
  );
};

// auto-generate: page-settings
const recordIconList = [
  'ExternalLink',
  'header-Add',
  'Delete/Undelete',
  'Edit/Remove',
  'View/None',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['tags', 'address'];
const defaultSearch = ['tags', 'address', 'name'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshMonitorsData(url, query, dispatch, mocked) {
  getServerData(url, query + (mocked ? '&mockData' : '')).then((theData) => {
    let monitors = theData.data;
    // EXISTING_CODE
    if (!mocked) monitors = theData.data[0].caches[0].items;
    // EXISTING_CODE
    if (monitors) theData.data = sortArray(monitors, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
  });
}

//----------------------------------------------------------------------
export const monitorsDefault = [];

//----------------------------------------------------------------------
export const monitorsReducer = (state, action) => {
  let monitors = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = monitors.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          monitors.data = replaceRecord(monitors.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      monitors = action.payload;
      break;
    default:
    // do nothing
  }
  return monitors;
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
  return record[fieldName];
}

// EXISTING_CODE
/*
    case 'update':
      record[action.fieldName] = action.value;
      // console.log('record: ', record);
      ret = replaceRecord(ret, record, action.id);
      // console.log('ret: ', ret.find((p) => p.id === action.id));
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
    width: 7,
    editable: true,
    searchable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    hidden: true,
    width: 4,
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
    width: 3,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    hidden: true,
    width: 8,
    editable: true,
    searchable: true,
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
    hidden: true,
    width: 2,
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
    hidden: true,
    width: 2,
  },
  {
    name: 'Count',
    selector: 'nAppearances',
    type: 'blknum',
    width: 2,
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
    hidden: true,
    width: 2,
  },
  {
    name: 'First Block',
    selector: 'firstAppearance',
    type: 'blknum',
    width: 2,
  },
  {
    name: 'Last Block',
    selector: 'latestAppearance',
    type: 'blknum',
    width: 2,
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
    width: 2,
  },
  {
    name: 'File Size',
    selector: 'sizeInBytes',
    type: 'filesize',
    width: 2,
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
    hidden: true,
    width: 2,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
  },
];
// auto-generate: schema
