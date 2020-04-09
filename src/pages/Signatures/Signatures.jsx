import React, { useEffect, useState } from 'react';
//import PropTypes from 'prop-types';

import { DataTable } from 'components/DataTable';
import { currentPage, titleFromPage, getServerData } from 'components/utils';
import { signaturesDefault, signaturesReducer, signaturesSchema, useSignatures } from './store';

import './Signatures.css';

//---------------------------------------------------------------------------
export function Signatures() {
  const dispatch = useSignatures().dispatch;
  const signatures = useSignatures().state;

  const source = currentPage().subpage;
  const query = (source === '' ? 'monitored&known' : source) + '&verbose=10';
  useEffect(() => {
    getServerData('http://localhost:8080/abi', query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
    });
  }, [source]);

  return (
    <div>
      <DataTable
        columns={signaturesSchema}
        data={signatures}
        title={titleFromPage()}
        searchFields={['encoding', 'type', 'name']}
      />
    </div>
  );
}

export { signaturesDefault, signaturesReducer };
