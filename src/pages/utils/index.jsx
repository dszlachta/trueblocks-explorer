import React from 'react';

import {
  Dashboard,
  Collections,
  Monitors,
  Explorer,
  Names,
  Tags,
  Signatures,
  Digests,
  Caches,
  Other,
  Settings,
  Support,
} from 'assets/icons/SetMenus';
import {
  ToggleLeft,
  ToggleRight,
  Add,
  Edit,
  Delete,
  Undelete,
  Remove,
  ExternalLink,
  AddMonitor,
  AddName,
  View,
  Copy,
  CheckCircle,
  CheckCircleYellow,
  XCircle,
} from 'assets/icons/SetEdit';
import GridIcon from 'assets/icons/GridIcon';

import './Utils.css';

export function getIcon(index, labelIn, expanded = false, pad = false, size = 20) {
  const label = labelIn.toLowerCase();
  const key = 'icon_' + label + '_' + index;
  const cn = (expanded ? 'menu-icon' : '') + (pad ? ' menu-icon-padded' : '');
  switch (label) {
    case 'dashboard':
      return <Dashboard key={key} size={size} className={cn} />;
    case 'collections':
      return <Collections key={key} size={size} className={cn} />;
    case 'monitors':
      return <Monitors key={key} size={size} className={cn} />;
    case 'explorer':
      return <Explorer key={key} size={size} className={cn} />;
    case 'names':
      return <Names key={key} size={size} className={cn} />;
    case 'tags':
      return <Tags key={key} size={size} className={cn} />;
    case 'signatures':
      return <Signatures key={key} size={size} className={cn} />;
    case 'digests':
      return <Digests key={key} size={size} className={cn} />;
    case 'caches':
      return <Caches key={key} size={size} className={cn} />;
    case 'other':
      return <Other key={key} size={size} className={cn} />;
    case 'settings':
      return <Settings key={key} size={size} className={cn} />;
    case 'support':
      return <Support key={key} size={size} className={cn} />;
    case 'toggleleft':
      return <ToggleLeft key={key} size={size} className={cn} />;
    case 'toggleright':
      return <ToggleRight key={key} size={size} className={cn} />;
    case 'add':
      return <Add key={key} size={size} className={cn} />;
    case 'copy':
      return <Copy key={key} size={size} className={cn} />;
    case 'addmonitor':
      return <AddMonitor key={key} size={size} className={cn} />;
    case 'checkcircle':
      return <CheckCircle key={key} size={size} className={cn} color={'green'} />;
    case 'checkcircleyellow':
      return <CheckCircleYellow key={key} size={size} className={cn} color={'black'} />;
    case 'xcircle':
      return <XCircle key={key} size={size} className={cn} color={'red'} />;
    case 'addname':
      return <AddName key={key} size={size} className={cn} />;
    case 'view':
      return <View key={key} size={size} className={cn} />;
    case 'edit':
      return <Edit key={key} size={size} className={cn} />;
    case 'delete':
      return <Delete key={key} size={size} className={cn} />;
    case 'undelete':
      return <Undelete key={key} size={size} className={cn} />;
    case 'remove':
      return <Remove key={key} size={size} className={cn} />;
    case 'externallink':
      return <ExternalLink key={key} size={size} className={cn} />;
    case 'greenlight':
      return <GridIcon key={key} fill="#6b902a" color="#333" size="15px" />;
    case 'yellowlight':
      return <GridIcon key={key} fill="yellow" color="#333" size="15px" />;
    case 'redlight':
      return <GridIcon key={key} fill="red" color="#333" size="15px" />;
    default:
      return <div key={key}>{'Unknown icon: ' + label}</div>;
  }
}
