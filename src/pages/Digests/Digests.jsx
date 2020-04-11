import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { Card, ObjectTable2, DataTable, GridTable, ChartTable } from 'components';
import { currentPage, titleFromPage, getServerData1 } from 'components/utils';
import { digestsSchema, useDigests } from './store';
import { useStatusMeta } from 'store';

import './Digests.css';

//---------------------------------------------------------------------------
export const Digests = () => {
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

  const meta = useStatusMeta();
  const largest = meta.client === 'n/a' ? meta.unripe : meta.client;
  const status = { max: largest, completed: meta.finalized };
  let view = undefined;
  if (tableType === 'data-view') {
    view = <DataTable columns={digestsSchema} data={digests} title="Table View" search={false} />; //{titleFromPage()} />
  } else if (tableType === 'graph-view') {
    view = <ChartTable columns={digestsSchema} data={digests} title="" search={false} />; //{titleFromPage()} />
  } else {
    view = <GridTable columns={digestsSchema} data={digests} title="Grid View" search={false} meta={status} />;
  }

  return (
    <div>
      <button onClick={() => changeTableType('grid-view')}>grid view</button>
      <button onClick={() => changeTableType('data-view')}>table view</button>
      <button onClick={() => changeTableType('graph-view')}>graph view</button>
      {view}
    </div>
  );
};
