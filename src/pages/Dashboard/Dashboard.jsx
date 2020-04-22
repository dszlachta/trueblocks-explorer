import React, { useContext } from 'react';
//import PropTypes from 'prop-types';

import GlobalContext from 'store';
import { Caddie } from 'components/';

import './Dashboard.css';

//----------------------------------------------------
export const Dashboard = () => {
  const { dashboard } = useDashboard();
  return <Caddie key="caddie" title="Modules" cards={dashboard} columns={dashboardSchema} withIcons={true} />;
};

//----------------------------------------------------
// page-related - for searching do not remove
export const dashboardDefault = [
  {
    name: 'Collections',
    route: '/collections',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: '2020-03-27 12:42:50 UTC',
    timestamp: 1585312970,
  },
  {
    name: 'Monitors',
    route: '/monitors',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: '2020-01-02 08:30:49 UTC',
    timestamp: 1577953849,
  },
  {
    name: 'Explorer',
    route: '/explorer',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: '2020-03-27 12:42:50 UTC',
    timestamp: 1585312970,
  },
  {
    name: 'Names',
    route: '/names',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: 'June 2019',
    timestamp: 1577953849,
  },
  {
    name: 'Signatures',
    route: '/signatures',
    count: 200,
    sizeInBytes: 102001,
    timestamp: 1577953849,
  },
  {
    name: 'Digests',
    route: '/digests',
    count: 10101,
    sizeInBytes: 104203122,
    timestamp: 1577953849,
  },
  // {
  //   name: 'Caches',
  //   route: '/caches',
  //   count: 10101,
  //   sizeInBytes: 104203122,
  //   timestamp: 1577953849,
  // },
  {
    name: 'Settings',
    route: '/settings/skins',
    count: 4903,
    sizeInBytes: 35000000,
    timestamp: 1577953849,
  },
  {
    name: 'Support',
    route: '/support',
    count: 4903,
    sizeInBytes: 35000000,
    timestamp: 1577953849,
  },
];

//----------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.route;
    default:
      break;
  }
}

//----------------------------------------------------------------------
// auto-generate: schema
export const dashboardSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    name: 'Route',
    selector: 'route',
    type: 'string',
  },
  {
    name: 'Count',
    selector: 'count',
    type: 'uint64',
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Custom',
    selector: 'custom',
    type: 'string',
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string',
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
];
// auto-generate: schema

//----------------------------------------------------------------------
export const dashboardReducer = (state, action) => {
  return state; // There are no actions that change the dashboard state
};

//----------------------------------------------------------------------
export const useDashboard = () => {
  return useContext(GlobalContext).dashboard;
};
