import React, { useState, useEffect, useContext } from 'react';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { getServerData } from 'components/utils';

//----------------------------------------------------------------------
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
      <DataTable
        data={other}
        columns={schema}
        title="Other View"
        search={true}
        searchFields={searchFields}
        pagination={true}
      />
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
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber;
    default:
      break;
  }
}

//----------------------------------------------------------------------------
// auto-generate: schema
export const otherSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 1,
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
    width: 2,
    align: 'center',
  },
  {
    name: 'Timestamp',
    selector: 'timestamp',
    type: 'timestamp',
    width: 2,
    align: 'center',
  },
  {
    name: 'Date',
    selector: 'date',
    type: 'string',
    width: 2,
    align: 'center',
  },
];
// auto-generate: schema
