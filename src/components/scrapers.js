import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section';
import Accordion from 'constructicon/accordion';
//import namesData from '../api/names_data';

export default class ScrapersPage extends BasePage {
  render() {
    function makeContent() {
      return (
        <div>
          <Section><b>blockScrape:</b>
            <Section background='tertiary'>
              <Accordion title='Seed settings'>
                <Section background='secondary'>This is the blockScrape seed section</Section>
              </Accordion>
              <Accordion title='Scrape settings'>
                <Section background='secondary'>This is the blockScrape scrape section</Section>
              </Accordion>
            </Section>
          </Section>
          <Section><b>acctScrape:</b>
            <Section background='tertiary'>
              <Accordion title='Daemon settings'>
                <Section background='secondary'>This is the acctScrape daemon section</Section>
              </Accordion>
              <Accordion title='Scrape settings'>
                <Section background='secondary'>This is the acctScrape scrape section</Section>
              </Accordion>
            </Section>
          </Section>
        </div>
      );
    }
    var left = "Scrapers";
    var middle = makeContent();
    var right =
      "Scrapers interact with the blockchain to prepare data for TrueBlocks to use. You may control the behaviour of the scrapers in this section. There are two scrapers: blockScrape and acctScrape. Click the help icon next to the scraper for more information. One these screens, you are given an option to share the results of your scraper's work with others. If you do so, others will benefit from your scraper's work.";
    var button = "Eat me";
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
