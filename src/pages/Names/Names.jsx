import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext, { isVerbose } from 'store';
import { notEmpty } from 'components/utils';

import { DataTable } from 'components';
import { currentPage, titleFromPage, getServerData } from 'components/utils';
import './Names.css';

//---------------------------------------------------------------------------
export function Names() {
  const names = useNames().state;
  const dispatch = useNames().dispatch;

  // { label: 'Your Blocks' },
  // http://localhost:3000/names/your_blocks/when+list&verbose
  //   { label: 'Known Blocks' },
  // http://localhost:3000/names/known_blocks/when+list&verbose
  //   { label: 'Dated Blocks' },
  // http://localhost:3000/names/dated_blocks/when+generate&verbose
  let query = currentPage().subpage;
  if (query === 'prefunds') query = 'prefund';
  else if (query === 'tokens') query = 'named';
  else if (query === 'wallets') query = 'owned';
  else if (query === 'yours') query = 'custom';
  query += '&verbose=10';
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
    });
  }, [query]);

  const [schema, setSchema] = useState(namesSchema);
  const [searchFields, setSearchFields] = useState(['address', 'name', 'group', 'symbol']);
  const subpage = currentPage().subpage;
  useEffect(() => {
    setSchema(subpage === 'groups' ? groupsSchema : namesSchema);
    setSearchFields(subpage === 'groups' ? ['group'] : ['address', 'name', 'group', 'symbol']);
  }, [subpage]);

  return (
    <div>
      <DataTable columns={schema} data={names} title={titleFromPage()} searchFields={searchFields} />
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
export const groupsSchema = [
  {
    name: 'Group',
    selector: 'group',
  },
];

//----------------------------------------------------------------------------
export const namesSchema = [
  {
    width: 3,
    name: 'Group',
    selector: 'group',
    type: 'string',
  },
  {
    width: 6,
    name: 'Address',
    selector: 'address',
    type: 'address',
  },
  {
    width: 4,
    name: 'Name',
    selector: 'name',
    type: 'string',
  },
  {
    width: 2,
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    align: 'center',
  },
  {
    width: 4,
    name: 'Source',
    selector: 'source',
    type: 'string',
  },
  {
    width: 2,
    name: 'Decimals',
    selector: 'decimals',
    type: 'number',
    align: 'center',
    hideZero: true,
  },
  {
    width: 4,
    name: 'Description',
    selector: 'description',
    type: 'string',
  },
];
