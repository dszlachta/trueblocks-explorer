import React from 'react';

import { usePage, useProjects, useMenus } from 'store';

//----------------------------------------------------------------------------
export const ProjectsView = () => {
  const { dispatch } = useMenus();
  const projects = useProjects().state;
  const { page, subpage, params } = usePage();

  if (!params || params[0].name === '') {
    dispatch({ type: 'disable_sub', text: 'Projects' });
    return <div className="warning">No project specified</div>;
  }

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
    </>
  );
};
