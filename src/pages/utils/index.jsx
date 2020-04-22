import React from 'react';

import {
  Dashboard,
  Collections,
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

import './Utils.css';

export function getIcon(label, expanded, pad = false) {
  const size = 20;
  const cn = (expanded ? 'menu-icon' : '') + (pad ? ' menu-icon-padded' : '');
  switch (label) {
    case 'Dashboard':
      return <Dashboard key={'micon-' + label} size={size} className={cn} />;
    case 'Collections':
      return <Collections key={'micon-' + label} size={size} className={cn} />;
    case 'Monitors':
      return <Monitors key={'micon-' + label} size={size} className={cn} />;
    case 'Explorer':
      return <Explorer key={'micon-' + label} size={size} className={cn} />;
    case 'Names':
      return <Names key={'micon-' + label} size={size} className={cn} />;
    case 'Signatures':
      return <Signatures key={'micon-' + label} size={size} className={cn} />;
    case 'Digests':
      return <Digests key={'micon-' + label} size={size} className={cn} />;
    case 'Caches':
      return <Caches key={'micon-' + label} size={size} className={cn} />;
    case 'Other':
      return <Other key={'micon-' + label} size={size} className={cn} />;
    case 'Settings':
      return <Settings key={'micon-' + label} size={size} className={cn} />;
    case 'Support':
      return <Support key={'micon-' + label} size={size} className={cn} />;
    default:
      return null;
  }
}
