import React, { Component } from 'react'
import BasePage from './basepage';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Grid from 'constructicon/grid'
import GridColumn from 'constructicon/grid-column'

var chartData = {
  // Used fields: description, contents
  // Unused fields: img, color, text, disabled
  "Unpublished/Private": {
    description: "A chart showing the number of blocks produced per week.",
    contents: "http://calendarhost.com/tb_images/Chart5.png",
  },
  "Standards": {
    description: "This chart shows some other shit.",
    contents: "http://calendarhost.com/tb_images/Chart6.png",
  },
  "Leached": {
    description: "This chart shows some other shit.",
    contents: "http://calendarhost.com/tb_images/Chart7.png",
  },
  "Seeded": {
    description: "This chart shows some other shit.",
    contents: "http://calendarhost.com/tb_images/Chart8.png",
  },
};

export class TabbedSubview extends Component {
  constructor(props) {
    super(props);
    this.tabData = chartData;
  }

  render() {
    const links = [];
    const tabs = [];
    const tabPanels = [];

    Object.keys(this.tabData).forEach(name => {
      if (this.tabData[name].disabled)
        return;

      const {
        img,
        color: backgroundColor,
        text: color, description, contents
      } = this.tabData[name];

      tabs.push(
        <Tab style={{ backgroundColor }} className="status-charts">
          {name}
        </Tab>
      );

      tabPanels.push(
        <TabPanel style={{ backgroundColor, color }} className="status-charts-panel">
          <Grid>
            <GridColumn borderWidth={1} borderColor='secondary' lg={8}>
              <img src={contents} alt={name} width="100%" height="480" />
            </GridColumn>
            <GridColumn lg={1}>
            </GridColumn>
            <GridColumn lg={3}>
              {description}
            </GridColumn>
          </Grid>
        </TabPanel>
      );
    });

    return (
      <div>
        <p>{links}</p>
        <Tabs selectedTabClassName="status-charts--selected" selectedTabPanelClassName="status-charts-panel--selected" >
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
          <TabbedSubview></TabbedSubview>
        </div>
      );
    }

    var left = "Charts Module";
    var middle = makeContent();
    var right =
      "This component shows the status of both the node and the state of the TrueBlocks scrapers. It can also show historical charts of activity on the node such as Blocks per Week, Difficuly over time, etc. Anything to give the user a sense of what's going on with his/her node.";
    return (
      <BasePage
        lSection={left}
        mSection={middle}
        rSection={right}
      />
    );
  }
};
