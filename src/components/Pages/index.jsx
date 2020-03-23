import React from 'react';

const DashBoard = () => {
  return <div className="okay">Actual DashBoard</div>
}

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

const SettingsIPFS = () => {
  return <div className="okay">Actual Settings IPFS Page</div>
}

const Generic = ({ page }) => {
  return <div style={{ backgroundColor: 'yellow' }}>Undefined Generic Page: {page}</div>
}

export const thePages = {
  'dashboard/': { component: <DashBoard /> },
  'projects/': { component: <Generic page="Projects" /> },
  'projects/new': { component: <Generic page="Projects : New" /> },
  'projects/open': { component: <Generic page="Projects : Open" /> },
  'projects/save': { component: <Generic page="Projects : Save" /> },
  'projects/export': { component: <Generic page="Projects : Export" /> },
  'monitors/': { component: <Generic page="Monitors" /> },
  'names/': { component: <Generic page="Names" /> },
  'settings/': { component: <Settings /> },
  'settings/api': { component: <SettingsApi /> },
  'settings/node': { component: <SettingsNode /> },
  'settings/scraper': { component: <SettingsScraper /> },
  'settings/ipfs': { component: <SettingsIPFS /> },
  'support/': { component: <Generic page="Names" /> },
  'support/free': { component: <Generic page="Free Support" /> },
  'support/incident': { component: <Generic page="Per Incident" /> },
  'support/documentation': { component: <Generic page="Documentation" /> },
  'support/contact': { component: <Generic page="Contact" /> },
  'support/about': { component: <Generic page="About" /> },
}