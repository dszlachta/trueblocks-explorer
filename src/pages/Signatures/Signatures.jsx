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

export class Signatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: '',
      source: 'monitored',
      sigs: []
    };
  }

  async getData(source) {
    const url = 'http://localhost:8080/abi?' + source;
    const response = await fetch(url);
    const data = await response.json();
    console.log('data: ', data);
    console.log('data: ', data.data);
    return data.data;
  }

  async changeSource(me) {
    me.setState({
      loading: true
    });
    let source = this.state.source;
    switch (source) {
      case 'monitored':
        source = 'known';
        break;
      case 'known':
        source = 'known&monitored';
        break;
      case 'known&monitored':
        source = 'monitored';
        break;
      default:
      // do nothing
    }
    me.setState({
      ...me.state,
      sigs: await me.getData(source),
      source: source,
      loading: false,
    });
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
    const nRecords = formatNumber(!isNaN(this.state.sigs.length) ? this.state.sigs.length : 0);
    return (
      <Panel
        key='sig_panel'
        options={{
          expanded: true,
          topIcon: (
            <div className='table-message'>
              {nRecords} {this.state.source} encodings
            </div>
          )
        }}>
        <button
          key='sig_switch'
          onClick={() => {
            this.changeSource(this);
          }}>
          {`Switch source: ${this.state.source}`}
        </button>
        {this.state.loading ? (
          <div key='sig_loading'>{'Loading...'}</div>
        ) : (
          <DataTable
            key='sig_data_table'
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
        )}
      </Panel>
    );
  }
}

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

//----------------------------------------------------
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
