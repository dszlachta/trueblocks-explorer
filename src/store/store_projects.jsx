import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from 'store';

//----------------------------------------------------------------------
export const projectsDefault = [
  {
    id: '0x12..01',
    projectGroup: "Group 1",
    monitored: true,
    name: 'Anderson, Andy',
    addrs: 5,
    txs: 2291,
    traces: 100,
    size: '1,201,019',
    deltas: 8,
  },
  {
    id: '0x12..02',
    projectGroup: "Group 1",
    monitored: false,
    name: 'John\'s Bookstore',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: '899,100',
    deltas: 8,
  },
  {
    id: '0x12..03',
    projectGroup: "Group 1",
    monitored: true,
    name: 'Carson, Jane',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..04',
    projectGroup: "Group 1",
    monitored: false,
    name: 'May Construction',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..05',
    projectGroup: "Group 2",
    monitored: true,
    name: 'Marks, Sarah',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..06',
    projectGroup: "Group 2",
    monitored: false,
    name: 'Maker DAO',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..07',
    projectGroup: "Group 2",
    monitored: true,
    name: 'Project 22',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..08',
    projectGroup: "Group 3",
    monitored: false,
    name: 'Project 3',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..09',
    projectGroup: "Group 3",
    monitored: true,
    name: 'Project 4',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
  {
    id: '0x12..10',
    projectGroup: "Group 3",
    monitored: false,
    name: 'Project 5',
    addrs: 23,
    txs: 1000,
    traces: 100,
    size: 12010010,
    deltas: 8,
  },
];

//----------------------------------------------------------------------
export const projectsReducer = (state, action) => {
  //console.log('state: ', state, ' action: ', action);
  let ret = state;
  switch (action.type) {
    //case 'start':
    //  return {...state};
    case 'success':
      ret = action.payload;
      break;
    case 'toggle':
      ret = toggleProject(ret, action.id);
      break;
    case 'fail':
      break;
    default:
      break;
  }
  // write whatever you need to put in localStorage here...
  return ret;
};

//----------------------------------------------------------------------
const toggleProject = (projects, id) => {
  projects = projects.map((project) => {
    if (project.id === id) {
      project.monitored = project.monitored ? false : true;
    }
    return project;
  });
  return projects;
}

//----------------------------------------------------------------------
export const useProjects = () => {
  return useContext(GlobalContext).projects;
}
