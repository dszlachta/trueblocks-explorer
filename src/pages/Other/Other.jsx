import React, { useState, useEffect, useContext } from 'react';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { getServerData } from 'components/utils';

export const Other = () => {
  const { other, dispatch } = useOther();

  let query = 'list';
  query += '&verbose=10';
  const url = 'http://localhost:8080/when';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
    });
  }, [query, dispatch]);

  const [schema] = useState(otherSchema);
  const [searchFields] = useState(['name', 'date']);

  return (
    <div>
      <DataTable columns={schema} data={other} title="" searchFields={searchFields} />
    </div>
  );
};

//----------------------------------------------------------------------
export const otherDefault = [];

//----------------------------------------------------------------------
export const otherReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('otherState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useOther = () => {
  return useContext(GlobalContext).other;
};

//----------------------------------------------------------------------------
export const otherSchema = [
  {
    name: 'ID',
    selector: 'id',
    hidden: true,
    function: (record) => {
      return record.blockNumber;
    },
  },
  {
    width: 1,
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    width: 2,
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'number',
    align: 'center',
  },
  {
    width: 2,
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    align: 'center',
  },
  {
    width: 2,
    name: 'Date',
    selector: 'date',
    type: 'string',
    align: 'center',
  },
];
