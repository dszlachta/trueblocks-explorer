import React from 'react';
import { useProjects } from 'store';
import { Card } from 'components/';
import ToggleLeft from 'assets/icons/toggle-left';
import ToggleRight from 'assets/icons/toggle-right';
import './Projects.css';

//----------------------------------------------------------------------------
export const Projects = () => {
  const projects = useProjects().state;
  const projectDispatch = useProjects().dispatch;
  return (
    <div key="dash" className="dashboard">
      {/* <Group title="Projects"> */}
      {/* <div>skip</div> */}
      {projects.map((project) => {
        const action = { type: 'toggle', id: project.id };
        const on = <ToggleRight key={'icon' + project.id} fill="lightyellow" color="green" onClick={() => projectDispatch(action)} />;
        const off = <ToggleLeft key={'icon' + project.id} fill="lightyellow" color="red" onClick={() => projectDispatch(action)} />;
        const toggleIcon = project.monitored ? on : off;
        return (
          <Card key={project.id} title={project.name} type="monitor" inCon={toggleIcon}>
            <table style={{ display: 'block', width: '80%' }}>
              <tbody>
                <tr>
                  <td width='10%'></td><td width="40%">id:</td><td align="right" width="40%">{project.id}</td>
                </tr>
                <tr>
                  <td width='10%'></td><td width="40%">addresses:</td><td align="right" width="40%">{project.addrs}</td>
                </tr>
                <tr>
                  <td width='10%'></td><td width="40%">transactions:</td><td align="right" width="40%">{project.txs}</td>
                </tr>
                <tr>
                  <td width='10%'></td><td width="40%">bytes:</td><td align="right" width="40%">{project.size}</td>
                </tr>
                <tr>
                  <td width='10%'></td><td width="40%">traces:</td><td align="right" width="40%">{project.traces}</td>
                </tr>
                <tr>
                  <td width='10%'></td><td width="40%">deltas:</td><td align="right" width="40%">{project.deltas}</td>
                </tr>
              </tbody>
            </table>
          </Card>
        );
      })}
      {/* </Group> */}
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
export const ProjectsSave = () => {
  return <div>Projects Save</div>
}

//----------------------------------------------------------------------------
export const ProjectsExport = () => {
  return <div>Projects Export</div>
}

