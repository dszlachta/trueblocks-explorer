import React, { Fragment } from 'react';

import { ObjectTable } from 'components';
import { systemCheck } from 'components/utils';
import { useStatusData } from 'store';

//------------------------------------------------------------------------
export const SettingsSystems = () => {
  const status = useStatusData();
  const working = systemCheck(status, 'system');
  const msg = working
    ? 'All subsystems go...'
    : 'One or more of the TrueBlocks components is not working properly. You will need to fix it before proceeding.';
  const cn = working ? 'okay' : 'warning';
  return (
    <Fragment>
      <Fragment>
        <div>
          <br />
        </div>
        <div className={cn}>{msg}</div>
        <div>
          <br />
        </div>
      </Fragment>
      <SettingsRow which="api" status={status} />
      <SettingsRow which="node" status={status} />
      <SettingsRow which="scraper" status={status} />
      <SettingsRow which="sharing" status={status} />
      <div style={{ fontStyle: 'italic' }}>Last updated: {status.date}</div>
    </Fragment>
  );
};

const SettingsRow = ({ which, status }) => {
  const names = {
    api: 'TrueBlocks API',
    node: 'Ethereum Node',
    scraper: 'TrueBlocks Blaze Scraper',
    sharing: 'IPFS Node',
    help: 'TrueBlocks Help API',
  };
  const descriptions = {
    api: 'TrueBlocks API',
    node: 'Ethereum Node',
    scraper: 'TrueBlocks Blaze Scraper',
    sharing: 'IPFS Node',
    help: 'TrueBlocks Help API',
  };

  const isOptional = which === 'scraper' || which === 'sharing';
  const working = systemCheck(status, which);
  let cn = working ? 'okay' : 'warning';
  if (isOptional && !working) cn = 'caution';
  const statusStr = (
    <span className={cn} style={{ height: '100%', padding: '2px' }}>
      {working ? 'Running...' : isOptional ? 'Paused...' : 'Not Running...'}
    </span>
  );

  const version =
    which === 'api'
      ? status.trueblocks_version.substr(0, 40) + '...'
      : which === 'node'
      ? status.client_version.substr(0, 40) + '...'
      : '';

  const data = {
    status: statusStr,
    which: which,
    descr: descriptions[which],
    apiProvider: which === 'api' ? status.api_provider : '',
    host: which === 'api' ? status.host : '',
    rpcProvider: which === 'node' ? status.rpc_provider : '',
    traceProvider: which === 'node' ? status.rpc_provider : '',
    balanceProvider: which === 'node' ? status.balance_provider : '',
    cachePath: which === 'scraper' ? status.cache_path : '',
    indexPath: which === 'scraper' ? status.index_path : '',
    version: version,
  };

  let manageView = <div>X</div>;
  const manageHandler = (action) => {
    console.log(action);
    manageView = <div>{JSON.stringify(action, null, 2)}</div>;
  };

  return (
    <Fragment>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
      >
        <h4 className="status-header">{names[which].toUpperCase()}</h4>
      </div>
      {/**/}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 30fr 35fr',
        }}
      >
        <div></div>
        <ObjectTable
          data={data}
          columns={systemsSchema}
          buttonList={['config ' + which + ' >']}
          handler={manageHandler}
        />
        <div></div>
      </div>
      {/**/}
      <BlankLine />
    </Fragment>
  );
};

const BlankLine = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
      }}
    >
      <br />
    </div>
  );
};
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
    onDisplay: getFieldValue,
  },
  {
    name: 'Status',
    selector: 'status',
    type: 'string',
  },
  {
    name: 'Subsystem',
    selector: 'which',
    type: 'string',
  },
  {
    name: 'Subsystem Name',
    selector: 'descr',
    type: 'string',
  },
  {
    name: 'API Provider',
    selector: 'apiProvider',
    type: 'string',
    hidden: true,
    editable: true,
  },
  {
    name: 'Host',
    selector: 'host',
    type: 'string',
    hidden: true,
  },
  {
    name: 'RPC Provider',
    selector: 'rpcProvider',
    type: 'string',
    hidden: true,
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
