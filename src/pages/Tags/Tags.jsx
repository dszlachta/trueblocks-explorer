import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable, ButtonCaddie } from 'components';
import { getServerData, sortArray, sortStrings } from 'components/utils';
import { calcValue } from 'store';

import './Tags.css';

//---------------------------------------------------------------------------
export function Tags() {
  const { tags, dispatch } = useTags();

  const [searchFields, setSearchFields] = useState(['tags', 'subtags1', 'subtags2']);
  const [tagList, setTagList] = useState('');
  const [curTag, setTag] = useState('All');

  const changeOptions = (action) => {
    switch (action.type) {
      case 'set-tags':
        setTag(action.payload);
        break;
      //      case 'set-subset':
      //        setSubset(action.payload);
      //        break;
      default:
        break;
    }
  };

  let query = 'verbose=10&tags';
  const url = 'http://localhost:8080/names';
  useEffect(() => {
    getServerData(url, query).then((theData) => {
      const sorted = sortArray(theData, [['tags', 'subtags1', 'subtags2']], ['asc', 'asc', 'asc']);
      dispatch({ type: 'update', payload: sorted });
      //      setTag('All');
      //      setSubset('yours');
      let tagList = [...new Set(sorted.map((item) => calcValue(item, { selector: 'tags', onDisplay: getFieldValue })))];
      tagList = sortStrings(tagList, true);
      tagList.unshift('All');
      setTagList(tagList);
    });
  }, [query, dispatch]);

  const filtered = tags.filter((item) => {
    return curTag === 'All' || item.tags.includes(curTag);
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
        columns={tagsSchema}
        title="Tags"
        search={true}
        searchFields={searchFields}
        pagination={true}
      />
    </div>
  );
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
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Subtags 1',
    selector: 'subtags1',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Subtags 2',
    selector: 'subtags2',
    type: 'string',
    onDisplay: getFieldValue,
  },
];
// auto-generate: schema
