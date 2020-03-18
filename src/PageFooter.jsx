import React from 'react';
import "./PageFooter.css";
import discord from './img/discord.svg';
import github from './img/github.svg';
import medium from './img/medium.svg';
import twitter from './img/twitter.svg';

const PageFooter = () => {
  return (
    <div className="page-footer">
      <div className="left-footer">
        Small message area
      </div>
      <div className="center-footer">
        <div>TrueBlocks, LLC • 1010 N Hancock St, Philadelpia, PA 19123</div>
        <div>
          <a className="footer-links" href="http://www.quickblocks.io" target="_blank" rel="noopener noreferrer">
            http://www.quickblocks.io
              </a>{' '}
              •{' '}
          <a className="footer-links" href="mailto:info@quickblocks.io?subject=Inquiry">
            info@quickblocks.io
              </a>
        </div>
      </div>
      <div className="right-footer">
        <a href="http://twitter.com/@quickblocks" target="_blank" rel="noopener noreferrer">
          <img className="footer-social" alt={twitter} src={twitter} />
        </a>
        <a
          href="http://github.com/Great-Hill-Corporation/trueblocks-core"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-social" alt={github} src={github} />
        </a>
        <a href="http://medium.com/@tjayrush" target="_blank" rel="noopener noreferrer">
          <img className="footer-social" alt={medium} src={medium} />
        </a>
        <a
          href="https://discordapp.com/channels/570963863428661248/570963863428661250"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer-social" alt={discord} src={discord} />
        </a>
      </div>
    </div >
  );
}

export default PageFooter;