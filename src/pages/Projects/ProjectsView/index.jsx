import React from "react";

import { useProjects } from "store/projects";
import { useMenus } from "store";
import { currentPage } from "components/utils";

//----------------------------------------------------------------------------
export const ProjectsView = () => {
  const { dispatch } = useMenus();
  const projects = useProjects().state;
  const { page, subpage, params } = currentPage();

  const project = projects.find(project => project.id === params[0].value);
  return (
    <>
      <div>Projects View: {page + "-" + subpage + ": " + params + "."}</div>
      <div>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </div>
      <div>
        <pre>{JSON.stringify(project, null, 2)}</pre>
      </div>
    </>
  );
};
