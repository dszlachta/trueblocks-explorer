import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext, { isVerbose } from 'store';

//----------------------------------------------------------------------
export const dashboardReducer = (state, action) => {
  return state;  // There are no actions that change the dashboard state
};

//----------------------------------------------------------------------
export const useDashboard = () => {
  return useContext(GlobalContext).dashboard;
}

//----------------------------------------------------------------------
export const dashboardSchema = {
  id: { hidden: !isVerbose() },
  name: { hidden: !isVerbose() },
  route: { hidden: !isVerbose() },
  count: { type: 'number' },
  sizeInBytes: { name: 'size', type: 'filesize' },
  custom: { name: 'shared' },
  date: { type: 'date' },
  timestamp: {}
};

export const dashboardDefault = [
  {
    id: '0x13..01',
    name: 'Projects',
    route: '/projects',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: '2020-03-27 12:42:50 UTC',
    timestamp: 1585312970,
  },
  {
    id: '0x13..02',
    name: 'Monitors',
    route: '/monitors',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: '2020-01-02 08:30:49 UTC',
    timestamp: 1577953849,
  },
  {
    id: '0x13..01',
    name: 'Explorer',
    route: '/explorer',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: '2020-03-27 12:42:50 UTC',
    timestamp: 1585312970,
  },
  {
    id: '0x13..04',
    name: 'Names',
    route: '/names',
    count: 200,
    sizeInBytes: 102001,
    custom: 'each node',
    date: 'June 2019',
    timestamp: 1577953849,
  },
  {
    id: '0x13..14',
    name: 'Signatures',
    route: '/signatures',
    count: 200,
    sizeInBytes: 102001,
    timestamp: 1577953849,
  },
  {
    id: '0x13..12',
    name: 'Digests',
    route: '/digests',
    count: 10101,
    sizeInBytes: 104203122,
    timestamp: 1577953849,
  },
  {
    id: '0x13..12',
    name: 'Caches',
    route: '/caches',
    count: 10101,
    sizeInBytes: 104203122,
    timestamp: 1577953849,
  },
  {
    id: '0x13..05',
    name: 'Skins',
    route: '/settings/skins',
    count: 4903,
    sizeInBytes: 35000000,
    timestamp: 1577953849,
  },
];
