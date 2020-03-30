import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useSignatures } from 'store';
import { DataTable, defDataTableOptions } from 'components/';
import { SearchBar } from 'components/';
import { sortArray } from 'components/utils';

import './Signatures.css';

//----------------------------------------------------
export const Signatures = () => {
  const { state, dispatch } = useSignatures();
  const signatures = state;

  const [search, setSearch] = useState('');
  const [matched, setMatched] = useState(signatures);
  const [start, setStart] = useState(0);
  const [count, setCount] = useState(10);
  const [ignoreCase, setIgnoreCase] = useState(true);

  const updateFilter = (id, fn, val) => {
    setSearch(val);
  };

  const matchFilter = () => {
    let nMatched = 0;
    let nIncluded = 0;
    const results = signatures.filter((record) => {

      if (nIncluded >= count) return false;

      let recordStr = JSON.stringify(record);
      let searchStr = search;
      if (ignoreCase) {
        recordStr = recordStr.toLowerCase();
        searchStr = searchStr.toLowerCase();
      }

      if (recordStr.includes(searchStr)) {
        nMatched++;
        if (nMatched >= (start-1)) {
          nIncluded++;
          return true;
        }
      }
      return false;

    });
    setMatched(results);
  };

  const scroll = (dir) => {
    switch (dir) {
      case 'first': setStart(0); break;
      case 'prev': setStart(start - count); break;
      case 'next': setStart(start + count); break;
      case 'last': setStart(matched.length - count); break;
    }
  }

  sortArray(signatures, ['encoding'], [true]);
  useEffect(matchFilter, [search, start, count]);

  const options = { ...defDataTableOptions, idField: 'encoding' };
  return (
    <>
      <div stlye={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <div onClick={() => scroll('first')}>first</div>
        <div onClick={() => scroll('prev')}>prev</div>
        <div onClick={() => scroll('next')}>next</div>
        <div onClick={() => scroll('last')}>last</div>
        <div>showing {matched.length} matched records from {start} to {start + count}</div>
      </div>
      <div>
        <SearchBar filter={search} onChange={updateFilter} />
        <SearchBar filter={search} onChange={updateFilter} />
      </div>
      <DataTable data={matched} fields={signatureFields} options={options} />
    </>
  );
};

//----------------------------------------------------------------------------
const signatureFields = {
  name: {},
  type: {},
  encoding: {},
  signature: {},
  input_names: {},
  output_names: {}
};
