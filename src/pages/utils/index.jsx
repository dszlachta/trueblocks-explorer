import React from 'react';

import { handleClick } from 'components/utils';

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
} from 'assets/icons/SetEdit';
import GridIcon from 'assets/icons/GridIcon';

import './Utils.css';

export function getIcon(labelIn, expanded = false, pad = false, size = 20) {
  const label = labelIn.toLowerCase();
  const cn = (expanded ? 'menu-icon' : '') + (pad ? ' menu-icon-padded' : '');
  switch (label) {
    case 'dashboard':
      return <Dashboard key={'micon-' + label} size={size} className={cn} />;
    case 'collections':
      return <Collections key={'micon-' + label} size={size} className={cn} />;
    case 'monitors':
      return <Monitors key={'micon-' + label} size={size} className={cn} />;
    case 'explorer':
      return <Explorer key={'micon-' + label} size={size} className={cn} />;
    case 'names':
      return <Names key={'micon-' + label} size={size} className={cn} />;
    case 'tags':
      return <Tags key={'micon-' + label} size={size} className={cn} />;
    case 'signatures':
      return <Signatures key={'micon-' + label} size={size} className={cn} />;
    case 'digests':
      return <Digests key={'micon-' + label} size={size} className={cn} />;
    case 'caches':
      return <Caches key={'micon-' + label} size={size} className={cn} />;
    case 'other':
      return <Other key={'micon-' + label} size={size} className={cn} />;
    case 'settings':
      return <Settings key={'micon-' + label} size={size} className={cn} />;
    case 'support':
      return <Support key={'micon-' + label} size={size} className={cn} />;
    case 'toggleleft':
      return <ToggleLeft key={'micon-' + label} size={size} className={cn} />;
    case 'toggleright':
      return <ToggleRight key={'micon-' + label} size={size} className={cn} />;
    case 'add':
      return <Add key={'micon-' + label} size={size} className={cn} />;
    case 'addmonitor':
      return <AddMonitor key={'micon-' + label} size={size} className={cn} />;
    case 'edit':
      return <Edit key={'micon-' + label} size={size} className={cn} />;
    case 'delete':
      return <Delete key={'micon-' + label} size={size} className={cn} />;
    case 'undelete':
      return <Undelete key={'micon-' + label} size={size} className={cn} />;
    case 'remove':
      return <Remove key={'micon-' + label} size={size} className={cn} />;
    case 'externallink':
      return <ExternalLink key={'micon-' + label} size={size} className={cn} />;
    case 'greenlight':
      return <GridIcon fill="#6b902a" color="#333" size="15px" />;
    case 'yellowlight':
      return <GridIcon fill="yellow" color="#333" size="15px" />;
    case 'redlight':
      return <GridIcon fill="red" color="#333" size="15px" />;
    case 'csv':
    case 'txt':
    case 'import':
      return <button>{labelIn}</button>;
    default:
      return <div>{'Unknown icon: ' + label}</div>;
  }
}
