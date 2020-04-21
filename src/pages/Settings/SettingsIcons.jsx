import React, { Fragment } from 'react';

import Add from 'assets/icons/Add';
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
import DropDown from 'assets/icons/DropDown';
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
import Settings from 'assets/icons/Settings';
//import SortIcon from 'assets/icons/SortIcon';
import ToggleLeft from 'assets/icons/ToggleLeft';
import ToggleRight from 'assets/icons/ToggleRight';
import Twitter from 'assets/icons/Twitter';
import Undelete from 'assets/icons/Undelete';
import View from 'assets/icons/View';

export const SettingsIcons = () => {
  const icons = [
    { name: 'Add', component: <Add size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Delete', component: <Delete size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Edit', component: <Edit size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Remove', component: <Remove size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Undelete', component: <Undelete size={30} color="forestgreen" fill="yellow" /> },
    { name: '', component: <Skipper size={30} color="forestgreen" fill="yellow" /> },

    { name: 'ChevronDown', component: <ChevronDown size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronLeft', component: <ChevronLeft size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronRight', component: <ChevronRight size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronUp', component: <ChevronUp size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronsDown', component: <ChevronsDown size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronsLeft', component: <ChevronsLeft size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronsRight', component: <ChevronsRight size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ChevronsUp', component: <ChevronsUp size={30} color="forestgreen" fill="yellow" /> },
    { name: '', component: <Skipper size={30} color="forestgreen" fill="yellow" /> },

    { name: 'DropDown', component: <DropDown size={30} color="forestgreen" fill="yellow" /> },
    { name: 'GridIcon', component: <GridIcon size={30} color="forestgreen" fill="yellow" /> },
    { name: 'HelpCircle', component: <HelpCircle size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Plus', component: <Plus size={30} color="forestgreen" fill="yellow" /> },
    { name: 'PlusCircle', component: <PlusCircle size={30} color="forestgreen" fill="yellow" /> },
    { name: 'PlusSquare', component: <PlusSquare size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Settings', component: <Settings size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ToggleLeft', component: <ToggleLeft size={30} color="forestgreen" fill="yellow" /> },
    { name: 'ToggleRight', component: <ToggleRight size={30} color="forestgreen" fill="yellow" /> },
    //{ name: '', component:     <SortIcon size={30} color="forestgreen" fill="yellow" />, },
    { name: 'View', component: <View size={30} color="forestgreen" fill="yellow" /> },
    { name: '', component: <Skipper size={30} color="forestgreen" fill="yellow" /> },
    { name: '', component: <Skipper size={30} color="forestgreen" fill="yellow" /> },

    { name: 'Discord', component: <Discord size={30} color="forestgreen" fill="yellow" /> },
    { name: 'FaceBook', component: <FaceBook size={30} color="forestgreen" fill="yellow" /> },
    { name: 'GitHub', component: <GitHub size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Medium', component: <Medium size={30} color="forestgreen" fill="yellow" /> },
    { name: 'Twitter', component: <Twitter size={30} color="forestgreen" fill="yellow" /> },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 12fr' }}>
      {icons.map((item) => {
        return (
          <Fragment>
            <div>{item.name}</div>
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
