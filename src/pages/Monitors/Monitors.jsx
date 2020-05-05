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

import { useStatus, LOADING, NOT_LOADING, useMonitorMap } from 'store/status_store';

import './Monitors.css';

// EXISTING_CODE
import { Appearances } from '../Appearances/Appearances';
import { useStatusData } from 'store';
import { currentPage } from 'components/utils';
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Monitors = () => {
  const { monitors, dispatch } = useMonitors();
  const loading = useStatus().state.loading;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(monitorsDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('monitorsTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });

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
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'set-tags':
          setTag(action.payload);
          localStorage.setItem('monitorsTag', action.payload);
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
        case 'view':
          navigate('/monitors/explore/' + action.record_id, false);
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered]
  );

  useEffect(() => {
    refreshMonitorsData(dataUrl, dataQuery, dispatch);
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

  let custom = null;
  // EXISTING_CODE
  const { subpage, params } = currentPage();
  switch (subpage) {
    case 'explore':
      return <Appearances addresses={params[0]} />;
    default:
      break;
  }
  // EXISTING_CODE

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
      <Modal showing={editDialog.showing} handler={monitorsHandler}>
        {/* prettier-ignore */}
        <ObjectTable
            data={editDialog.record}
            columns={monitorsSchema}
            title={editDialog.name}
            editable={true}
            showHidden={true}
          />
      </Modal>
      {custom}
    </div>
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
const defaultSearch = ['tags', 'address'];
// auto-generate: page-settings

//----------------------------------------------------------------------
export function refreshMonitorsData(url, query, dispatch) {
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
  return record[fieldName];
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
