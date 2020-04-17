import React, { Fragment, useContext } from 'react';

import GlobalContext from 'store';

import { Card, ObjectTable } from 'components/';
import { sortArray, handleClick, notEmpty } from 'components/utils';
import { ToggleLeft, ToggleRight, Edit, Delete, Undelete, Remove } from 'assets/icons/edit_set';

import './Projects.css';

//----------------------------------------------------------------------------
export const Projects = () => {
  const { projects } = useProjects();

  sortArray(projects, ['deleted', 'group', 'name'], [true, true, true]);

  const activeProjects = projects.filter((project) => {
    return !project.deleted;
  });
  const inactiveProjects = projects.filter((project) => {
    return project.deleted;
  });

  return (
    <div key="projects" className="projects">
      <ProjectList projects={activeProjects} title="Active Projects" />
      <ProjectList projects={inactiveProjects} title="Inactive Projects" />
    </div>
  );
};

//----------------------------------------------------------------------------
const Icon = ({ action, id, dispatch, deleted, color = '' }) => {
  const fill = deleted ? 'grey' : 'lightyellow';
  const col = deleted ? 'lightgrey' : color;
  const callBack = deleted ? null : (e) => handleClick(e, dispatch, { type: action, id: id });
  const callBack2 = (e) => handleClick(e, dispatch, { type: action, id: id });
  const noIcon = <div style={{ width: '22px' }}></div>;

  switch (action) {
    case 'toggle_on':
      return <ToggleLeft key={'i_' + id} fill={fill} color={col} onClick={callBack} />;
    case 'toggle_off':
      return <ToggleRight key={'i_' + id} fill={fill} color={col} onClick={callBack} />;
    case 'remove':
      return deleted ? <Remove size="18" onClick={callBack2} /> : noIcon;
    case 'edit':
      return deleted ? noIcon : <Edit size="18" onClick={callBack} />;
    case 'delete':
      return deleted ? <Undelete size="18" onClick={callBack2} /> : <Delete size="18" onClick={callBack2} />;
    default:
      break;
  }
  return <></>; //
};

//----------------------------------------------------------------------------
const ProjectList = ({ projects, title }) => {
  const { dispatch } = useProjects();

  return (
    <Fragment>
      {<h4>{title}</h4>}
      {projects.length === 0 ? (
        <Fragment>
          <div style={{ marginLeft: '2%', marginBottom: '2%' }}>[None]</div>
        </Fragment>
      ) : (
        projects.map((project, idx) => {
          const route = project.deleted ? '' : '/projects/view?id=' + project.id;
          const cn = 'card-header ' + (project.deleted ? 'deleted-project' : '');

          const topIcon = (
            <Icon
              action={project.monitored ? 'toggle_off' : 'toggle_on'}
              color={project.monitored ? 'green' : 'red'}
              id={project.id}
              dispatch={dispatch}
              deleted={project.deleted}
            />
          );

          const removeIcon = <Icon action="remove" id={project.id} dispatch={dispatch} deleted={project.deleted} />;
          const editIcon = <Icon action="edit" id={project.id} dispatch={dispatch} deleted={project.deleted} />;
          const deleteIcon = <Icon action="delete" id={project.id} dispatch={dispatch} deleted={project.deleted} />;
          const iconTray = [editIcon, deleteIcon, removeIcon];

          return (
            <Card
              key={project.id}
              title={project.name}
              headerClass={cn}
              iconTray={iconTray}
              headerLink={route}
              topIcon={topIcon}
            >
              <ObjectTable data={project} columns={projectsSchema} />
            </Card>
          );
        })
      )}
    </Fragment>
  );
};

//----------------------------------------------------------------------
export const projectsReducer = (state, action) => {
  let ret = state;
  let project = ret.find((p) => p.id === action.id);
  switch (action.type) {
    case 'success':
      ret = action.payload;
      break;
    case 'toggle_monitor':
      project.monitored = !project.monitored;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'toggle_on':
      project.monitored = true;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'toggle_off':
      project.monitored = false;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'delete':
      console.log(project.deleted);
      project.deleted = !project.deleted;
      ret = replaceRecord(ret, project, action.id);
      break;
    case 'edit':
      window.location = '/projects/edit?id=' + project.id;
      break;
    case 'remove':
      ret = ret.filter((project) => project.id !== action.id);
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

//----------------------------------------------------------------------------
const validateUserInput = (fieldName, value) => {
  if (fieldName === 'group') return notEmpty(fieldName, value);
  return true;
};

//----------------------------------------------------------------------------
// auto-generate: schema
export const projectsSchema = [
  {
    name: '',
    selector: 'id',
    type: 'string',
    hidden: true
  },
  {
    name: '',
    selector: 'group',
    editable: true,
    onValidate: validateUserInput
  },
  {
    name: '',
    selector: 'name',
    editable: true
  },
  {
    name: '',
    selector: 'client',
    type: 'object',
    editable: true
  },
  {
    name: '',
    selector: 'addresses',
    type: 'array'
  },
  {
    name: 'trans cnt',
    selector: 'txs',
    type: 'number'
  },
  {
    name: 'trace cnt',
    selector: 'traces',
    type: 'number'
  },
  {
    name: 'size',
    selector: 'sizeInBytes',
    type: 'filesize'
  },
  {
    name: '',
    selector: 'deltas',
    type: 'number'
  },
  {
    name: '',
    selector: 'monitored',
    type: 'bool',
    hidden: true
  },
  {
    name: '',
    selector: 'deleted',
    type: 'bool',
    hidden: true
  }
];
// auto-generate: schema
