import React, { useEffect, useState, useRef } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable, ButtonCaddie } from 'components';
import { getServerData, sortArray } from 'components/utils';
import { useTags } from 'pages/Tags/Tags';
import { calcValue } from 'store';

import './Names.css';

//---------------------------------------------------------------------------
export function Names() {
  const { names, dispatch } = useNames();
  const [tagList, setTagList] = useState([]);
  const [searchFields, setSearchFields] = useState(['tags', 'address', 'name']);
  const [curTag, setTag] = useState('all');

  const changeOptions = (action) => {
    switch (action.type) {
      case 'set-tags':
        setTag(action.payload);
        break;
      default:
        break;
    }
  };

  let query = 'verbose=10&all';
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      const sorted = sortArray(theData, [['tags', 'address', 'name']], ['asc', 'asc', 'asc']);
      dispatch({ type: 'update', payload: sorted });
      const tagList = [
        ...new Set(sorted.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue }))),
      ];
      tagList.unshift('all');
      setTagList(tagList);
    });
  }, [query, dispatch]);

  const filtered = names.filter((item) => {
    return curTag === 'all' || item.tags.includes(curTag);
  });

  //  const [curSubset, setSubset] = useState('yours');
  //  const subsets = ['yours', 'wallets', 'tokens', 'prefunds', 'other', 'all', 'tags'];
  //      <ButtonCaddie name="Subsets" buttons={subsets} current={curSubset} action="set-subset" handler={changeOptions} />
  return (
    <div>
      {tagList.length ? (
        <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={changeOptions} />
      ) : null}
      <DataTable
        data={filtered}
        columns={namesSchema}
        title="Names"
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
    case 'tags':
      const array = record.tags.split(':');
      return array.length > 0 ? array[0] : '';
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
    name: 'Tags',
    selector: 'tags',
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
