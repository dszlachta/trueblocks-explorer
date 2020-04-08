import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { DataTable } from 'components/DataTable';
import { currentPage, titleFromPage, getServerData1 } from 'components/utils';
import { digestsSchema, useDigests } from './store';

import './Digests.css';

//---------------------------------------------------------------------------
export function Digests() {
  const digests = useDigests().state;
  const dispatch = useDigests().dispatch;

  const [source, setSource] = useState(currentPage().subpage);
  const [query, setQuery] = useState('modes=index&details&verbose=10');
  useEffect(() => {
    dispatch({ type: 'loading', payload: true });
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches[0].items });
    });
    dispatch({ type: 'loading', payload: true });
  }, [source, query]);

  return (
    <div>
      <DataTable columns={digestsSchema} data={digests} title={titleFromPage()} search={false} />
    </div>
  );
}
