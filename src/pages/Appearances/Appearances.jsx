/*
 * This file was generated with makeClass. Edit only those parts of the code inside
 * of 'EXISTING_CODE' tags.
 */
import React, { Fragment, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import Mousetrap from 'mousetrap';

import GlobalContext, { calcValue } from 'store';
import { useStatus } from 'store/status_store';

import { DataTable, ObjectTable, ChartTable, PageCaddie } from 'components';
import { getServerData, sortArray, handleClick, navigate, replaceRecord, stateFromStorage } from 'components/utils';
import { NameDialog } from 'dialogs';

import './Appearances.css';

// EXISTING_CODE
import { currentPage } from 'components/utils';
import { SidebarTable } from 'components';
import { getIcon } from 'pages/utils';
let g_focusValue = '';
var g_Handler = null;
// EXISTING_CODE

//---------------------------------------------------------------------------
export const Appearances = (props) => {
  const { appearances, dispatch } = useAppearances();
  const mocked = useStatus().state.mocked;
  const statusDispatch = useStatus().dispatch;

  const [filtered, setFiltered] = useState(appearancesDefault);
  const [tagList, setTagList] = useState([]);
  const [searchFields] = useState(defaultSearch);
  const [curTag, setTag] = useState(localStorage.getItem('appearancesTag') || 'All');
  const [editDialog, setEditDialog] = useState({ showing: false, record: {} });
  const [curRecordId, setCurRecordId] = useState('');
  const [debug, setDebug] = useState(false);

  // EXISTING_CODE
  const { params } = currentPage();
  const addresses = params[0];
  const name = params.length > 1 ? params[1].value : '';
  g_focusValue = addresses.value && addresses.value.toLowerCase();
  // EXISTING_CODE

  const dataQuery = 'addrs=' + addresses.value + '&accounting&ether';
  function addendum(record, record_id) {
    let ret = '&verbose=10';
    // EXISTING_CODE
    ret = "";
    // EXISTING_CODE
    return ret;
  }

  const appearancesHandler = useCallback(
    (action) => {
      const record_id = action.record_id;
      setCurRecordId(record_id);
      let record = filtered.filter((record) => {
        return record_id && calcValue(record, { selector: 'id', onDisplay: getFieldValue }) === record_id;
      });
      if (record) record = record[0];
      switch (action.type.toLowerCase()) {
        case 'select-tag':
          if (action.payload === 'Debug') {
            setDebug(!debug);
            setTag('All');
            localStorage.setItem('appearancesTag', 'All');
          } else if (action.payload === 'MockData') {
            statusDispatch({ type: 'mocked', payload: !mocked });
            setTag('All');
            localStorage.setItem('appearancesTag', 'All');
          } else {
            setTag(action.payload);
            localStorage.setItem('appearancesTag', action.payload);
          }
          break;
        case 'add':
          setEditDialog({ showing: true, record: {} });
          break;
        case 'edit':
          if (record) setEditDialog({ showing: true, name: 'Edit Appearance', record: record });
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

        // EXISTING_CODE
        case 'addmonitor':
          // {
          //   const cmdQuery = 'addrs=' + action.record_id + '&verbose=10&dollars';
          //   statusDispatch(LOADING);
          //   sendServerCommand('http://localhost:8080/export/', cmdQuery).then((theData) => {
          //     // the command worked, but now we need to reload the data
          //     statusDispatch(NOT_LOADING);
          //     if (editDialog) {
          //       // only navigate if the user hasn't shut the dialog
          //       navigate('/monitors/explore?addrs=' + action.record_id, false);
          //     }
          //   });
          // }
          // setEditDialog({ showing: true, name: 'Reload', record: record });
          navigate('/monitors/explore?addrs=' + action.record_id + (record ? '&name=' + record.name : ''), false);
          break;
        case 'view':
          navigate('/monitors/explore?addrs=' + action.record_id + (record ? '&name=' + record.name : ''), false);
          break;
        case 'row-changed':
          break;
        case 'internallink':
          if (record)
            navigate('/explorer/transactions?transactions=' + record.hash, true);
          break;
        case 'externallink':
          if (record && (record.from === '0xBlockReward' || record.from === '0xUncleReward'))
            navigate('https://etherscan.io/block/' + record.blockNumber, true);
          else
            navigate('https://etherscan.io/tx/' + action.record_id, true);
          break;
        case 'enter':
          break;
        // EXISTING_CODE
        default:
          break;
      }
    },
    [dispatch, filtered, statusDispatch]
  );

  useEffect(() => {
    const qqq = 'count&addrs=' + addresses.value + '' + (mocked ? '&mockData' : '');
    getServerData(getDataUrl(), qqq).then((theData) => {
      let nRecords = mocked ? 100 : theData && theData.data && theData.data.length > 0 ? theData.data[0].nRecords : 0;
      const max_records = stateFromStorage('perPage', 10) * 2; // start with five pages, double each time
      refreshAppearancesData(dataQuery, dispatch, mocked, 0, max_records, nRecords);
      //statusDispatch(NOT_LOADING);
    });
  }, [dataQuery, dispatch]);

  useEffect(() => {
    Mousetrap.bind('plus', (e) => handleClick(e, appearancesHandler, { type: 'Add' }));
    return () => {
      Mousetrap.unbind('plus');
    };
  }, [appearancesHandler]);

  useMemo(() => {
    // prettier-ignore
    if (appearances && appearances.data) {
      setTagList(getTagList(appearances));
      const result = appearances.data.filter((item) => {
        // EXISTING_CODE
        const isAirdrop = (item['toName'] && item['toName'].name.includes('Airdrop')) || (item['fromName'] && item['fromName'].name.includes('Airdrop'))
        switch (curTag) {
          case 'Hide Airdrops':
            return !isAirdrop
          case 'Show Airdrops':
              return isAirdrop;
          case 'Grants':
            return (
              (item['toName'] && item['toName'].name.includes('Gitcoin')) ||
              (item['fromName'] && item['fromName'].name.includes('Gitcoin'))
            );
          case 'Eth':
            if (!item['statements']) return false;
            const statements = item['statements'][0];
            if (statements.inflow !== '') return true;
            if (statements.intInflow !== '') return true;
            if (statements.suicideInflow !== '') return true;
            if (statements.outflow !== '') return true;
            if (statements.intOutflow !== '') return true;
            if (statements.suicideOutflow !== '') return true;
            if (statements.weiGasCost !== '') return true;
            return false
          case 'Not Eth':
            if (!item['statements']) return false;
            const statements1 = item['statements'][0];
            if (statements1.inflow !== '') return false;
            if (statements1.intInflow !== '') return false;
            if (statements1.suicideInflow !== '') return false;
            if (statements1.outflow !== '') return false;
            if (statements1.intOutflow !== '') return false;
            if (statements1.suicideOutflow !== '') return false;
            if (statements1.weiGasCost !== '') return false;
            return true;
          case 'Tokens':
            if (!item['articulatedTx']) return false;
            if (!item['articulatedTx'].name)  return false
            const art = item['articulatedTx'].name.toLowerCase();
            return art.includes('mint') || art === 'transfer' || art === 'approve' || art === 'transferfrom';
          case 'Reconciled':
            if (!item['statements']) return false;
            if (item.statements.length === 0) return false;
            return (item.statements[0]['reconciled'] && item.statements[0]['reconciliationType'] === '');
          case 'Partial':
            if (!item['statements']) return false;
            if (item.statements.length === 0) return false;
            return (item.statements[0]['reconciled'] && item.statements[0]['reconciliationType'].includes('partial'));
          case 'Unreconciled':
            if (!item['statements']) return false;
            if (item.statements.length === 0) return false;
            return (!item.statements[0]['reconciled']);
          case 'SelfDestructs':
            if (!item['statements']) return false;
            if (item.statements.length === 0) return false;
            return (item.statements[0]['suicideInflow'] > 0 || item.statements[0]['suicideOutflow'] > 0);
          case 'Creations':
            if (!item['receipt']) return false;
            if (!item.receipt['logs']) return false;
            return (item.receipt['contractAddress'] !== '' && item.receipt['contractAddress'] !== '0x0');
          case 'Messages':
            if (!item['compressedTx']) return false;
            return item.compressedTx.substr(0,8).includes('message:');
          case 'Functions':
            if (!item['compressedTx']) return true;
            return !item.compressedTx.substr(0,8).includes('message:');
          case 'Neighbors':
            return false;
          case 'Events':
          case 'Balances':
          case 'All':
          default:
            return true;
        }
        // EXISTING_CODE
        return curTag === 'All' || (item.tags && item.tags.includes(curTag));
      });
      setFiltered(result);
    }
  }, [appearances, curTag, debug, mocked]);

  let custom = null;
  let title = 'Appearances';
  // EXISTING_CODE
  title = name
    ? decodeURIComponent(name.replace(/\+/g, '%20'))
    : addresses.value
    ? addresses.value.substr(0, 10) +
      '...' +
      addresses.value.substr(addresses.value.length - 6, addresses.value.length - 1)
    : 'No Name';
  g_Handler = appearancesHandler;
  // EXISTING_CODE

  const table = getInnerTable(appearances, curTag, filtered, title, searchFields, recordIconList, appearancesHandler);
  return (
    <div>
      {/* prettier-ignore */}
      <PageCaddie
        caddieName="Tags"
        caddieData={tagList}
        current={curTag}
        handler={appearancesHandler}
      />
      {mocked && (
        <span className="warning">
          <b>&nbsp;&nbsp;MOCKED DATA&nbsp;&nbsp;</b>
        </span>
      )}
      {debug && <pre>{JSON.stringify(appearances, null, 2)}</pre>}
      {table}
      {/* prettier-ignore */}
      <NameDialog showing={editDialog.showing} handler={appearancesHandler} object={{ address: curRecordId }} columns={appearancesSchema}/>
      {custom}
    </div>
  );
};

//----------------------------------------------------------------------
const getTagList = (appearances) => {
  // prettier-ignore
  let tagList = ['Eth', 'Not Eth', '|', 'Tokens', 'Grants', 'Hide Airdrops', 'Show Airdrops', '|', 'Reconciled', 'Partial', 'Unreconciled', '|', 'Neighbors', 'Balances', 'Functions', 'Events', 'Messages', 'Creations', 'SelfDestructs'];
  tagList.unshift('|');
  tagList.unshift('All');
  tagList.push('|');
  tagList.push('Debug');
  tagList.push('MockData');
  return tagList;
};

//----------------------------------------------------------------------
const getInnerTable = (appearances, curTag, filtered, title, searchFields, recordIconList, appearancesHandler) => {
  // EXISTING_CODE
  if (!appearances) return <></>;

  if (curTag === 'Neighbors') {
    return <ObjectTable data={appearances.meta} columns={metaSchema} title={'Direct Neighbors of ' + title} />

  } else if (curTag === 'Balances') {
    const test = appearancesSchema;
    return <BalanceView data={filtered} columns={test} title={title}/>

  } else if (curTag === 'Functions') {
    const functionCallData = filtered.map((item) => {
      const parts = item.compressedTx.replace(/\)/, '').split('(');
      return { date: item.date, to: item.to, functionName: <b>{parts[0]}</b>, parameters: parts[1] }
    });
    return <DataTable data={functionCallData} columns={functionCallSchema} title={'Functions Called by ' + title} search={true} searchFields={searchFields} pagination={true} parentHandler={appearancesHandler}/>

  } else if (curTag === 'Messages') {
    const messageData = filtered.map((item) => {
      return { date: item.date, to: item.to, from: item.from, message: <b>{item.compressedTx.replace("message:", '')}</b> }
    });
    return <DataTable data={messageData} columns={messagesSchema} title={'Functions Called by ' + title}/>

  }
  // EXISTING_CODE
  return (
    <SidebarTable
      tableName={'appearancesTable'}
      data={filtered}
      columns={appearancesSchema}
      title={title}
      search={true}
      searchFields={searchFields}
      pagination={true}
      recordIcons={recordIconList}
      parentHandler={appearancesHandler}
    />
  );
};

// EXISTING_CODE
//----------------------------------------------------------------------
const BalanceView = ({data, columns, title}) => {
  return (
    <ChartTable
      columns={columns}
      data={data}
      title=""
      search={false}
      chartName="appearances"
      chartCtx={{ type: 'line', defPair: ['blockNumber', 'statements.endBal'] }}
      pagination={true}
    />
  );
}

//----------------------------------------------------------------------
const functionCallSchema = [
  {selector: 'id',hidden: true},
  {selector: 'date', width: 7},
  {selector: 'to', width: 12},
  {selector: 'functionName', width: 10},
  {selector: 'parameters', width: 40},
];

//----------------------------------------------------------------------
const messagesSchema = [
  {selector: 'id',hidden: true},
  {selector: 'date', width: 7},
  {selector: 'to', width: 14},
  {selector: 'from', width: 14},
  {selector: 'message', width: 40},
];
// EXISTING_CODE

// auto-generate: page-settings
const recordIconList = [
  'ExternalLink',
  'footer-CSV',
  'footer-TXT',
  'footer-Import',
  //
];
const defaultSort = ['blockNumber', 'transactionIndex'];
const defaultSearch = ['blockNumber', 'hash', 'from', 'fromName', 'to', 'toName', 'encoding', 'compressedTx'];
// auto-generate: page-settings

//----------------------------------------------------------------------
const getDataUrl = () => {
  return 'http://localhost:8080/export';
}

//----------------------------------------------------------------------
export function refreshAppearancesData(query, dispatch, mocked, firstRecord, maxRecords, nRecords) {
  getServerData(
    getDataUrl(),
    query + (mocked ? '&mockData' : '') + (!mocked && maxRecords !== -1 ? '&first_record=' + firstRecord + '&max_records=' + maxRecords : '')
  ).then((theData) => {
    let appearances = theData.data;
    // EXISTING_CODE
    if (!mocked) appearances = appearances && appearances.length > 0 ? appearances[0] : appearances;
    let named = appearances;
    if (!mocked && appearances && theData.meta) {
      named = appearances.map((item) => {
        if (theData.meta.namedFromAndTo && theData.meta.namedFromAndTo[item.from])
          item.fromName = theData.meta.namedFromAndTo[item.from];
        else item.fromName = theData.meta.namedFrom && theData.meta.namedFrom[item.from];
        if (theData.meta.namedFromAndTo && theData.meta.namedFromAndTo[item.to])
          item.toName = theData.meta.namedFromAndTo[item.to];
        else item.toName = theData.meta.namedTo && theData.meta.namedTo[item.to];
        return item;
      });
    }
    appearances = named;
    // EXISTING_CODE
    if (appearances) theData.data = sortArray(appearances, defaultSort, ['asc', 'asc', 'asc']);
    dispatch({ type: 'success', payload: theData });
    if (!mocked && maxRecords < nRecords) refreshAppearancesData(query, dispatch, mocked, 0, maxRecords * 2, nRecords);
  });
}

//----------------------------------------------------------------------
export const appearancesDefault = [];

//----------------------------------------------------------------------
export const appearancesReducer = (state, action) => {
  let appearances = state;
  switch (action.type.toLowerCase()) {
    case 'undelete':
    case 'delete':
      {
        const record = appearances.data.filter((r) => {
          const val = calcValue(r, { selector: 'id', onDisplay: getFieldValue });
          return val === action.record_id;
        })[0];
        if (record) {
          record.deleted = !record.deleted;
          appearances.data = replaceRecord(appearances.data, record, action.record_id, calcValue, getFieldValue);
        }
      }
      break;
    case 'success':
      appearances = action.payload;
      break;
    default:
    // do nothing
  }
  return appearances;
};

//----------------------------------------------------------------------
export const useAppearances = () => {
  return useContext(GlobalContext).appearances;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  if (!record) return '';
  // EXISTING_CODE
  switch (fieldName) {
    case 'namedFromAndTo':
    case 'unNamedFromAndTo':
    case 'namedFrom':
    case 'unNamedFrom':
    case 'namedTo':
    case 'unNamedTo':
      return <pre>{JSON.stringify(record[fieldName], null, 2)}</pre>;
    default:
      break;
  }

  if (fieldName && fieldName.includes('statements.')) {
    let fn = fieldName.replace('statements.', '');
    if (fn === 'begBalDiff' && record && record.statements && record.statements[0] && record.statements[0][fn] === 0)
      return '';
    if (fn === 'endBalDiff' && record && record.statements && record.statements[0] && record.statements[0][fn] === 0)
      return '';
    if (fn === 'reconciled' && record && record.statements && record.statements[0])
      return getIcon(
        'reconciled',
        record.statements[0][fn]
          ? record.statements[0]['reconciliationType'] === ''
            ? 'CheckCircle'
            : 'CheckCircleYellow'
          : 'XCircle'
      );
    if (fn === 'totalin' && record && record.statements && record.statements[0])
      return record.statements[0]['inflow'] + record.statements[0]['intInflow'] + record.statements[0]['suicideInflow'];
    if (fn === 'totalout' && record && record.statements && record.statements[0])
      return (
        Number(record.statements[0]['outflow']) + Number(record.statements[0]['intOutflow']) + Number(record.statements[0]['suicideOutflow']) + Number(record.statements[0]['weiGasCost'])
      );
    if (record && record.statements && record.statements[0]) return record.statements[0][fn];
  }

  const internal = record.from !== g_focusValue && record.to !== g_focusValue;
  switch (fieldName) {
    case 'id':
      return record.hash;
    case 'marker':
      return (
        <Fragment>
          {record.blockNumber + '.' + record.transactionIndex}
          {internal ? <div className="internal">{'int'}</div> : ''}
          {record.isError ? <div className="isError">{'error'}</div> : ''}
        </Fragment>
      );
    case 'isError':
      return record.isError ? 'error' : '';
    case 'internal':
      return internal ? 'int' : '';
    case 'from': {
      const val = record.fromName ? record.fromName.name : record.from;
      if (record.from === g_focusValue) return <div className="focusValue">{val}</div>;
      return <div className="nonFocusValue">{val}</div>;
    }
    case 'to': {
      const val = record.toName ? record.toName.name : record.to;
      if (record.to === g_focusValue) return <div className="focusValue">{val}</div>;
      return <div className="nonFocusValue">{val}</div>;
    }
    case 'fromName':
      return record.fromName ? (
        record.from
      ) : (
        <div
          onClick={(e) => handleClick(e, g_Handler, { type: 'Add', record_id: record.from })}
          style={{ color: 'green' }}
        >
          {getIcon(record.from, 'AddName', false, false, 12)}
        </div>
      );
    case 'toName':
      return record.toName ? (
        record.to
      ) : (
        <div
          onClick={(e) => handleClick(e, g_Handler, { type: 'Add', record_id: record.to })}
          style={{ color: 'green' }}
        >
          {getIcon(record.to, 'AddName', false, false, 12)}
        </div>
      );
    case 'creations':
      if (!record['receipt']) return null;
      if (!record.receipt['contractAddress']) return null;
      return record.receipt.contractAddress;
    case 'compressedTx':
      if (!record['compressedTx']) return null;
      if (record['compressedTx'] === '0x ( )') return <div key={'xxx'}>{<i>{'null'}</i>}</div>;
      if (record['compressedTx'].substr(0, 8) === 'message:')
        return (
          <div key={'xxx'}>
            <b>{record['compressedTx'].replace('message:', '')}</b>
          </div>
        );
      let arr = record.compressedTx.replace(')', '').replace('(', ',').split(',');
      return (
        <div>
          {arr.map((item, index) => {
            if (index === 0) {
              return <div key={item}>{<b>{item}</b>}</div>;
            } else {
              let s = item.split(':');
              if (!s) {
                s[0] = s[1] = '';
              } else if (!s[1]) {
                s[1] = '';
              }
              s[1] = s[1].trim();
              const ofInterest = s[1].includes(g_focusValue);
              return (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                    <div key={item + '_a'}>{index + ' ' + (s[0] === ' stub' ? '0x' : s[0] + ':')}</div>
                    <div className={ofInterest ? 'focusValue' : ''} key={item + '_b'}>
                      {s[1] + '-' + JSON.stringify(s[1].length)}
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      );
    default:
      break;
  }
  // EXISTING_CODE
  return record[fieldName];
}

// EXISTING_CODE
const metaSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
  },
  {
    selector: 'unNamedTo',
    onDisplay: getFieldValue,
  },
  {
    selector: 'namedTo',
    onDisplay: getFieldValue,
  },
  {
    selector: 'unNamedFrom',
    onDisplay: getFieldValue,
  },
  {
    selector: 'namedFrom',
    onDisplay: getFieldValue,
  },
  {
    selector: 'unNamedFromAndTo',
    onDisplay: getFieldValue,
  },
  {
    selector: 'namedFromAndTo',
    onDisplay: getFieldValue,
  },
];

/*
import React from 'react';

import { Modal, ObjectTable } from 'components';

export const AddName = ({ showing, handler, object }) => {
  return (
    <Modal showing={showing} handler={handler}>
      {/* prettier-ignore * /}
      <ObjectTable
            data={{...object, tags: 'MyTags'}}
            columns={editNameSchema}
            title="Add Name"
            showHidden={false}
          />
    </Modal>
  );
};

export const EditName = ({ showing, handler, object }) => {
  return (
    <Modal showing={showing} handler={handler}>
      {/* prettier-ignore * /}
      <ObjectTable
            data={object}
            columns={editNameSchema}
            title="Edit Name"
            editable={true}
            showHidden={false}
          />
    </Modal>
  );
};
*/

/*
export const Editable = (props) => {
  const [isActive, setActive] = useState(props.isActive);
  const [inputValue, setInput] = useState(props.fieldValue);
  const [errorStr, setError] = useState('');

  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);

  const enter = useKeypress('Enter');
  const esc = useKeypress('Escape');

  const validateInput = useCallback(() => {
    if (!props.onValidate) return true;
    const res = props.onValidate(props.fieldName, cleanHTML(inputValue));
    if (res === '') return true;
    setError(res);
    return false;
  }, [inputValue, props]);

  const closeEditor = useCallback(() => {
    if (isActive) {
      setActive(false);
      if (validateInput() && props.onAccept) props.onAccept(props.record_id, props.fieldName, cleanHTML(inputValue));
    }
  }, [isActive, inputValue, props, validateInput]);

  useEffect(() => {
    if (isActive) {
      inputRef.current.focus();
      setError('');
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive) {
      if (enter) {
        closeEditor();
      } else if (esc) {
        setActive(false);
        setInput(props.fieldValue);
      }
    }
  }, [enter, esc, closeEditor, isActive, props.fieldValue]); // watch the Enter and Escape key presses

  let visibleText = errorStr;
  if (visibleText === '') visibleText = props.fieldValue;
  if (visibleText === '') visibleText = inputValue;
  if (visibleText === '') visibleText = props.placeholder !== '' ? '<' + props.placeholder + '>' : '';
  if (visibleText === '') visibleText = '<' + props.fieldName + '>';

  let textCn = props.className + ' editable_text ' + (!isActive ? '' : 'hidden');
  if (errorStr !== '') textCn = props.className + ' warning';
  const inputCn = props.className + ' editable_input ' + (isActive ? '' : 'hidden');

  if (!props.editable) return <Fragment>{props.fieldValue}</Fragment>;
  return (
    <div ref={wrapperRef}>
      <div ref={textRef} onClick={() => setActive(true)} className={textCn}>
        {visibleText}
      </div>
      <input
        ref={inputRef}
        value={inputValue}
        onChange={(e) => {
          setInput(e.target.value);
          if (props.onChange) props.onChange(props.record_id, props.fieldName, cleanHTML(e.target.value));
        }}
        onBlur={(e) => {
          closeEditor();
        }}
        placeholder={props.placeholder}
        className={inputCn}
      />
    </div>
  );
};

//------------------------------------------------------------------
function cleanHTML(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}
*/
// EXISTING_CODE

//----------------------------------------------------------------------------
// auto-generate: schema
export const appearancesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Date/Block',
    selector: 'date',
    type: 'string',
    width: 2,
    chart: 'range',
    underField: 'marker',
    onDisplay: getFieldValue,
  },
  {
    name: 'Marker',
    selector: 'marker',
    type: 'string',
    hidden: true,
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    width: 5,
    chart: 'range',
    searchable: true,
    underField: 'fromName',
    onDisplay: getFieldValue,
  },
  {
    name: 'fromName',
    selector: 'fromName',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    width: 5,
    chart: 'range',
    searchable: true,
    underField: 'toName',
    onDisplay: getFieldValue,
  },
  {
    name: 'toName',
    selector: 'toName',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'wei',
    hidden: true,
    chart: 'domain',
  },
  {
    name: 'Ether',
    selector: 'ether',
    type: 'blknum',
    hidden: true,
    width: 2,
    chart: 'domain',
  },
  {
    name: 'Sep1',
    selector: 'separator1',
    type: 'separator',
    hidden: true,
    detail: true,
  },
  {
    name: 'Asset',
    selector: 'statements.asset',
    type: 'string',
    width: 1,
    align: 'center',
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Beg',
    selector: 'statements.begBal',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Beg Diff',
    selector: 'statements.begBalDiff',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Total In',
    selector: 'statements.totalin',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Income',
    selector: 'statements.inflow',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'I-Income',
    selector: 'statements.intInflow',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'S-Income',
    selector: 'statements.suicideInflow',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Total Out',
    selector: 'statements.totalout',
    type: 'value',
    width: 2,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Spending',
    selector: 'statements.outflow',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'I-Spending',
    selector: 'statements.intOutflow',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'S-Spending',
    selector: 'statements.suicideOutflow',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Gas Cost',
    selector: 'statements.weiGasCost',
    type: 'value',
    hidden: true,
    width: 2,
    chart: 'domain',
    onDisplay: getFieldValue,
  },
  {
    name: 'Ending',
    selector: 'statements.endBal',
    type: 'value',
    width: 2,
    chart: 'domain',
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Calc',
    selector: 'statements.endBalCalc',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'End Diff',
    selector: 'statements.endBalDiff',
    type: 'value',
    hidden: true,
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Type',
    selector: 'statements.reconciliationType',
    type: 'string',
    width: 2,
    onDisplay: getFieldValue,
  },
  {
    name: 'Okay',
    selector: 'statements.reconciled',
    type: 'string',
    align: 'center',
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Gas',
    selector: 'gas',
    type: 'gas',
    hidden: true,
    width: 2,
  },
  {
    name: 'Gas Used',
    selector: 'gasUsed',
    type: 'gas',
    hidden: true,
    width: 2,
    chart: 'domain',
  },
  {
    name: 'Gas Price',
    selector: 'gasPrice',
    type: 'wei',
    hidden: true,
    width: 2,
  },
  {
    name: 'Gas Cost (Eth)',
    selector: 'etherGasCost',
    type: 'ether',
    hidden: true,
    width: 2,
  },
  {
    name: 'Sep2',
    selector: 'separator2',
    type: 'separator',
    hidden: true,
    detail: true,
  },
  {
    name: 'Compressed Tx',
    selector: 'compressedTx',
    type: 'string',
    hidden: true,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Compressed Logs',
    selector: 'compressedLog',
    type: 'string',
    hidden: true,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Creations',
    selector: 'creations',
    type: 'string',
    hidden: true,
    detail: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Sep3',
    selector: 'separator3',
    type: 'separator',
    hidden: true,
  },
  {
    name: 'Age',
    selector: 'age',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'hash',
    hidden: true,
  },
  {
    name: 'Receipt',
    selector: 'receipt',
    type: 'CReceipt',
    hidden: true,
  },
  {
    name: 'Articulated Tx',
    selector: 'articulatedTx',
    type: 'CFunction',
    hidden: true,
    searchable: true,
  },
  {
    name: 'Traces',
    selector: 'traces',
    type: 'CTraceArray',
    hidden: true,
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
    hidden: true,
  },
  {
    name: 'Blk',
    selector: 'blockNumber',
    type: 'blknum',
    hidden: true,
    width: 1,
  },
  {
    name: 'Tx',
    selector: 'transactionIndex',
    type: 'string',
    hidden: true,
    width: 1,
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    hidden: true,
    chart: 'range',
  },
  {
    name: 'Hash',
    selector: 'hash',
    type: 'hash',
    hidden: true,
    width: 5,
    searchable: true,
  },
  {
    name: 'Nonce',
    selector: 'nonce',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Input',
    selector: 'input',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Finalized',
    selector: 'finalized',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'Function',
    selector: 'function',
    type: 'string',
    hidden: true,
    width: 5,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Events',
    selector: 'events',
    type: 'string',
    hidden: true,
    width: 3,
  },
  {
    name: 'Price',
    selector: 'price',
    type: 'double',
    hidden: true,
    width: 3,
  },
  {
    name: 'Date Short',
    selector: 'datesh',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Time',
    selector: 'time',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Error',
    selector: 'isError',
    type: 'string',
    hidden: true,
    width: 1,
    isPill: true,
  },
  {
    name: 'Internal',
    selector: 'internal',
    type: 'string',
    hidden: true,
    width: 2,
    align: 'center',
    onDisplay: getFieldValue,
  },
  {
    name: 'Icons',
    selector: 'icons',
    type: 'icons',
    hidden: true,
  },
];
// auto-generate: schema
