import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { DataTable } from 'components/DataTable';
import { currentPage, titleFromPage, getServerData1 } from 'components/utils';
import { cachesSchema, useCaches } from './store';

import './Caches.css';

//---------------------------------------------------------------------------
export function Caches() {
  const { caches, dispatch } = useCaches();

  const source = currentPage().subpage;
  const query = 'modes=caches&types=blocks&details&depth=3&verbose=10';
  useEffect(() => {
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches });
    });
  }, [source]);

  return (
    <div>
      <DataTable columns={cachesSchema} data={caches} title={titleFromPage()} search={false} />
    </div>
  );
}
