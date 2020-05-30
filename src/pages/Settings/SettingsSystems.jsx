import React, { Fragment, useState, useEffect } from 'react';

import { ObjectTable } from 'components';
import { systemCheck, handleClick } from 'components/utils';
import { useStatusData } from 'store';

//------------------------------------------------------------------------
export const SettingsSystems = () => {
  const status = useStatusData();
  const [curSubsystem, setManager] = useState('');

  const manageHandler = (action) => {
    switch (action.type) {
      case 'config':
        const newSystem = action.payload;
        if (curSubsystem === newSystem) setManager('');
        else setManager(newSystem);
        break;
      default:
        break;
    }
  };

  const working = systemCheck(status, 'system');
  let msg = working ? 'All subsystems go...' : 'One or more of the TrueBlocks components is not working properly.';
  if (!working && status.is_testing) {
    msg += ' It appears that the API is in test mode. Wait until the test is finished and then reload.';
  } else {
    msg += '  You will need to fix it before proceeding.';
  }

  // const styleAll = { backgroundColor: 'red', display: 'grid', gridTemplateColumns: '4fr 4fr 1fr', padding: '12px' };
  const styleAll = { display: 'grid', gridTemplateColumns: '8fr 8fr 1fr', padding: '12px' };
  return (
    <Fragment>
      <div className={working ? 'okay' : 'warning'}>{msg}</div>
      <div style={styleAll}>
        <LeftPanel status={status} handler={manageHandler} curSubsystem={curSubsystem} />
        <RightPanel status={status} handler={manageHandler} subsystem={curSubsystem} />
      </div>
    </Fragment>
  );
};

//------------------------------------------------------------------------
const LeftPanel = ({ status, handler, curSubsystem }) => {
  //  const styleLeft = { display: 'grid', gridAutoFlow: 'row', padding: '12px', backgroundColor: 'palegreen' };
  const styleLeft = { display: 'grid', gridAutoFlow: 'row', padding: '2px' };
  const subSystems = ['api', 'node', 'scraper', 'sharing', 'help'];
  return (
    <div style={styleLeft}>
      {subSystems.map((subsystem) => {
        const filtered = getSubsystemData(status, subsystem);
        return (
          <div style={{ display: 'grid', gridTemplateColumns: '6fr 1fr' }}>
            <div>
              <h4>{names[subsystem]}</h4>
              <ObjectTable data={filtered} columns={systemsSchema} handler={handler} />
              <br />
            </div>
            <div>
              <h4>
                <br />
              </h4>
              <button
                style={{ height: '2em' }}
                onClick={(e) => handleClick(e, handler, { type: 'config', payload: subsystem })}
              >
                {curSubsystem === subsystem ? 'close' : 'configure ' + subsystem}
              </button>
            </div>
          </div>
        );
      })}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

//------------------------------------------------------------------------
const RightPanel = ({ status, handler, subsystem }) => {
  if (subsystem === '') return null;
  const styleRight = { padding: '2px' };
  return (
    <div style={styleRight}>
      <div>
        <h4>Editing {subsystem} Configuration</h4>
        <div>
          <ObjectTable
            data={getSubsystemData(status, subsystem)}
            columns={systemsSchema}
            showHidden={true}
            handler={handler}
          />
        </div>
        <br />
      </div>
      <DisplayLog subsystem={subsystem} />
    </div>
  );
};

//------------------------------------------------------------------------
function getLogText() {
  const str =
    "\n----------------------------------------\n1587604384 ~ <INFO>  : API calling 'chifra status '\n1587604384 ~ <INFO>  : Exiting route 'status' with OK\n----------------------------------------\n";
  return str + str;
}
const DisplayLog = ({ subsystem }) => {
  const styleDisp = { backgroundColor: 'black', color: 'aqua', margin: '2px', padding: '3px' };
  const text = getLogText();
  return (
    <Fragment>
      <h4>{'Log for ' + subsystem + ' subsystem'}</h4>
      <div style={{ border: '1px solid black' }}>
        <div style={styleDisp}>
          <pre>{text}</pre>
        </div>
      </div>
    </Fragment>
  );
};

//------------------------------------------------------------------------
function getSubsystemData(status, subsystem) {
  const isOptional = subsystem === 'scraper' || subsystem === 'sharing' || subsystem === 'help';
  const working = systemCheck(status, subsystem);
  let cn = working ? 'okay' : 'warning';
  if (isOptional && !working) cn = 'caution';
  const statusStr = (
    <span className={cn} style={{ height: '100%', padding: '2px' }}>
      {working ? 'Running...' : isOptional ? 'Paused...' : status.is_testing ? 'In Test Mode...' : 'Not Running...'}
    </span>
  );

  const version =
    subsystem === 'api'
      ? status.trueblocks_version.substr(0, 40) + '...'
      : subsystem === 'node'
      ? status.client_version.substr(0, 40) + '...'
      : '';

  return {
    status: statusStr,
    which: subsystem,
    name: names[subsystem],
    descr: descriptions[subsystem],
    apiProvider: subsystem === 'api' ? status.api_provider : '',
    host: subsystem === 'api' ? status.host : '',
    environ: process.env.REACT_APP_API_URL,
    rpcProvider: subsystem === 'node' ? status.rpc_provider : '',
    traceProvider: subsystem === 'node' ? status.rpc_provider : '',
    balanceProvider: subsystem === 'node' ? status.balance_provider : '',
    cachePath: subsystem === 'scraper' ? status.cache_path : '',
    indexPath: subsystem === 'scraper' ? status.index_path : '',
    version: version,
  };
}

//------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.which;
    default:
      break;
  }
}

//------------------------------------------------------------------------
// auto-generate: schema
export const systemsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Status',
    selector: 'status',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Subsystem',
    selector: 'which',
    type: 'string',
  },
  {
    name: 'Description',
    selector: 'descr',
    type: 'string',
    hidden: true,
    align: 'wordwrap',
    searchable: true,
  },
  {
    name: 'API Provider',
    selector: 'apiProvider',
    type: 'string',
    editable: true,
  },
  {
    name: 'Host',
    selector: 'host',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Host Env',
    selector: 'environ',
    type: 'string',
  },
  {
    name: 'RPC Provider',
    selector: 'rpcProvider',
    type: 'string',
    editable: true,
  },
  {
    name: 'Trace Provider',
    selector: 'traceProvider',
    type: 'string',
    hidden: true,
    editable: true,
  },
  {
    name: 'Balance Provider',
    selector: 'balanceProvider',
    type: 'string',
    hidden: true,
    editable: true,
  },
  {
    name: 'Cache Path',
    selector: 'cachePath',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Index Path',
    selector: 'indexPath',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Version',
    selector: 'version',
    type: 'string',
    hidden: true,
  },
];
// auto-generate: schema

//------------------------------------------------------------------------
const names = {
  api: 'TrueBlocks API',
  node: 'Ethereum Node',
  scraper: 'Blaze Scraper',
  sharing: 'IPFS Node',
  help: 'Help API',
};

//------------------------------------------------------------------------
const descriptions = {
  api:
    'This API, which runs locally to your machine, provides data extracted from both the Ethereum node and the TrueBlocks back end.',
  node:
    'This subsystem monitors the state of your connected Ethereum node configuration of which is handled outside of TrueBlocks.',
  scraper:
    'The TrueBlocks scraper reads the blockchain extracting just enough data to enable this application. Unlike old-fashioned web 2.0 data extraction, only a minimal amount of data is extracted so that TrueBlocks continues to work on commercial-grade hardware.',
  sharing:
    'TrueBlocks allows you to seemlessly share certain information with other users on a fully p2p basis. You do not need to share anything, but you are able to share anything you want.',
  help:
    'The TrueBlocks help system runs alongside this application providing both detailed and context sensitive help.',
};
