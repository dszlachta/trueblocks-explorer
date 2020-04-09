import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { Card, ObjectTable2, DataTable, GridTable, ChartTable } from 'components';
import { currentPage, titleFromPage, getServerData1 } from 'components/utils';
import { digestsSchema, useDigests } from './store';

import './Digests.css';

//---------------------------------------------------------------------------
export function Digests() {
  const digests = useDigests().state;
  const dispatch = useDigests().dispatch;

  const [tableType, setTableType] = useState(localStorage.getItem('digest-table-type'));

  const changeTableType = (newType) => {
    localStorage.setItem('digest-table-type', newType);
    setTableType(newType);
  };
  const [source, setSource] = useState(currentPage().subpage);
  const [query, setQuery] = useState('modes=index&details&verbose=10');
  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches[0].items });
    });
    dispatch({ type: 'loading', payload: true });
  }, [source, query]);

  let view = <></>; //
  if (tableType === 'grid-view') {
    //view = <GridTable columns={digestsSchema} data={digests} title="Grid View" />; //{titleFromPage()} />
    view = <IndexDetail columns={digestsSchema} data={digests} range={{ start: 7500000, end: 7510000 }} />;
  } else if (tableType === 'graph-view') {
    view = <ChartTable columns={digestsSchema} data={digests} title="Chart View" />; //{titleFromPage()} />
  } else {
    view = <DataTable columns={digestsSchema} data={digests} search={false} title="Table View" />; //{titleFromPage()} />
  }

  return (
    <div>
      <button onClick={() => changeTableType('data-view')}>table view</button>
      <button onClick={() => changeTableType('grid-view')}>grid view</button>
      <button onClick={() => changeTableType('graph-view')}>graph view</button>
      {view}
    </div>
  );
}

//----------------------------------------------------------------------
const IndexDetail = ({ data, columns, range }) => {
  const count = data.length;
  const subtit =
    'Details: ' + (count ? count : 'No') + ' finalized chunks in block range ' + range.start + '-' + range.end;

  const styleInnerIndex = {
    backgroundColor: 'wheat',
    border: '1px dashed sandybrown',
  };

  const styleDigestsIndexContainer = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridAutoFlow: 'row',
  };

  return (
    <div style={styleInnerIndex}>
      <h4>{subtit}</h4>
      <div stlye={styleDigestsIndexContainer}>
        {data.map((item) => {
          if (item.firstAppearance < range.start || item.latestAppearance > range.end) return <></>; //
          return (
            <Card>
              <ObjectTable2 data={item} fieldList={columns} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};
