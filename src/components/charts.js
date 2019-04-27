import React, { Component } from 'react'
import BasePage from './basepage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import chartData from '../api/chart_data.js'

export class OptionalTabbedView extends Component {
  constructor(props) {
    super(props);
    this.charts = chartData;
  }

  render() {
    const links = [];
    const tabs = [];
    const tabPanels = [];

    Object.keys(this.charts).forEach(name => {
      if (!this.charts[name].enabled)
        return;

      const {
        img,
        color: backgroundColor,
        text: color, descr, chart
      } = this.charts[name];

      tabs.push(
        <Tab style={{ backgroundColor }} className="status-charts">
          <img src={img} alt={name} height="32" width="32" />
        </Tab>
      );

      tabPanels.push(
        <TabPanel style={{ backgroundColor, color }} className="status-charts-panel">
          <span>{descr}<br/></span>
          <img src={chart} alt={name} height="800" width="1200" />
        </TabPanel>
      );
    });

    return (
      <div>
        <p>{links}</p>
        <Tabs
          selectedTabClassName="status-charts--selected"
          selectedTabPanelClassName="status-charts-panel--selected" >
          <TabList className="status-charts-list">{tabs}</TabList>
          {tabPanels}
        </Tabs>
      </div>
    );
  }
}

export default class ChartsPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <div>
          <OptionalTabbedView>This is it.</OptionalTabbedView>
        </div>
      );
    }

    var left = "Settings";
    var middle = makeContent();
    var right =
      "This component shows the status of both the node and the state of the TrueBlocks scrapers. It can also show historical charts of activity on the node such as Blocks per Week, Difficuly over time, etc. Anything to give the user a sense of what's going on with his/her node.";
    var button = "Push";
    return (
      <BasePage
        lSection={left}
        lButton={button}
        mSection={middle}
        rSection={right}
      />
    );
  }
};
