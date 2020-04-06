import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { signaturesSchema, useSignatures } from 'store/signatures';
import { DT } from 'components/DT';
import { DataTable, createTheme } from 'components/';
import { currentPage, getServerData, handleClick } from 'components/utils';
import './Signatures.css';

//---------------------------------------------------------------------------
export function Signatures() {
  const [pagination, setPagination] = useState(true);
  const [search, setSearch] = useState(true);
  const [title, setTitle] = useState('The Title');
  const [noHeader, setNoHeader] = useState(false);
  const [filterText, setFilterText] = useState('0xa');
  const dispatch = useSignatures().dispatch;
  const sigs = useSignatures().state;

  const source = currentPage().subpage;
  const query = (source === '' ? 'monitored&known' : source);
  useEffect(() => {
    getServerData('http://localhost:8080/abi', query)
      .then((theData) => {
        dispatch({ type: 'update', payload: theData })
      }
      );
  }, [source]);

  const filteredItems = sigs.filter(item => item.encoding && item.encoding.includes(filterText));

  return (
    <div>
      <button onClick={() => setSearch(!search)}>search</button>
      <button onClick={() => setTitle(title === '' ? 'The Title' : '')}>title</button>
      <button onClick={() => setPagination(!pagination)}>paginate</button>
      <button onClick={() => setNoHeader(!noHeader)}>header</button>
      <DT
        columns={signaturesSchema}
        data={filteredItems}
        title={title}
        pagination={pagination}
        search={search}
        noHeader={noHeader}
      />
      {/* <DataTable
        columns={signaturesSchema}
        data={filteredItems}
        key="sig_data_table" theme="solarized"
        keyField="encoding" defaultSortField="encoding"
        noHeader expandableRows
        fixedHeader pagination
      /> */}
    </div>
  );
}

/*
ort React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import Button from '../shared/Button';
import DataTable from '../../../src/index';

const createUser = () => ({
  id: faker.random.uuid(),
  name: faker.name.findName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  bio: faker.lorem.sentence(),
  image: faker.image.avatar(),
});

const createUsers = (numUsers = 5) =>
  new Array(numUsers).fill(undefined).map(createUser);

const fakeUsers = createUsers(2000);

const ClearButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 34px;
  width: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField id="search" type="text" placeholder="Filter By Name" value={filterText} onChange={onFilter} />
    <ClearButton type="button" onClick={onClear}>X</ClearButton>
  </>
);

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'Address',
    selector: 'address',
    sortable: true,
  },
];

const BasicTable = () => {
  const [filterText, setFilterText] = React.useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
  const filteredItems = fakeUsers.filter(item => item.name && item.name.includes(filterText));

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      title="Contact List"
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows
      persistTableHead
    />
  );
};

storiesOf('Filtering', module)
  .add('Example 1', () => <BasicTable />);
  */