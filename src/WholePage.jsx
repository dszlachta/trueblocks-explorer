import React, { Context } from 'react';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import PageContent from './PageContent';
import "./WholePage.css"

function WholePage() {
  return (
    <div className="whole-page">
      <PageHeader />
      <PageContent />
      <PageFooter />
    </div >
  );
}

export default WholePage;
