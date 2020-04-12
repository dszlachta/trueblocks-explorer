import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { useContext } from 'react';
import GlobalContext, { isVerbose } from 'store';
import { notEmpty } from 'components/utils';

import { useMenus } from 'pages';
import { Card, ObjectTable, Debug } from 'components/';
import { sortArray, currentPage, handleClick } from 'components/utils';
import ToggleLeft from 'assets/icons/toggle-left';
import ToggleRight from 'assets/icons/toggle-right';
import Edit from 'assets/icons/edit';
import Delete from 'assets/icons/delete';
import Undelete from 'assets/icons/undelete';
import Remove from 'assets/icons/remove';
import './Projects.css';

//----------------------------------------------------------------------------
export const Projects = () => {
  const { state, dispatch } = useProjects();
  let projects = state;

  sortArray(projects, ['deleted', 'group', 'name'], [true, true, true]);

  const updateFunc = (id, fieldName, value) => {
    // console.log('id: ', id, ' fn: ', fieldName, ' value: ', value)
    dispatch({ type: 'update', id: id, fieldName: fieldName, value: value });
  };

  return (
    <div key="projects" className="projects">
      <h4>Active Projects</h4>
      {spinProjects(projects, dispatch, updateFunc, true)}
      <h4>Paused Projects</h4>
      {spinProjects(projects, dispatch, updateFunc, false)}
    </div>
  );
};

const spinProjects = (projects, dispatch, updateFunc, active) => {
  let count = 0;
  const ret = projects.map((project, idx) => {
    if ((active && project.deleted) || (!active && !project.deleted)) return <Fragment key={idx}></Fragment>;

    count++;
    const noIcon = <div style={{ width: '22px', color: 'grey' }}>xx</div>;

    let monitorCallback = (e) => handleClick(e, dispatch, { type: 'toggle_monitor', id: project.id });
    const on = <ToggleRight key={'ic' + project.id} fill="lightyellow" color="green" onClick={monitorCallback} />;
    const off = <ToggleLeft key={'ic' + project.id} fill="lightyellow" color="red" onClick={monitorCallback} />;

    let noopCallback = (e) => {
      e.preventDefault(); /* do nothing */
    };
    const on_dis = <ToggleRight key={'ic' + project.id} fill="grey" color="lightgrey" onClick={noopCallback} />;
    const off_dis = <ToggleLeft key={'ic' + project.id} fill="grey" color="lightgrey" onClick={noopCallback} />;

    let topIcon = project.deleted ? (project.monitored ? on_dis : off_dis) : project.monitored ? on : off;

    const removeCallback = (e) => handleClick(e, dispatch, { type: 'remove_project', id: project.id });
    const remove = project.deleted ? <Remove size="18" onClick={removeCallback} /> : noIcon;

    const deleteCallback = (e) => handleClick(e, dispatch, { type: 'toggle_deleted', id: project.id });
    const del = project.deleted ? (
      <Undelete size="18" onClick={deleteCallback} />
    ) : (
      <Delete size="18" onClick={deleteCallback} />
    );

    const editCallback = (e) => handleClick(e, dispatch, { type: 'edit_project', id: project.id });
    const edit = project.deleted ? noIcon : <Edit size="15" onClick={editCallback} />;

    const tray = [edit, del, remove];

    const route = project.deleted ? '' : '/projects/view?id=' + project.id;
    const cn = 'card-header ' + (project.deleted ? 'deleted-project' : '');

    return (
      <Card key={project.id} title={project.name} headerClass={cn} iconTray={tray} headerLink={route} topIcon={topIcon}>
        <ObjectTable data={project} columns={projectsSchema} updateFunc={updateFunc} />
      </Card>
    );
  });

  if (count === 0) return <div style={{ marginLeft: '2%', marginBottom: '2%' }}>[None]</div>;

  return ret;
};

//----------------------------------------------------------------------------
export const ProjectsEdit = () => {
  const { page, subpage, params } = currentPage();
  return <div>Projects Edit: {page + '-' + subpage + ': ' + params + '.'}</div>;
};

//----------------------------------------------------------------------------
export const ProjectsSave = () => {
  return <div>Projects Save</div>;
};

//----------------------------------------------------------------------------
export const ProjectsExport = () => {
  return <div>Projects Export</div>;
};

//----------------------------------------------------------------------------
export const ProjectsView = () => {
  const { dispatch } = useMenus();
  const projects = useProjects().state;
  const { page, subpage, params } = currentPage();

  const project = projects.find((project) => project.id === params[0].value);
  return (
    <>
      <div>Projects View: {page + '-' + subpage + ': ' + params + '.'}</div>
      <div>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(project, null, 2)}</pre>
      </div>
    </> //
  );
};

//----------------------------------------------------------------------
export const projectsDefault = [
  {
    id: '0x12..01',
    group: 'Group 1',
    name: 'Project 1',
    client: { name: 'Anderson, Andy', phone: '215-257-9759' },
    addresses: [
      '0x5555533333555553333355555333335555533333',
      '0x654e7f49b474e2f5ac29cc5f2f0d41c8a93d6d0a',
      '0x807640a13483f8ac783c557fcdf27be11ea4ac7a',
      '0x9876543210987654321098765432109876543210',
      '0xb97073b754660bb356dfe12f78ae366d77dbc80f',
      '0xf503017d7baf7fbc0fff7492b751025c6a78179b',
      '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',
      '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed',
    ],
    txs: 2291,
    traces: 100,
    sizeInBytes: '1,201,019',
    deltas: 8,
    monitored: false,
    deleted: true,
  },
  {
    id: '0x12..02',
    group: 'Group 1',
    name: 'Project 2',
    client: { name: "John's Bookstore" },
    addresses: ['0x001d14804b399c6ef80e64576f657660804fec0b'],
    txs: 1000,
    traces: 100,
    sizeInBytes: '899,100',
    deltas: 8,
    monitored: false,
    deleted: false,
  },
  {
    id: '0x12..03',
    group: '',
    name: 'Carson Flowers',
    client: '',
    addresses: [
      '0x001d14804b399c6ef80e64576f657660804fec0b',
      '0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb',
      '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',
      '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed',
    ],
    txs: 1000,
    traces: 100,
    sizeInBytes: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..04',
    group: 'Group 1',
    name: 'May Construction',
    client: 'May John',
    addresses: [
      '0x001d14804b399c6ef80e64576f657660804fec0b',
      '0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb',
      '0x1111111111111111111111111111111111111111',
      '0x1111122222111112222211111222221111122222',
      '0x1234567812345678123456781234567812345678',
    ],
    txs: 1000,
    traces: 100,
    sizeInBytes: 110,
    deltas: 8,
    monitored: true,
    deleted: false,
  },
  {
    id: '0x12..05',
    group: 'Group 2',
    name: 'The Poetry Shop',
    client: 'Tudhope, Andy',
    addresses: ['0xfdecc82ddfc56192e26f563c3d68cb544a96bfed'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 100009102910291,
    deltas: 8,
    monitored: false,
    deleted: true,
  },
  {
    id: '0x12..06',
    group: 'Group 2',
    name: 'Maker DAO',
    client: 'Maker',
    addresses: ['0x001d14804b399c6ef80e64576f657660804fec0b', '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 1,
    deltas: 8,
    monitored: true,
    deleted: false,
  },
  {
    id: '0x12..07',
    group: 'Group 2',
    name: 'Whale Jim',
    client: 'Buter, in',
    addresses: ['0x001d14804b399c6ef80e64576f657660804fec0b', '0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 0,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..08',
    group: 'Group 3',
    name: 'Whale No. 2',
    client: 'Lub, in',
    addresses: ['0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359', '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 1212101010,
    deltas: 8,
    monitored: false,
    deleted: false,
  },
];

//----------------------------------------------------------------------
export const projectsReducer = (state, action) => {
  let ret = state;
  let project = ret.find((p) => p.id === action.id);
  console.log('project: ', project);
  console.log('action: ', action);
  switch (action.type) {
    case 'success':
      ret = action.payload;
      break;
    case 'toggle_monitor':
      project.monitored = !project.monitored;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'toggle_deleted':
      project.deleted = !project.deleted;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'edit_project':
      window.location = '/projects/edit?id=' + project.id;
      break;
    case 'remove_project':
      ret = ret.filter((project) => project.id !== action.id);
      break;
      //    case 'update':
      //      project[action.fieldName] = action.value;
      //      console.log('project: ', project);
      //      ret = replaceRecord(ret, project, action.id);
      //      console.log('ret: ', ret.find((p) => p.id === action.id));
      break;
    case 'reset':
      ret = projectsDefault;
      break;
    case 'fail':
      break;
    default:
      break;
  }
  // TODO(tjayrush): this does not write to the back end
  localStorage.setItem('projectsState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
const replaceRecord = (projects, record, id) => {
  var ret = projects.map((project) => {
    if (project.id === id) return record;
    return project;
  });
  return ret;
};

//----------------------------------------------------------------------
export const useProjects = () => {
  return useContext(GlobalContext).projects;
};

//----------------------------------------------------------------------------
export const projectsSchema = {
  id: { hidden: !isVerbose() },
  group: { editable: true, onValidate: notEmpty, onAccept: null },
  name: { editable: true, onValidate: null, onAccept: null },
  client: { type: 'object', editable: true, onValidate: null, onAccept: null },
  addresses: { type: 'array' },
  txs: { name: 'trans cnt', type: 'number' },
  traces: { name: 'trace cnt', type: 'number' },
  sizeInBytes: { name: 'size', type: 'filesize' },
  deltas: { type: 'number' },
  monitored: { hidden: !isVerbose(), type: 'bool' },
  deleted: { hidden: !isVerbose(), type: 'bool' },
};
