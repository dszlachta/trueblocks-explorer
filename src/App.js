import React, { Component } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// import ButtonGroup from 'constructicon/button-group';
// import ButtonShare from 'constructicon/button-share';
//import Section from 'constructicon/section';
//import Container from 'constructicon/container';

import './App.css';
import HomePage from './components/home';
import MonitorsPage from './components/monitors';
import ScrapersPage from './components/scrapers';
import AccountsPage from './components/accounts';
import BlocksPage from './components/blocks';
import FunctionsPage from './components/functions';
import AnalysisPage from './components/analysis';
import ChartsPage from './components/charts';
import AccountingPage from './components/accounting';
import AuditingPage from './components/auditing';
import NotificationsPage from './components/notifications';
import CustomPage from './components/custom';
import PricingPage from './components/pricing';
import HelpPage from './components/help';
//import logo from './svg/logo.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      lastTab: 6
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
        <Router>
            <Link to="/">Home</Link>
            |
            <Link to="/monitors">Monitors</Link>
            <Link to="/scrapers">Scrapers</Link>

            |
            <Link to="/accounts">Accounts</Link>
            <Link to="/blocks">Blocks</Link>
            <Link to="/functions">Functions</Link>

            |
            <Link to="/analysis">Analysis</Link>
            <Link to="/charts">Charts</Link>

            |
            <Link to="/accounting">Accounting</Link>
            <Link to="/auditing">Auditing</Link>
            <Link to="/notifications">Notifications</Link>
            <Link to="/custom">Custom</Link>
            |
            <Link to="/pricing">Pricing</Link>
            <Link to="/help">Help</Link>
          
        <div>
          <Route path="/" exact component={HomePage}/>
          <Route path="/monitors" component={MonitorsPage}/>
          <Route path="/scrapers" component={ScrapersPage}/>
          <Route path="/accounts" component={AccountsPage}/>
          <Route path="/blocks/:block?" component={BlocksPage}/>
          <Route path="/functions" component={FunctionsPage}/>
          <Route path="/analysis" component={AnalysisPage}/>
          <Route path="/charts" component={ChartsPage}/>
          <Route path="/accounting" component={AccountingPage}/>
          <Route path="/auditing" component={AuditingPage}/>
          <Route path="/notifications" component={NotificationsPage}/>
          <Route path="/custom" component={CustomPage}/>
          <Route path="/pricing" component={PricingPage}/>
          <Route path="/help" component={HelpPage}/>
          </div>
        </Router>
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
            {/* <ButtonGroup>
              <ButtonShare size={-4} share type='facebook' />
              <ButtonShare size={-4} share type='twitter' />
            </ButtonGroup> */}
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
