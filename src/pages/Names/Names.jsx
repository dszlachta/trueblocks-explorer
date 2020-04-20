import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { currentPage, getServerData } from 'components/utils';
import { groupsSchema } from './NamesGroups';
import './Names.css';

export { groupsSchema };
//---------------------------------------------------------------------------
export function Names() {
  const { names, dispatch } = useNames();

  let query = currentPage().subpage;
  if (query === 'prefunds') query = 'prefund';
  else if (query === 'tokens') query = 'named';
  else if (query === 'wallets') query = 'owned';
  else if (query === 'yours') query = 'custom';
  if (query === '') query = 'custom';
  query += '&verbose=10';
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
    });
  }, [query, dispatch]);

  const [schema, setSchema] = useState(namesSchema);
  const [searchFields, setSearchFields] = useState(['address', 'name', 'group', 'symbol']);
  const subpage = currentPage().subpage;
  useEffect(() => {
    setSchema(subpage === 'groups' ? groupsSchema : namesSchema);
    setSearchFields(subpage === 'groups' ? ['group'] : ['address', 'name', 'group', 'symbol']);
  }, [subpage]);

  return (
    <div>
      <DataTable columns={schema} data={names} title="" searchFields={searchFields} />
    </div>
  );
}

//----------------------------------------------------------------------
export const namesDefault = [];

//----------------------------------------------------------------------
export const namesReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('namesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useNames = () => {
  return useContext(GlobalContext).names;
};

//----------------------------------------------------------------------------
function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.address;
    default:
      break;
  }
}

//----------------------------------------------------------------------------
// auto-generate: schema
export const namesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    onDisplay: getFieldValue,
  },
  {
    name: 'Group',
    selector: 'group',
    type: 'string',
    width: 3,
    editable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    width: 6,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 4,
    editable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    width: 2,
    editable: true,
    align: 'center',
  },
  {
    name: 'Source',
    selector: 'source',
    type: 'string',
    hidden: true,
    width: 4,
    editable: true,
  },
  {
    name: 'Decimals',
    selector: 'decimals',
    type: 'uint64',
    width: 2,
    align: 'center',
  },
  {
    name: 'Description',
    selector: 'description',
    type: 'string',
    width: 4,
    editable: true,
  },
  {
    name: 'isCustom',
    selector: 'is_custom',
    type: 'bool',
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
    type: 'blknum',
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
  },
  {
    name: 'First Appearance',
    selector: 'firstAppearance',
    type: 'blknum',
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
  },
  {
    name: 'size',
    selector: 'sizeInBytes',
    type: 'uint64',
  },
];
// auto-generate: schema
