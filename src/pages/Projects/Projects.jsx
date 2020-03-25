import React from 'react';
import PropTypes from 'prop-types';

import { useProjects, usePage, handleClick } from 'store';
import { Card, ObjectTable } from 'components/';
import ToggleLeft from 'assets/icons/toggle-left';
import ToggleRight from 'assets/icons/toggle-right';
import './Projects.css';

export const Projects = () => {
  const { state, dispatch } = useProjects();
  const projects = state;
  return (
    <div key="projects" className="projects">
      {projects.map((project) => {
        const action = { type: 'toggle', id: project.id };
        const on = <ToggleRight key={'icon' + project.id} fill="lightyellow" color="green" onClick={(e) => handleClick(e, dispatch, action)} />;
        const off = <ToggleLeft key={'icon' + project.id} fill="lightyellow" color="red" onClick={(e) => handleClick(e, dispatch, action)} />;
        const toggleIcon = project.monitored ? on : off;
        const fields = Object.keys(project);
        const route = '/projects/edit?id=' + project.id;
        return (
          <Card key={project.id} title={project.name} inCon={toggleIcon} headerLink={route}>
            <ObjectTable data={project} fields={fields} />
          </Card>
        );
      })}
    </div >
  );
}

//----------------------------------------------------------------------------
export const ProjectsNew = () => {
  return <div>Projects New</div>
}

//----------------------------------------------------------------------------
export const ProjectsOpen = () => {
  return <div>Projects Open</div>
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

