import React from 'react'
import BasePage from './basepage';
import Section from 'constructicon/section'
import Container from 'constructicon/container'

export default class HomePage extends BasePage {
  render() {
    function makeContent() {
      return (
        <Container background='red'>
          <Section background='primary' foreground='light' align='center'>
            <div>
              <h2>TrueBlocks by Geat Hill Corporation is the world's first<br />fully-decentralized data extraction tool for the Ethereum blockchain.</h2><br/>
            <div><img alt='' src="https://quickblocks.io/wp-content/uploads/2017/10/logo-white-website-95px.png" /></div>
            </div>
          </Section>
        </Container>
      );
    }

    var left = "Home";
    var middle = makeContent();
    var right = "This is the application's home page.";
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
