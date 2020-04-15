import React, { Fragment } from 'react';

import { ObjectTable } from 'components';
import { systemCheck } from 'components/utils';
import { useStatusData } from 'store';

//------------------------------------------------------------------------
export const SettingsStatus = () => {
  const status = useStatusData();
  const working = systemCheck(status, 'system');
  const msg = working
    ? 'All systems GO'
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
  const schema = [
    {
      name: 'Status',
      selector: 'status',
    },
    {
      name: 'Subsystem',
      selector: 'which',
    },
    {
      name: 'Description',
      selector: 'descr',
    },
  ];

  const isOptional = which === 'scraper' || which === 'sharing';
  const working = systemCheck(status, which);
  let cn = working ? 'okay' : 'warning';
  if (isOptional && !working) cn = 'caution';
  const statusStr = (
    <span className={cn} style={{ height: '100%', padding: '2px' }}>
      {working ? 'Working' : isOptional ? 'Paused' : 'Not Working'}
    </span>
  );
  return (
    <Fragment>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '10fr 10fr',
        }}
      >
        <h4 className="status-header">{names[which].toUpperCase()}</h4>
        <div></div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 32fr 44fr',
        }}
      >
        <div></div>
        <ObjectTable
          data={{ status: statusStr, which: which, descr: descriptions[which] }}
          columns={schema}
          compact={true}
        />
        <div></div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
        }}
      >
        <div>
          <br />
        </div>
      </div>
    </Fragment>
  );
};
