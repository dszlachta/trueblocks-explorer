import React from 'react';
import Settings from 'assets/icons/settings';
import { useExpanded } from 'components/Panels/Panel';
import './PageFooter.css';
import Discord from 'assets/icons/discord';
import GitHub from 'assets/icons/github';
import Medium from 'assets/icons/medium';
import Twitter from 'assets/icons/twitter';

//----------------------------------------------------------------------
const PageFooter = () => {
  return (
    <div className={'page-footer ' + (useExpanded('menu') ? 'shape_11' : 'shape_01')}>
      <div className="left-footer">
        <Settings />
        {/* {useExpanded('menu') ? <div style={{ display: 'inline' }}> Settings</div> : <></>} */}
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
          <Twitter className="footer-social icon_color" height='24px' />
        </a>
        <a href="http://github.com/Great-Hill-Corporation/trueblocks-core" target="_blank" rel="noopener noreferrer">
          <GitHub className="footer-social icon_color" height='24px' />
        </a>
        <a href="http://medium.com/@tjayrush" target="_blank" rel="noopener noreferrer">
          <Medium className="footer-social icon_color" height='24px' />
        </a>
        <a
          href="https://discordapp.com/channels/570963863428661248/570963863428661250"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Discord className="footer-social icon_color" height='24px' />
        </a>
      </div>
    </div>
  );
};

export default PageFooter;
