import React from 'react';

import { Modal, ObjectTable } from 'components';

export const AddName = ({ showing, handler, object }) => {
  return (
    <Modal showing={showing} handler={handler}>
      {/* prettier-ignore */}
      <ObjectTable
            data={{...object, tags: 'MyTags'}}
            columns={editNameSchema}
            title="Add Name"
            showHidden={false}
            asForm={true}
          />
    </Modal>
  );
};

export const EditName = ({ showing, handler, object }) => {
  return (
    <Modal showing={showing} handler={handler}>
      {/* prettier-ignore */}
      <ObjectTable
            data={object}
            columns={editNameSchema}
            title="Edit Name"
            editable={true}
            showHidden={false}
          />
    </Modal>
  );
};

//----------------------------------------------------------------------------
// auto-generate: schema
const editNameSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
  },
  {
    name: 'Tags',
    selector: 'tags',
    type: 'string',
    width: 3,
    editable: true,
    searchable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    width: 6,
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 4,
    editable: true,
    searchable: true,
  },
  {
    name: 'Symbol',
    selector: 'symbol',
    type: 'string',
    width: 2,
    editable: true,
    align: 'center',
    searchable: true,
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
    searchable: true,
  },
];
// auto-generate: schema
