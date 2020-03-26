import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { useProjects, usePage, handleClick } from 'store';
import { Card, ObjectTable } from 'components/';
import ToggleLeft from 'assets/icons/toggle-left';
import ToggleRight from 'assets/icons/toggle-right';
import Edit from 'assets/icons/edit';
import Delete from 'assets/icons/delete';
import Undelete from 'assets/icons/undelete';
import Remove from 'assets/icons/remove';
import './Projects.css';

export const Projects = () => {
  const { state, dispatch } = useProjects();
  let projects = state;
  sortArray(projects, ['deleted', 'group', 'name'], true);
  return (
    <div key="projects" className="projects">
      <div onClick={(e) => handleClick(e, dispatch, { type: 'reset' })}>Reset</div>
      <h4>Active Projects</h4>
      {spinProjects(projects, dispatch, true)}
      <h4>Paused Projects</h4>
      {spinProjects(projects, dispatch, false)}
    </div >
  );
}

//----------------------------------------------------------------------------
export const ProjectsView = () => {
  const { page, subpage, params } = usePage();
  return <div>Projects View: {page + '-' + subpage + ': ' + params + '.'}</div>
}

//----------------------------------------------------------------------------
export const ProjectsEdit = () => {
  const { page, subpage, params } = usePage();
  return <div>Projects Edit: {page + '-' + subpage + ': ' + params + '.'}</div>
}

//----------------------------------------------------------------------------
export const ProjectsSave = () => {
  return <div>Projects Save</div>
}

//----------------------------------------------------------------------------
export const ProjectsExport = () => {
  return <div>Projects Export</div>
}

//----------------------------------------------------------------------------
const sortArray = (array, fieldArray, asc) => {
  array.sort(function (a, b) {
    const aValue = fieldArray.map(f => { return a[f] }).join(',');
    const bValue = fieldArray.map(f => { return b[f] }).join(',');
    if (asc) {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return bValue > aValue ? 1 : bValue < aValue ? -1 : 0;
    }
  });
  return array;
}

const spinProjects = (projects, dispatch, active) => {
  let count = 0;
  const ret = (
    projects.map((project, idx) => {
      if ((active && project.deleted) || (!active && !project.deleted))
        return <Fragment key={idx}></Fragment>

      count++;
      const noIcon = <div style={{ width: '22px', color: 'grey' }}>xx</div>

      let monitorCallback = (e) => handleClick(e, dispatch, { type: 'toggle_monitor', id: project.id });
      const on = <ToggleRight key={'ic' + project.id} fill="lightyellow" color="green" onClick={monitorCallback} />;
      const off = <ToggleLeft key={'ic' + project.id} fill="lightyellow" color="red" onClick={monitorCallback} />;

      let noopCallback = (e) => { e.preventDefault(); /* do nothing */ };
      const on_dis = <ToggleRight key={'ic' + project.id} fill="grey" color="lightgrey" onClick={noopCallback}/>;
      const off_dis = <ToggleLeft key={'ic' + project.id} fill="grey" color="lightgrey" onClick={noopCallback}/>;

      let topIcon = (project.deleted ? (project.monitored ? on_dis : off_dis) : (project.monitored ? on : off));

      const removeCallback = (e) => handleClick(e, dispatch, { type: 'remove_project', id: project.id });
      const remove = (project.deleted ? <Remove size="18" onClick={removeCallback} /> : noIcon);

      const deleteCallback = (e) => handleClick(e, dispatch, { type: 'toggle_deleted', id: project.id });
      const del = (project.deleted ? <Undelete size="18" onClick={deleteCallback} /> : <Delete size="18" onClick={deleteCallback} />);

      const editCallback = (e) => handleClick(e, dispatch, { type: 'edit_project', id: project.id });
      const edit = (project.deleted ? noIcon : <Edit size="15" onClick={editCallback} />);

      const tray = [edit, del, remove];

      const fields = Object.keys(project);
      const route = project.deleted ? '' : '/projects/view?id=' + project.id;
      const cn = "card-header " + (project.deleted ? "deleted-project" : "");

      return (
        <Card key={project.id} title={project.name} headerClass={cn} iconTray={tray} headerLink={route} topIcon={topIcon}>
          <ObjectTable data={project} fields={fields} />
        </Card>
      );
    })
  );

  if (count === 0)
    return <div style={{marginLeft: '2%', marginBottom: '2%' }}>[None]</div>

  return ret;
}