import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { DataTable } from 'components/DataTable';
import { currentPage, titleFromPage, getServerData } from 'components/utils';
import { cachesSchema, useCaches } from './store';

import './Caches.css';

//---------------------------------------------------------------------------
export function Caches() {
  const dispatch = useCaches().dispatch;
  const caches = useCaches().state;

  const source = currentPage().subpage;
  const query = 'modes=caches&types=all&details&verbose';
  useEffect(() => {
    getServerData('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
    });
  }, [source]);

  return (
    <div>
      <DataTable columns={cachesSchema} data={caches} title={titleFromPage()} search={false} />
    </div>
  );
}
