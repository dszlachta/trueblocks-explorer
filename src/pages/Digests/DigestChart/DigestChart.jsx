import React, { Fragment } from 'react';
import { Loading } from 'components';
import { ObjectTable } from 'components';
import * as di from '../actions';
import 'index.css';
import '../digests.css';
import { fmtInteger } from 'utils';

//----------------------------------------------------------------------
class DigestChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomStart: undefined,
    };
  }

  clientHead = this.props.client === 'n/a' ? this.props.unripe : this.props.client;
  rows = Math.ceil(this.clientHead / 1e6);

  zoom = (zoomStart) => {
    this.setState({ ...this.state, zoomStart });
  };

  chart = (
    <div className="digests-chart-container">
      <div className="digests-grid"></div>
      {[...Array(10).keys()].map((col, colI) => {
        return (
          <div className="digests-y-axis digests-grid" key={`x${col}`}>
            {fmtInteger(col * 1e5)}
          </div>
        );
      })}
      {[...Array(this.rows).keys()].map((row, rowI) => {
        return (
          <Fragment key={`x${row}`}>
            <div className="digests-x-axis digests-grid">{fmtInteger(row * 1e6)}</div>
            {[...Array(10).keys()].map((col, colI) => {
              let indexClass;
              if (this.props.finalized >= row * 1e6 + (col + 1) * 1e5) {
                indexClass = 'finalized';
              } else if (this.props.finalized >= row * 1e6 + col * 1e5) {
                indexClass = 'in-progress';
              } else {
                indexClass = 'inactive';
              }
              return (
                <div className="digests-grid" key={`x${row}${col}`}>
                  <div className={`filling ${indexClass}`} onClick={() => this.zoom(row * 1e6 + col * 1e5)}>
                    {indexClass === 'finalized' && '✔'}
                  </div>
                </div>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );

  render() {
    return (
      <div>
        {this.chart}
        <ZoomOnIndex {...this.props} start={this.state.zoomStart} n={1e5} />
      </div>
    );
  }
}

//----------------------------------------------------------------------
// Without this, the !props.loadingIndex test below is always true until one clicks on the page after relaod
var been_here = false;
const ZoomOnIndex = ({ data, start, n, loadingIndex, dispatcher_Digests }) => {
  let readyContainer;
  const hasData = data[0].items !== undefined && start !== undefined;
  switch (hasData) {
    case true:
      const filteredData = data[0].items.filter(
        (item) => (item.firstAppearance >= start) & (item.firstAppearance < start + n)
      );
      readyContainer = (
        <div>
          <IndexDetail data={filteredData} range={{ start: start, end: start + n }} />
        </div>
      );
      break;
    default:
      if (!been_here && !loadingIndex) {
        been_here = true;
        dispatcher_Digests(di.FINALIZED);
      }
      readyContainer = start && <Loading source="digests" status="loading" message="Waiting for index data..." />;
  }

  return <div>{readyContainer}</div>;
};

export default DigestChart;
