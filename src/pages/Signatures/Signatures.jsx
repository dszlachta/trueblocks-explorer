import React, { useEffect } from 'react';
import { useContext } from 'react';

import GlobalContext from 'store';

import { DataTable } from 'components';
import { currentPage, getServerData } from 'components/utils';

import './Signatures.css';

//---------------------------------------------------------------------------
export function Signatures() {
  const dispatch = useSignatures().dispatch;
  const signatures = useSignatures().state;

  const source = currentPage().subpage;
  const query = (source === '' ? 'monitored&known' : source) + '&verbose=10';
  useEffect(() => {
    getServerData('http://localhost:8080/abi', query).then((theData) => {
      dispatch({ type: 'update', payload: theData });
    });
  }, [source, dispatch, query]);

  return (
    <DataTable title="" columns={signaturesSchema} data={signatures} searchFields={['encoding', 'type', 'name']} />
  );
}

//----------------------------------------------------------------------
export const signaturesDefault = [];

//----------------------------------------------------------------------
export const signaturesReducer = (state, action) => {
  let ret = state;
  switch (action.type) {
    case 'update':
      ret = action.payload.filter((item) => item.type !== 'constructor');
      break;
    default:
    // do nothing
  }
  // TODO(tjayrush): this data is on the backend -- we do not store it locally
  // localStorage.setItem('signaturesState', JSON.stringify(ret));
  return ret;
};

//----------------------------------------------------------------------
export const useSignatures = () => {
  return useContext(GlobalContext).signatures;
};

//----------------------------------------------------------------------------
// auto-generate: schema
export const signaturesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    width: 1,
    function: (record) => {
      return record.encoding;
    }
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'short_hash',
    width: 1
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    width: 1,
    pill: true
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    width: 2
  },
  {
    name: 'Signature',
    selector: 'signature',
    type: 'string',
    hidden: true,
    width: 2
  },
  {
    name: 'Input Names',
    selector: 'inputs',
    type: 'string',
    hidden: true,
    width: 2,
    function: (record) => {
      return processRecord(record, 'inputs');
    }
  },
  {
    name: 'Output Names',
    selector: 'outputs',
    type: 'string',
    hidden: true,
    width: 2,
    function: (record) => {
      return processRecord(record, 'outputs');
    }
  },
  {
    name: 'Signature',
    selector: 'function',
    type: 'string',
    width: 6,
    function: (record) => {
      return processRecord(record, 'signature');
    }
  }
];
// auto-generate: schema

function processRecord(record, fieldName) {
  switch (fieldName) {
    case 'outputs':
    case 'inputs': {
      const value = record[fieldName];
      if (!value || !value.length) return '';
      return value
        .map((item) => {
          return item.name;
        })
        .join(',');
    }
    case 'signature': {
      const value = record['inputs'];
      if (!value || !value.length) return '';
      let str = '';
      const sig = record['signature'];
      if (sig && sig !== undefined && sig.contains && sig.contains(')')) {
        const types = record['signature'].replace(')', '').split('(')[1].split(',');
        str = value
          .map((item, index) => {
            return types[index] + ' ' + item.name;
          })
          .join(', ');
      } else {
        str = sig;
      }
      return record.name + '(' + str + ')';
    }
    default:
      break;
  }
}
