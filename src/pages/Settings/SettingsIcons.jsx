import React, { Fragment } from 'react';

import Add from 'assets/icons/Add';
import BarChart from 'assets/icons/BarChart';
import ExternalLink from 'assets/icons/ExternalLink';
import ChevronDown from 'assets/icons/ChevronDown';
import ChevronLeft from 'assets/icons/ChevronLeft';
import ChevronRight from 'assets/icons/ChevronRight';
import ChevronUp from 'assets/icons/ChevronUp';
import ChevronsDown from 'assets/icons/ChevronsDown';
import ChevronsLeft from 'assets/icons/ChevronsLeft';
import ChevronsRight from 'assets/icons/ChevronsRight';
import ChevronsUp from 'assets/icons/ChevronsUp';
import Delete from 'assets/icons/Delete';
import Discord from 'assets/icons/Discord';
import Edit from 'assets/icons/Edit';
import FaceBook from 'assets/icons/FaceBook';
import GitHub from 'assets/icons/GitHub';
import GridIcon from 'assets/icons/GridIcon';
import HelpCircle from 'assets/icons/HelpCircle';
import Medium from 'assets/icons/Medium';
import Plus from 'assets/icons/Plus';
import PlusCircle from 'assets/icons/PlusCircle';
import PlusSquare from 'assets/icons/PlusSquare';
import Remove from 'assets/icons/Remove';
//import SortIcon from 'assets/icons/SortIcon';
import ToggleLeft from 'assets/icons/ToggleLeft';
import ToggleRight from 'assets/icons/ToggleRight';
import Twitter from 'assets/icons/Twitter';
import Undelete from 'assets/icons/Undelete';

import {
  Dashboard,
  Monitors,
  Explorer,
  Names,
  Signatures,
  Digests,
  Caches,
  Other,
  Settings,
  Support,
} from 'assets/icons/SetMenus';

export const SettingsIcons = () => {
  const size = 30;
  const fill = 'orange';
  const color = 'black';
  const style = {
    border: '1px dashed brown',
    backgroundColor: 'white',
    height: '40px',
    width: '40px',
    padding: '2px',
  };
  const icons = [
    { name: 'Add', component: <Add size={size} color={color} fill={fill} style={style} /> },
    { name: 'Delete', component: <Delete size={size} color={color} fill={fill} style={style} /> },
    { name: 'Edit', component: <Edit size={size} color={color} fill={fill} style={style} /> },
    { name: 'Remove', component: <Remove size={size} color={color} fill={fill} style={style} /> },
    { name: 'Undelete', component: <Undelete size={size} color={color} fill={fill} style={style} /> },
    { name: '', component: <Skipper size={size} color={color} fill={fill} style={style} /> },

    { name: 'ChevronDown', component: <ChevronDown size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronLeft', component: <ChevronLeft size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronRight', component: <ChevronRight size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronUp', component: <ChevronUp size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronsDown', component: <ChevronsDown size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronsLeft', component: <ChevronsLeft size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronsRight', component: <ChevronsRight size={size} color={color} fill={fill} style={style} /> },
    { name: 'ChevronsUp', component: <ChevronsUp size={size} color={color} fill={fill} style={style} /> },
    { name: '', component: <Skipper size={size} color={color} fill={fill} style={style} /> },

    { name: 'Discord', component: <Discord size={size} color={color} fill={fill} style={style} /> },
    { name: 'FaceBook', component: <FaceBook size={size} color={color} fill={fill} style={style} /> },
    { name: 'GitHub', component: <GitHub size={size} color={color} fill={fill} style={style} /> },
    { name: 'Medium', component: <Medium size={size} color={color} fill={fill} style={style} /> },
    { name: 'Twitter', component: <Twitter size={size} color={color} fill={fill} style={style} /> },
    { name: '', component: <Skipper size={size} color={color} fill={fill} style={style} /> },

    { name: 'BarChart', component: <BarChart size={size} color={color} fill={fill} style={style} /> },
    { name: 'ExternalLink', component: <ExternalLink size={size} color={color} fill={fill} style={style} /> },
    { name: 'GridIcon', component: <GridIcon size={size} color={color} fill={fill} style={style} /> },
    { name: 'HelpCircle', component: <HelpCircle size={size} color={color} fill={fill} style={style} /> },
    { name: 'Plus', component: <Plus size={size} color={color} fill={fill} style={style} /> },
    { name: 'PlusCircle', component: <PlusCircle size={size} color={color} fill={fill} style={style} /> },
    { name: 'PlusSquare', component: <PlusSquare size={size} color={color} fill={fill} style={style} /> },
    { name: 'Settings', component: <Settings size={size} color={color} fill={fill} style={style} /> },
    { name: 'ToggleLeft', component: <ToggleLeft size={size} color={color} fill={fill} style={style} /> },
    { name: 'ToggleRight', component: <ToggleRight size={size} color={color} fill={fill} style={style} /> },
    { name: '', component: <Skipper size={size} color={color} fill={fill} style={style} /> },
    { name: '', component: <Skipper size={size} color={color} fill={fill} style={style} /> },

    //{ name: '', component:     <SortIcon size={size} color={color} fill={fill} style={style} />, },
    { name: 'Dashboard', component: <Dashboard size={size} color={color} fill={fill} style={style} /> },
    { name: 'Monitors', component: <Monitors size={size} color={color} fill={fill} style={style} /> },
    { name: 'Explorer', component: <Explorer size={size} color={color} fill={fill} style={style} /> },
    { name: 'Names', component: <Names size={size} color={color} fill={fill} style={style} /> },
    { name: 'Signatures', component: <Signatures size={size} color={color} fill={fill} style={style} /> },
    { name: 'Digests', component: <Digests size={size} color={color} fill={fill} style={style} /> },
    { name: 'Caches', component: <Caches size={size} color={color} fill={fill} style={style} /> },
    { name: 'Other', component: <Other size={size} color={color} fill={fill} style={style} /> },
    { name: 'Settings', component: <Settings size={size} color={color} fill={fill} style={style} /> },
    { name: 'Support', component: <Support size={size} color={color} fill={fill} style={style} /> },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 12fr' }}>
      {icons.map((item) => {
        return (
          <Fragment>
            <div style={{ paddingRight: '6px', justifySelf: 'end' }}>{item.name}</div>
            <div>{item.component}</div>
          </Fragment>
        );
      })}
    </div>
  );
};

const Skipper = () => {
  return (
    <div>
      <br />
      <br />
      <br />
    </div>
  );
};
