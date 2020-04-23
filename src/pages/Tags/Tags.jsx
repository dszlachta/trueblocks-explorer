import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable, ButtonCaddie } from 'components';
import { currentPage, getServerData, sortArray } from 'components/utils';
import { calcValue } from 'store';

import './Tags.css';

//---------------------------------------------------------------------------
export function Tags() {
return <div>Not here</div>
/*
  const { tags, dispatch } = useTags();
  const [schema, setSchema] = useState(tagsSchema);
  const [searchFields, setSearchFields] = useState(['tags']);
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

  let query = 'verbose=10&tags';
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
      setTag('all');
      setSubset('yours');
    });
  }, [query, dispatch]);

  const sorted = sortArray(tags, ['tags'], ['asc']);

  const subsets = ['yours', 'wallets', 'tokens', 'prefunds', 'other', 'all', 'tags'];
  const tagList = [
    ...new Set(sorted.map((item) => calcValue(item, { selector: 'firstTag', onDisplay: getFieldValue }))),
  ];
  tagList.unshift('all');

  const filtered = tags.filter((item) => {
    return curTag === 'all' || item.tags.includes(curTag);
  });

  return (
    <div>
      <ButtonCaddie name="Subsets" buttons={subsets} current={curSubset} action="set-subset" handler={changeOptions} />
      <ButtonCaddie name="Tags" buttons={tagList} current={curTag} action="set-tags" handler={changeOptions} />
      <DataTable
        data={filtered}
        columns={schema}
        title="Tags"
        search={true}
        searchFields={searchFields}
        pagination={true}
      />
    </div>
  );
*/
}

//----------------------------------------------------------------------
export const tagsDefault = [];

//----------------------------------------------------------------------
export const tagsReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload;
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('tagsState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useTags = () => {
  return useContext(GlobalContext).tags;
};

function getFieldValue(record, fieldName) {
  if (!record.tags) return '';
  const array = record.tags.split(':');
  switch (fieldName) {
    case 'id':
      return record.tags;
    case 'tags':
      return array.length > 0 ? array[0] : '';
    case 'subtag1':
      return array.length > 1 ? array[1] : '';
    case 'subtag2':
      return array.length > 2 ? array[2] : '';
    default:
      break;
  }
}

// auto-generate: schema
export const tagsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Tag',
    selector: 'tag',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Subtag 1',
    selector: 'subtag1',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Subtag 2',
    selector: 'subtag2',
    type: 'string',
    onDisplay: getFieldValue,
  },
];
// auto-generate: schema
