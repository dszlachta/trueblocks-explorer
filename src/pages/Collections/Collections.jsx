import React, { Fragment, useContext, useEffect } from 'react';

import GlobalContext from 'store';

import { Card, ObjectTable } from 'components/';
import { sortArray, handleClick, notEmpty } from 'components/utils';
import { ToggleLeft, ToggleRight, Add, Edit, Delete, Undelete, Remove } from 'assets/icons/SetEdit';

import './Collections.css';

//----------------------------------------------------------------------------
export const Collections = () => {
  const { collections } = useCollections();

  useEffect(() => {
    sortArray(collections, ['deleted', 'group', 'name'], [true, true, true]);
  }, [collections]);

  const activeCollections = collections.filter((collection) => {
    return !collection.deleted;
  });
  const inactiveCollections = collections.filter((collection) => {
    return collection.deleted;
  });

  return (
    <div key="collections" className="collections">
      <CollectionList collections={activeCollections} title="Active Collections" />
      <CollectionList collections={inactiveCollections} title="Inactive Collections" />
    </div>
  );
};

//----------------------------------------------------------------------------
const Icon = ({ action, id, dispatch, deleted, color = '' }) => {
  const fill = deleted ? 'grey' : 'lightyellow';
  const col = deleted ? 'lightgrey' : color;
  const callBack = deleted ? null : (e) => handleClick(e, dispatch, { type: action, id: id });
  const callBack2 = (e) => handleClick(e, dispatch, { type: action, id: id });
  const noIcon = <div style={{ width: '22px' }}></div>;

  switch (action) {
    case 'toggle_on':
      return <ToggleLeft key={'i_' + id} fill={fill} color={col} onClick={callBack} />;
    case 'toggle_off':
      return <ToggleRight key={'i_' + id} fill={fill} color={col} onClick={callBack} />;
    case 'remove':
      return deleted ? <Remove size="18" onClick={callBack2} /> : noIcon;
    case 'edit':
      return deleted ? noIcon : <Edit size="18" onClick={callBack} />;
    case 'delete':
      return deleted ? <Undelete size="18" onClick={callBack2} /> : <Delete size="18" onClick={callBack2} />;
    default:
      break;
  }
  return <></>; //
};

//----------------------------------------------------------------------------
const CollectionList = ({ collections, title }) => {
  const { dispatch } = useCollections();

  return (
    <Fragment>
      {<h4>{title}</h4>}
      {collections.length === 0 ? (
        <Fragment>
          <div style={{ marginLeft: '2%', marginBottom: '2%' }}>[None]</div>
        </Fragment>
      ) : (
        collections.map((collection, idx) => {
          const route = collection.deleted ? '' : '/collections/view?id=' + collection.id;
          const cn = 'card-header ' + (collection.deleted ? 'deleted-collection' : '');

          const topIcon = (
            <Icon
              action={collection.monitored ? 'toggle_off' : 'toggle_on'}
              color={collection.monitored ? 'green' : 'red'}
              id={collection.id}
              dispatch={dispatch}
              deleted={collection.deleted}
            />
          );

          const removeIcon = (
            <Icon action="remove" id={collection.id} dispatch={dispatch} deleted={collection.deleted} />
          );
          const editIcon = <Icon action="edit" id={collection.id} dispatch={dispatch} deleted={collection.deleted} />;
          const deleteIcon = (
            <Icon action="delete" id={collection.id} dispatch={dispatch} deleted={collection.deleted} />
          );
          const iconTray = [editIcon, deleteIcon, removeIcon];

          return (
            <Card
              key={collection.id}
              title={collection.name}
              headerClass={cn}
              iconTray={iconTray}
              headerLink={route}
              topIcon={topIcon}
            >
              <ObjectTable data={collection} columns={collectionsSchema} />
            </Card>
          );
        })
      )}
    </Fragment>
  );
};

//----------------------------------------------------------------------
export const collectionsReducer = (state, action) => {
  let ret = state;
  let collection = ret.find((p) => p.id === action.id);
  switch (action.type) {
    case 'success':
      ret = action.payload;
      break;
    case 'toggle_monitor':
      collection.monitored = !collection.monitored;
      ret = replaceRecord(ret, collection, action.id);
      break;
    case 'toggle_on':
      collection.monitored = true;
      ret = replaceRecord(ret, collection, action.id);
      break;
    case 'toggle_off':
      collection.monitored = false;
      ret = replaceRecord(ret, collection, action.id);
      break;
    case 'delete':
      console.log(collection.deleted);
      collection.deleted = !collection.deleted;
      ret = replaceRecord(ret, collection, action.id);
      break;
    case 'edit':
      window.location = '/collections/edit?id=' + collection.id;
      break;
    case 'remove':
      ret = ret.filter((collection) => collection.id !== action.id);
      break;
    case 'reset':
      ret = collectionsDefault;
      break;
    case 'fail':
      break;
    default:
      break;
  }
  // TODO(tjayrush): this does not write to the back end
  localStorage.setItem('collectionsState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
const replaceRecord = (collections, record, id) => {
  var ret = collections.map((collection) => {
    if (collection.id === id) return record;
    return collection;
  });
  return ret;
};

//----------------------------------------------------------------------
export const useCollections = () => {
  return useContext(GlobalContext).collections;
};

//----------------------------------------------------------------------
export const collectionsDefault = [
  {
    id: '0x12..01',
    group: 'Group 1',
    name: 'Collection 1',
    client: { name: 'Anderson, Andy', phone: '215-257-9759' },
    addresses: [
      '0x5555533333555553333355555333335555533333',
      '0x654e7f49b474e2f5ac29cc5f2f0d41c8a93d6d0a',
      '0x807640a13483f8ac783c557fcdf27be11ea4ac7a',
      '0x9876543210987654321098765432109876543210',
      '0xb97073b754660bb356dfe12f78ae366d77dbc80f',
      '0xf503017d7baf7fbc0fff7492b751025c6a78179b',
      '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',
      '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed',
    ],
    txs: 2291,
    traces: 100,
    sizeInBytes: '1,201,019',
    deltas: 8,
    monitored: false,
    deleted: true,
  },
  {
    id: '0x12..02',
    group: 'Group 1',
    name: 'Collection 2',
    client: { name: "John's Bookstore" },
    addresses: ['0x001d14804b399c6ef80e64576f657660804fec0b'],
    txs: 1000,
    traces: 100,
    sizeInBytes: '899,100',
    deltas: 8,
    monitored: false,
    deleted: false,
  },
  {
    id: '0x12..03',
    group: '',
    name: 'Carson Flowers',
    client: '',
    addresses: [
      '0x001d14804b399c6ef80e64576f657660804fec0b',
      '0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb',
      '0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359',
      '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed',
    ],
    txs: 1000,
    traces: 100,
    sizeInBytes: 12010010,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..04',
    group: 'Group 1',
    name: 'May Construction',
    client: 'May John',
    addresses: [
      '0x001d14804b399c6ef80e64576f657660804fec0b',
      '0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb',
      '0x1111111111111111111111111111111111111111',
      '0x1111122222111112222211111222221111122222',
      '0x1234567812345678123456781234567812345678',
    ],
    txs: 1000,
    traces: 100,
    sizeInBytes: 110,
    deltas: 8,
    monitored: true,
    deleted: false,
  },
  {
    id: '0x12..05',
    group: 'Group 2',
    name: 'The Poetry Shop',
    client: 'Tudhope, Andy',
    addresses: ['0xfdecc82ddfc56192e26f563c3d68cb544a96bfed'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 100009102910291,
    deltas: 8,
    monitored: false,
    deleted: true,
  },
  {
    id: '0x12..06',
    group: 'Group 2',
    name: 'Maker DAO',
    client: 'Maker',
    addresses: ['0x001d14804b399c6ef80e64576f657660804fec0b', '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 1,
    deltas: 8,
    monitored: true,
    deleted: false,
  },
  {
    id: '0x12..07',
    group: 'Group 2',
    name: 'Whale Jim',
    client: 'Buter, in',
    addresses: ['0x001d14804b399c6ef80e64576f657660804fec0b', '0x005a9c03f69d17d66cbb8ad721008a9ebbb836fb'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 0,
    deltas: 8,
    monitored: true,
    deleted: true,
  },
  {
    id: '0x12..08',
    group: 'Group 3',
    name: 'Whale No. 2',
    client: 'Lub, in',
    addresses: ['0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359', '0xfdecc82ddfc56192e26f563c3d68cb544a96bfed'],
    txs: 1000,
    traces: 100,
    sizeInBytes: 1212101010,
    deltas: 8,
    monitored: false,
    deleted: false,
  },
];

//----------------------------------------------------------------------------
const validateUserInput = (fieldName, value) => {
  if (fieldName === 'group') return notEmpty(fieldName, value);
  return true;
};

//----------------------------------------------------------------------------
// auto-generate: schema
export const collectionsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Group',
    selector: 'group',
    type: 'string',
    editable: true,
    onValidate: validateUserInput,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    editable: true,
  },
  {
    name: 'Client',
    selector: 'client',
    type: 'CClient',
    editable: true,
  },
  {
    name: 'Address',
    selector: 'addresses',
    type: 'CAddressArray',
  },
  {
    name: 'Tx Count',
    selector: 'txs',
    type: 'uint64',
  },
  {
    name: 'Trace Count',
    selector: 'traces',
    type: 'uint64',
  },
  {
    name: 'Size',
    selector: 'sizeInBytes',
    type: 'filesize',
  },
  {
    name: 'Delta Count',
    selector: 'deltas',
    type: 'uint64',
  },
  {
    name: 'Monitored',
    selector: 'monitored',
    type: 'bool',
    hidden: true,
  },
  {
    name: 'Deleted',
    selector: 'deleted',
    type: 'bool',
    hidden: true,
  },
];
// auto-generate: schema
