import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';

import { formatNumber, dataFetcher } from 'components/utils';
import { Panel } from 'components/';
import { useStatus, useStatusMeta, useStatusData, statusDefault } from 'store';
import { usePanels } from 'store';
import GridIcon from 'assets/icons/gridicon';
import './StatusPanel.css';

//----------------------------------------------------------------------
export const StatusPanel = () => {
  const dispatch = useStatus().dispatch;
  const { data, error } = useSWR('http://localhost:8080/status', dataFetcher);

  let status = '';
  useEffect(() => {
    if (error) {
      status = statusDefault;
    } else {
      if (!data) status = 'loading...';
      else {
        delete data['types'];
        status = data;
        dispatch({ type: 'success', payload: status });
      }
    }
  }, [data]);

  const expanded = usePanels().state.status;
  return (
    <Panel title="Status" options={{ type: 'status', expanded: expanded }}>
      {expanded ? (
        <>
          <StatusTable status={status} />
          <StatusError error={error} />
        </> //
      ) : (
        <></> //
      )}
    </Panel>
  );
};

const StatusError = ({ error }) => {
  return error ? <div className="warning">Error: Is the API running?</div> : <></>; //
};

const StatusTable = () => {
  const status = useStatusData();
  const meta = useStatusMeta();
  const client = meta.client;
  var status1 = (
    <div className={`${Number.isInteger(client) ? 'connected' : 'disconnected'}`}>
      {Number.isInteger(client) ? 'Connected' : 'Not Connected'}
    </div>
  );
  var status2 = (
    <div className={`${status.is_scraping ? 'connected' : 'disconnected'}`}>
      {status.is_scraping ? 'Scraping' : 'Not scraping'}
    </div>
  );

  const greenlight = <GridIcon fill="#6b902a" color="#333" size="15px" />;
  const yellowlight = <GridIcon fill="yellow" color="#333" size="15px" />;
  const redlight = <GridIcon fill="red" color="#333" size="15px" />;
  const fDetails = (
    <>
      <br />
      <small>
        <i>{'final_behind'}</i>
      </small>
    </> //
  );
  const sDetails = (
    <>
      <br />
      <small>
        <i>{'staging_behind'}</i>
      </small>
    </> //
  );
  const uDetails = (
    <>
      <br />
      <small>
        <i>{'unripe_behind'}</i>
      </small>
    </> //
  );

  return (
    <div>
      <div className="status-details">
        <Section title="Ethereum Node">
          <SectionItem name="Status" value={status1} />
          <SectionItem name="Latest" value={formatNumber(meta.client)} />
        </Section>

        <Section title="TrueBlocks">
          <SectionItem name="Status" value={status2} />
          <SectionItem name="Final" value={formatNumber(meta.finalized)} icon={greenlight} details={fDetails} />
          <SectionItem name="Staging" value={formatNumber(meta.staging)} icon={yellowlight} details={sDetails} />
          <SectionItem name="Unripe" value={formatNumber(meta.unripe)} icon={redlight} details={uDetails} />
        </Section>

        <Section title="Options">
          <SectionItem name="rpc" value={status.rpc_provider} wide />
          <SectionItem name="bals" value={status.balance_provider} wide />
          <SectionItem name="api" value={status.api_provider} wide />
          <SectionItem name="cache" value={status.cache_path} wide />
          <SectionItem name="index" value={status.index_path} wide />
        </Section>

        <Section title="Software Versions">
          <div className="doublewide">- {status.client_version}</div>
          <div className="doublewide">- {status.trueblocks_version}</div>
        </Section>
      </div>
    </div>
  );
};

const SectionItem = ({ name, value, wide, icon, details }) => {
  if (!wide) {
    return (
      <>
        <div className="left">
          {name}:<br />
          {icon}
        </div>
        <div className="right">
          {value}
          {details}
        </div>
      </>
    );
  }

  return (
    <div className="doublewide">
      <div className="bold">{name}:</div> {value}
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h4>
      {children}
      <div className="separator" />
    </>
  );
};

/*
  var final_behind = '';
  if (client > 0) {
    final_behind = '(';
    final_behind += (client - finalized).toString();
    var mins = (Math.floor(((client - finalized) * 100) / (60 / 14)) / 100).toString();
    var x = mins + ' minutes';
    if (mins > 120) {
      x = formatNumber(mins / 60, 1, ' ') + ' hours';
    }
    if (mins > 60 * 24) {
      x = formatNumber(mins / (60 * 24), 1, ' ') + ' days';
    }
    final_behind += ' behind, ' + x;
    final_behind += ')';
  }

  var staging_behind = '';
  if (client > 0) {
    staging_behind = '(' + (client - staging).toString();
    mins = (Math.floor(((client - staging) * 100) / (60 / 14)) / 100).toString();
    x = mins + ' minutes';
    if (mins > 120) {
      x = formatNumber(mins / 60, 1, ' ') + ' hours';
    }
    if (mins > 60 * 24) {
      x = formatNumber(mins / (60 * 24), 1, ' ') + ' days';
    }
    staging_behind += ' behind, ' + x;
    staging_behind += ')';
  }

  var unripe_behind = '';
  if (client > 0) {
    unripe_behind = '(';
    if (client - object.unripe > 0) {
      unripe_behind += (client - object.unripe).toString();
      unripe_behind += ' behind';
    } else {
      unripe_behind += 'caught up';
    }
    unripe_behind += ')';
  }
*/
