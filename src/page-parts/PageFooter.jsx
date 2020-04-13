import React from 'react';
import { Link } from 'react-router-dom';

import { usePanels } from 'store';
import { Settings, Discord, GitHub, Medium, Twitter } from './PageFooterIcons';
import './PageFooter.css';

//----------------------------------------------------------------------
export const PageFooter = () => {
  return (
    <div className={'page-footer ' + (usePanels().state.menu ? 'shape_11' : 'shape_01')}>
      <LeftFooter />
      <CenterFooter />
      <RightFooter />
    </div>
  );
};

//----------------------------------------------------------------------
const LeftFooter = () => {
  return (
    <div className="left-footer">
      <Link to="/settings">
        <Settings className="nofill_icon_color" />
      </Link>
    </div>
  );
};

//----------------------------------------------------------------------
const CenterFooter = () => {
  return (
    <div className="center-footer">
      <div>TrueBlocks, LLC • 1010 N Hancock St, Philadelpia, PA 19123</div>
      <div>
        <FooterLink link="http://www.quickblocks.io" /> •{' '}
        <FooterLink link="mailto:info@quickblocks.io?subject=Inquiry" text="info@quickblocks.io" />
      </div>
    </div>
  );
};

//----------------------------------------------------------------------
const RightFooter = () => {
  return (
    <div className="right-footer">
      <ClickableIcon
        link="http://twitter.com/@quickblocks"
        icon={<Twitter className="footer-social icon_color" height="24px" />}
      />
      <ClickableIcon
        link="http://github.com/Great-Hill-Corporation/trueblocks-core"
        icon={<GitHub className="footer-social icon_color" height="24px" />}
      />
      <ClickableIcon
        link="http://medium.com/@tjayrush"
        icon={<Medium className="footer-social icon_color" height="24px" />}
      />
      <ClickableIcon
        link="https://discordapp.com/channels/570963863428661248/570963863428661250"
        icon={<Discord className="footer-social icon_color" height="24px" />}
      />
    </div>
  );
};

//----------------------------------------------------------------------
const FooterLink = ({ link, text }) => {
  return (
    <a className="footer-links" href={link} target="_blank" rel="noopener noreferrer">
      {text !== undefined ? text : link}
    </a>
  );
};

//----------------------------------------------------------------------
const ClickableIcon = ({ link, icon }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};
