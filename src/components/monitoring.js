import React, { Fragment } from 'react'
import BasePage from './basepage';

export default class MonitorPage extends BasePage {
  render() {
    function makeContent() {
      return (
        "X"
      );
    }

    var left = "Monitoring";
    var middle = makeContent();
    var right = "Monitoring allows end users to specify which smart contracts and/or accounts they want to monitor.";
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
