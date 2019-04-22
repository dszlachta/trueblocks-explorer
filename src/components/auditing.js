import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';

export default class AuditingPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <Section>This page will allow the user to do accounting on his selected addresses.</Section>
      );
    }

    var left = "Auditing";
    var middle = makeContent();
    var right = "The auditing component is a for-pay portion of TrueBlocks. Please contact us for more information.";
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
