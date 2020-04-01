import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';
import { DataTable, createTheme } from 'components/';

import { useSignatures, signatureSchema } from 'store';
import { Panel } from 'components/';
import { formatNumber } from 'components/utils';
import { currentPage } from 'components/utils';
import { fetchURL } from 'store';
import { dataFetcher } from 'components/utils';

import './Signatures.css';

// async function dataFetcher2(url) {
//   return await fetch(url)
//     .then(response => {
//       console.log('first: ', response);
//       return response.json();
//     })
//     .then(body => {
//       console.log('second: ', body.data);
//       return body.data;
//     })
// }

// fetch(url).then((r) => {
//     return r.json();
//   });

//----------------------------------------------------------------------
// export const fetchURL2 = (url) => {
//   return dataFetcher(url);
// //   return fetch(url)
// //     .then((r) => {
// //       if (r.status !== 200) throw new Error();
// //       return r.text();
// //     })
// //     .then((t) => {
// // //      console.log('result: ', t);
// // //      console.log('result: ', JSON.parse(t).data);
// //       const parsed = JSON.parse(t); //.then((p) => { return p; });
// //       return { data: parsed, error: null };
// //     })
// //     .catch((e) => {
// //       console.log('error: ', e);
// //       return { data: null, error: e }
// //     });
// };

export class Signatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      source: 'monitored',
      sigs: []
    }
  }

  async getData(source) {
    const url = 'http://localhost:8080/abi?' + source + "&verbose=10";
    const response = await fetch(url);
    const data = await response.json();
    console.log('data: ', data);
    console.log('data: ', data.data);
    return data.data;
  }

  async changeSource(me, newSource) {
    me.setState({
      loading: true,
    });
    console.log('source: ', me.state.source, 'newSource: ', newSource);
    const data = await me.getData(newSource);
    me.setState({
      ...me.state,
      sigs: data,
      loading: false,
      source: newSource
    })
  }

  async componentDidMount() {
    const data = await this.getData(this.state.source);
    console.log('THIS IS IN X: ', data);
    this.setState({
      ...this.state,
      sigs: data,
      loading: false
    });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Panel
            key='panel12'
            options={{
              expanded: true,
              topIcon: <div className='table-message'>{formatNumber(this.state.sigs.length)} {this.state.source} encodings</div>
            }}>
            <button
              key='button12'
              onClick={() => {
                this.changeSource(this, this.state.source === 'monitored' ? 'known' : 'monitored');
              }}>
              {`Current status: ${this.state.source ? 'on' : 'off'}`}
            </button>
            <div key='div12'>
              {'Loading...'}
            </div>
          </Panel>
        ) : (
            <Panel
              key='panel12'
              options={{
                expanded: true,
                topIcon: <div className='table-message'>{formatNumber(this.state.sigs.length)} {this.state.source} encodings</div>
              }}>
              <button
                key='button12'
                onClick={() => {
                  this.changeSource(this, this.state.source === 'monitored' ? 'known' : 'monitored');
                }}>
                {`Current status: ${this.state.source ? 'on' : 'off'}`}
              </button>
              {/* <pre>{JSON.stringify(this.state.sigs, null, 2)}</pre> */}
              <DataTable
                key='dt12'
                theme='solarized'
                title='Function and Event Signatures'
                defaultSortField='encoding'
                columns={signatureSchema}
                data={this.state.sigs}
                keyField='encoding'
                expandableRows
                fixedHeader
                pagination
                // TrueBlocks customizations
                paginateAtTop
              />
            </Panel>
          )}
      </div>
    );
  }
}

/*
    );
*/

// //----------------------------------------------------
// export const Signatures = () => {
//   const { state, dispatch } = useSignatures();
//   const signatures = state;
//   const [source, setSource] = useState(false);
//   const [data, setData] = useState(state);

//   const setSigs2 = (data) => {
//     const parsed = JSON.parse(data);
//     dispatch({ type: 'data', payload: parsed.data })
//   }

//   let url = 'http://localhost:8080/abi?' + (source ? 'known' : 'monitored');
//   url += "&verbose=10";
//   useSWR(url, fetchURL(url, setSigs2));

//   const onSwitchSource = (e) => {
//     setSource(!source);
//   }

//   useEffect(() => {
//     //setData(signatures);
//     // dispatch({ type: 'update', signatures });
//   }, [data, source]);

// };
/*
  data,
  columns,
  title,
  actions,
  keyField,
  striped,
  highlightOnHover,
  pointerOnHover,
  dense,
  selectableRows,
  selectableRowsHighlight,
  selectableRowsNoSelectAll,
  selectableRowSelected,
  selectableRowDisabled,
  selectableRowsComponent,
  selectableRowsComponentProps,
  onRowExpandToggled,
  onSelectedRowsChange,
  expandableIcon,
  onChangeRowsPerPage,
  onChangePage,
  paginationServer,
  paginationTotalRows,
  paginationDefaultPage,
  paginationResetDefaultPage,
  paginationPerPage,
  paginationRowsPerPageOptions,
  paginationIconLastPage,
  paginationIconFirstPage,
  paginationIconNext,
  paginationIconPrevious,
  paginationComponent,
  paginationComponentOptions,
  className,
  style,
  responsive,
  overflowY,
  overflowYOffset,
  progressPending,
  progressComponent,
  persistTableHead,
  noDataComponent,
  disabled,
  noTableHead,
  noHeader,
  fixedHeader,
  fixedHeaderScrollHeight,
  pagination,
  subHeader,
  subHeaderAlign,
  subHeaderWrap,
  subHeaderComponent,
  noContextMenu,
  contextMessage,
  contextActions,
  contextComponent,
  expandableRows,
  onRowClicked,
  onRowDoubleClicked,
  sortIcon,
  onSort,
  sortFunction,
  sortServer,
  expandableRowsComponent,
  expandableRowDisabled,
  expandableRowsHideExpander,
  expandOnRowClicked,
  expandOnRowDoubleClicked,
  expandableRowExpanded,
  expandableInheritConditionalStyles,
  defaultSortField,
  defaultSortAsc,
  clearSelectedRows,
  conditionalRowStyles,
  theme,
  customStyles,
  */

createTheme('defalutTableTheme', {
  text: {
    primary: '#268bd2',
    secondary: '#2aa198'
  },
  background: {
    default: 'none'
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF'
  },
  divider: {
    default: '#073642'
  },
  button: {
    default: '#2aa198',
    hover: 'rgba(0,0,0,.08)',
    focus: 'rgba(255,255,255,.12)',
    disabled: 'rgba(0,0,0,.12)'
  },
  sortFocus: {
    default: '#2aa198'
  }
});
