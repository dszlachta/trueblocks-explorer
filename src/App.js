import React, { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ButtonGroup from 'constructicon/button-group';
import ButtonSocial from 'constructicon/button-social';
//import Section from 'constructicon/section';
//import Container from 'constructicon/container';

import './App.css';
import HomePage from './components/home';
import AccountsPage from './components/accounts';
import BlocksPage from './components/blocks';
import FunctionsPage from './components/functions';
import ChartsPage from './components/charts';
import MonitorPage from './components/monitoring';
import ScrapersPage from './components/scrapers';
import AccountingPage from './components/accounting';
import AuditingPage from './components/auditing';
//import logo from './svg/logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      lastTab: 7
    };
  }

  componentDidMount = () => {
//    fetch(`${process.env.REACT_APP_API_URL}/list?address=0x06012c8cf97bead5deae237070f9587f8e7a266d`, { mode: 'cors' })
//      // .then(response => response.json())
//      .then(res => console.log(res));
  }

  renderTabs() {
    return (
      <div>
        <Tabs onSelect={index => this.setState({ lastTab: index })} defaultIndex={this.state.lastTab}>
          <TabList>
            <Tab>Home</Tab >

            <Tab>|</Tab >
            <Tab>Monitors</Tab >
            <Tab>Scrapers</Tab>

            <Tab>|</Tab >
            <Tab>Accounts</Tab>
            <Tab>Blocks</Tab>
            <Tab>Functions</Tab>

            <Tab>|</Tab >
            <Tab>Analysis</Tab>
            <Tab>Charts</Tab>

            <Tab>|</Tab >
            <Tab>Accounting</Tab >
            <Tab>Auditing</Tab >
            <Tab>Notifications</Tab >
            <Tab>Custom</Tab >
          </TabList>
          <TabPanel><HomePage /></TabPanel>

          <TabPanel></TabPanel>
          <TabPanel><MonitorPage /></TabPanel>
          <TabPanel><ScrapersPage /></TabPanel>

          <TabPanel></TabPanel>
          <TabPanel><AccountsPage /></TabPanel>
          <TabPanel><BlocksPage /></TabPanel>
          <TabPanel><FunctionsPage /></TabPanel>

          <TabPanel></TabPanel>
          <TabPanel><ChartsPage /></TabPanel>
          <TabPanel><ChartsPage /></TabPanel>

          <TabPanel></TabPanel>
          <TabPanel><AccountingPage /></TabPanel>
          <TabPanel><AuditingPage /></TabPanel>
          <TabPanel><AccountingPage /></TabPanel>
          <TabPanel><AuditingPage /></TabPanel>
        </Tabs>
      </div>
    );
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <div className='header-logo'><img alt='' src="https://quickblocks.io/wp-content/uploads/2017/10/logo-white-website-95px.png" width="25px"/></div>
          <div className='header-appname'>TrueBlocks<small>&reg;</small></div>
          <div className='header-social'>
            <ButtonGroup>
              <ButtonSocial size={-4} share type='facebook' />
              <ButtonSocial size={-4} share type='twitter' />
            </ButtonGroup>
          </div>
        </div>
        {this.renderTabs()}
        <div className='bottom-footer'>
          TrueBlocks &reg; 2019 ~ <a href="mailto:info@trueblocks.io"><font color="#b1b1b1">info@trueblocks.io</font></a> ~ <a href="https://trueblocks.io"><font color="#b1b1b1">https://trueblocks.io</font></a>
        </div>
      </div>

    );
  }
}

export default App;
