import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable, ButtonCaddie } from 'components';
import { currentPage, getServerData, sortArray } from 'components/utils';
import { calcValue } from 'store';

import './Names.css';

//---------------------------------------------------------------------------
export function Names() {
return <div>NOT HERE</div>
/*
  const { names, dispatch } = useNames();
  const [schema, setSchema] = useState(namesSchema);
  const [searchFields, setSearchFields] = useState(['address', 'name', 'tags', 'symbol']);
  const [curTag, setTag] = useState('all');
  const [curSubset, setSubset] = useState('yours');

  const changeOptions = (action) => {
    switch (action.type) {
      case 'set-tags':
        setTag(action.payload);
        break;
      case 'set-subset':
        setSubset(action.payload);
        break;
      default:
        break;
    }
  };

  const subpage = currentPage().subpage;
  useEffect(() => {
    setSchema(namesSchema);
    setSearchFields(['address', 'name', 'tags', 'symbol']);
  }, [subpage]);

  let query = 'verbose=10&' + (subpage || 'all');
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
      setTag('all');
      setSubset('yours');
    });
  }, [query, dispatch]);

  const sorted = sortArray(names, ['tagz'], ['asc']);

  const subsets = ['yours', 'wallets', 'tokens', 'prefunds', 'other', 'all', 'tags'];

  const tags = [...new Set(sorted.map((item) => calcValue(item, { selector: 'firstTag', onDisplay: getFieldValue })))];
  tags.unshift('all');

  const filtered = names.filter((item) => {
    return curTag === 'all' || item.tag.includes(curTag);
  });

  return (
    <div>
      <ButtonCaddie name="Subsets" buttons={subsets} current={curSubset} action="set-subset" handler={changeOptions} />
      <ButtonCaddie name="Tags" buttons={tags} current={curTag} action="set-tag" handler={changeOptions} />
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
*/
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
    case 'firstTag':
      const arr = record.tag.split(':');
      return arr.length ? arr[0] : '';
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
    name: 'Tag',
    selector: 'tag',
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
