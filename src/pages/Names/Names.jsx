import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { namesSchema, groupsSchema, useNames } from 'store/names';
import { DT } from 'components/DT';
import { currentPage, getServerData } from 'components/utils';
import './Names.css';

//---------------------------------------------------------------------------
export function Names() {
  const names = useNames().state;
  const dispatch = useNames().dispatch;

  console.log('names: ', names);
  console.log('schema: ', namesSchema);

  // { label: 'Your Names' },
  // http://localhost:3000/names/your_names/names+custom
  //   { label: 'Wallets' },
  // http://localhost:3000/names/wallets/names+owned
  //   { label: 'Tokens' },
  // http://localhost:3000/names/tokens/names+named
  //   { label: 'Other Names' },
  // http://localhost:3000/names/other_names/names+other
  //   { label: 'Groups' },
  // http://localhost:3000/names/groups/names+groups
  //   { label: 'Separator' },
  // { label: 'Separator' },
  // { label: 'Your Blocks' },
  // http://localhost:3000/names/your_blocks/when+list&verbose
  //   { label: 'Known Blocks' },
  // http://localhost:3000/names/known_blocks/when+list&verbose
  //   { label: 'Dated Blocks' },
  // http://localhost:3000/names/dated_blocks/when+generate&verbose
  let query = currentPage().subpage;
  if (query === 'prefunds')
    query = 'prefund';
  else if (query === 'tokens')
    query = 'named';
  else if (query === 'wallets')
    query = 'owned';
  else if (query.includes('your') && query.includes('names'))
    query = 'custom';
  else if (query.includes('other') && query.includes('names'))
    query = 'other'
  useEffect(() => {
    getServerData('http://localhost:8080/names', query)
      .then((theData) => {
        console.log('theData: ', theData);
        dispatch({ type: 'update', payload: theData })
      })
  }, [query]);

  const schema = currentPage().subpage === 'groups' ? groupsSchema : namesSchema;
  return (
    <div>
      <DT
        columns={schema}
        data={names}
        title={'Names'}
        pagination
        search
      />
    </div>
  );
}
