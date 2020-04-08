import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { namesSchema, groupsSchema, useNames } from './store';
import { DataTable } from 'components/DataTable';
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
