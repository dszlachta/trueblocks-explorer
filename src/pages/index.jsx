import React from 'react';
import PropTypes from 'prop-types';

import { Dashboard } from './Dashboard';
import { Projects, ProjectsEdit, ProjectsSave, ProjectsExport } from './Projects'
import { Support, SupportKeys, SupportFree, SupportIncident, SupportDocumentation, SupportContact, SupportAbout } from './Support';

const Settings = () => {
  return <div className="okay">Actual Settings Page</div>
}

const SettingsApi = () => {
  return <div className="okay">Actual Settings Api Page</div>
}

const SettingsNode = () => {
  return <div className="okay">Actual Settings Node Page</div>
}

const SettingsScraper = () => {
  return <div className="okay">Actual Settings Scraper Page</div>
}

const SettingsSharing = () => {
  return <div className="okay">Actual Settings Sharing Page</div>
}

const SettingsSkins = () => {
  return <div className="okay">Actual Skins Page</div>
}

const Generic = ({ page }) => {
  return <div style={{ backgroundColor: 'yellow' }}>Undefined Generic Page: {page}</div>
}

export const thePages = {
  'dashboard/': { component: <Dashboard /> },
  'projects/': { component: <Projects /> },
  'projects/edit': { component: <ProjectsEdit /> },
  'projects/save': { component: <ProjectsSave /> },
  'projects/export': { component: <ProjectsExport /> },
  'monitors/': { component: <Generic page="Monitors" /> },
  'names/': { component: <Generic page="Names" /> },
  'signatures/': { component: <Generic page="Signatures" /> },
  'caches/': { component: <Generic page="Caches" /> },
  'settings/': { component: <Settings /> },
  'settings/api': { component: <SettingsApi /> },
  'settings/node': { component: <SettingsNode /> },
  'settings/scraper': { component: <SettingsScraper /> },
  'settings/sharing': { component: <SettingsSharing /> },
  'settings/skins': { component: <SettingsSkins /> },
  'support/': { component: <Support /> },
  'support/keys': { component: <SupportKeys /> },
  'support/free': { component: <SupportFree /> },
  'support/incident': { component: <SupportIncident /> },
  'support/documentation': { component: <SupportDocumentation /> },
  'support/contact': { component: <SupportContact /> },
  'support/about': { component: <SupportAbout /> },
}