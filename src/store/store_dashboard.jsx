import { useContext } from 'react';
import GlobalContext from 'store';

//----------------------------------------------------------------------
export const dashboardDefault = [
  {
    id: '0x13..01',
    name: 'Projects',
    route: '/projects',
    count: 10,
    size: 102001,
    sharedTo: 'June 2019'
  },
  {
    id: '0x13..02',
    name: 'Monitors',
    route: '/monitors',
    count: 200,
    size: 102001,
    sharedTo: 'March 2020'
  },
  {
    id: '0x13..04',
    name: 'Names',
    route: '/names',
    count: 200,
    size: 102001,
    sharedTo: 'June 2019'
  },
  {
    id: '0x13..04',
    name: 'Signatures',
    route: '/signatures',
    count: 200,
    size: 102001,
    sharedTo: 'Not shared'
  },
  {
    id: '0x13..05',
    name: 'Caches',
    route: '/caches',
    count: 10101,
    size: 104203122,
    custom: 'each node',
    sharedTo: 'Not shared'
  },
  {
    id: '0x13..05',
    name: 'Settings',
    route: '/settings',
    count: 4903,
    size: 35000000,
    sharedTo: 'Not shared'
  },
];

//----------------------------------------------------------------------
export const dashboardReducer = (state, action) => {
  let ret = state;
  // switch (action.type) {
  //   //case 'start':
  //   //  return {...state};
  //   case 'success':
  //     ret = action.payload;
  //     break;
  //   case 'toggle':
  //     console.log(ret.find(i => i.id === action.id))
  //     ret = toggleProject(ret, action.id);
  //     console.log(ret.find(i => i.id === action.id))
  //     break;
  //   case 'fail':
  //     break;
  //   default:
  //     break;
  // }
  // // write whatever you need to put in localStorage here...
  return ret;
};

//----------------------------------------------------------------------
export const useDashboard = () => {
  return useContext(GlobalContext).dashboard;
}
