import React from 'react'
import BasePage from './basepage';
import datesData from '../api/dates_data';

export default class DatesPage extends BasePage {
  render() {
    function makeContent() {
      return (datesData.map(item => {
        return (
          <div>
            <span>{item.name}</span> <span>{item.block}</span>
            <hr></hr>
          </div>
        );
      }));
    }

    var left = "Dates";
    var middle = makeContent();
    var right = "The dates component of TrueBlocks allows you to assign names any Ethereum blocks. We've provided a number of default named blocks, but you may add your own. This makes understanding the timeline of your interactions with the blockchain easier. If you choose to share the names you create, others will benefit from that information.";
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
} 
