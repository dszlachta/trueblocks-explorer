import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { DataTable } from 'components/DataTable';
import { currentPage, titleFromPage, getServerData1 } from 'components/utils';
import { digestsSchema, useDigests } from './store';

import './Digests.css';

//---------------------------------------------------------------------------
export function Digests() {
  const dispatch = useDigests().dispatch;
  const digests = useDigests().state;

  const source = currentPage().subpage;
  const query = 'modes=index&details&verbose';
  useEffect(() => {
    getServerData1('http://localhost:8080/status', query).then((theData) => {
      dispatch({ type: 'update', payload: theData.data[0].caches[0].items });
    });
  }, [source]);

  return (
    <div>
      <DataTable columns={digestsSchema} data={digests} title={titleFromPage()} search={false} />
    </div>
  );
}
