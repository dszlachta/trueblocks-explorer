import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { DataTable } from 'components/DataTable';
import { currentPage, titleFromPage, getServerData1 } from 'components/utils';
import { cachesSchema, useCaches } from './store';

import './Caches.css';

//---------------------------------------------------------------------------
export function Caches() {
  const { caches, dispatch } = useCaches();
  const [types, setTypes] = useState(['all']);
  const [verbose, setVerbose] = useState(10);
  const [details, setDetails] = useState(true);
  const [depth, setDepth] = useState(0);
  const [modes, setModes] = useState(['abis', 'caches']);

  //  const source = currentPage().subpage;
  let query = 'modes=' + modes.map((mode) => mode).join('%20');
  query += '&types=' + types.map((type) => type).join('%20');
  query += details ? '&details' : '';
  query += depth ? '&depth=' + depth : '';
  query += verbose ? '&verbose=' + verbose : '';
  useEffect(() => {
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches });
    });
  }, [query]);

  const typeOpts = ['blocks', 'transactions', 'traces', 'slurps', 'prices', 'all'];
  return (
    <div>
      <div>{query}</div>
      <select
        onChange={(e) => {
          setTypes([e.target.value]);
          if (e.target.value !== 'all') setDepth(depth + 1);
          else setDepth(0);
        }}
        value={types}
      >
        types:{' '}
        {typeOpts.map((opt) => {
          return <option>{opt}</option>;
        })}
      </select>
      <select onChange={(e) => setVerbose([e.target.value])} value={verbose}>
        verbose:
        <option>{3}</option>
        <option>{10}</option>
      </select>
      <DataTable columns={cachesSchema} data={caches} title={titleFromPage()} search={false} />
    </div>
  );
}
