import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable, ButtonCaddie } from 'components';
import { currentPage, getServerData, sortArray } from 'components/utils';
import { groupsSchema } from './NamesGroups';
import './Names.css';

//---------------------------------------------------------------------------
export function Names() {
  const { names, dispatch } = useNames();
  const subpage = currentPage().subpage;
  const [group, setGroup] = useState('');

  const changeGroup = (action) => {
    switch (action.type) {
      case 'change-group':
        if (action.payload === 'clear') {
          localStorage.setItem('current-group', '');
          setGroup('');
        } else {
          localStorage.setItem('current-group', action.payload);
          setGroup(action.payload);
        }
        break;
      default:
        break;
    }
  };

  const changeSubset = (action) => {
    window.location = '/names/' + action.payload;
  };

  let query = subpage;
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
      setGroup('');
    });
  }, [query, dispatch]);

  const [schema, setSchema] = useState(namesSchema);
  const [searchFields, setSearchFields] = useState(['address', 'name', 'group', 'symbol']);
  useEffect(() => {
    setSchema(subpage === 'groups' ? groupsSchema : namesSchema);
    setSearchFields(subpage === 'groups' ? ['group'] : ['address', 'name', 'group', 'symbol']);
  }, [subpage]);

  const sorted = sortArray(names, ['group'], ['asc']);
  const groups = [...new Set(sorted.map((item) => item.group))];
  groups.unshift('clear');
  const subsets = ['yours', 'wallets', 'tokens', 'prefunds', 'other', 'groups'];
  const filtered = names.filter((item) => {
    return group === '' || item.group === group;
  });

  return (
    <div>
      <ButtonCaddie
        name="Subsets"
        buttons={subsets}
        current={currentPage().subpage !== '' ? currentPage().subpage : subsets[0]}
        action="change-subset"
        handler={changeSubset}
      />
      <ButtonCaddie
        name="Groups"
        buttons={groups}
        current={group !== '' ? group : groups[0]}
        action="change-group"
        handler={changeGroup}
      />
      <DataTable
        data={filtered}
        columns={schema}
        title="Names View"
        search={true}
        searchFields={searchFields}
        pagination={true}
      />
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

export { groupsSchema };

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
    hidden: true,
  },
  {
    name: 'isPrefund',
    selector: 'is_prefund',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'nAppearances',
    selector: 'nAppearances',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Last Export',
    selector: 'lastExport',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'First Appearance',
    selector: 'firstAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Latest Appearance',
    selector: 'latestAppearance',
    type: 'blknum',
    hidden: true,
  },
  {
    name: 'Path',
    selector: 'path',
    type: 'string',
    hidden: true,
  },
  {
    name: 'size',
    selector: 'sizeInBytes',
    type: 'filesize',
    hidden: true,
  },
];
// auto-generate: schema
