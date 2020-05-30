function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const functionsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Anonymous',
    selector: 'anonymous',
    type: 'bool',
  },
  {
    name: 'Constant',
    selector: 'constant',
    type: 'bool',
  },
  {
    name: 'Payable',
    selector: 'payable',
    type: 'bool',
    searchable: true,
  },
  {
    name: 'Signature',
    selector: 'signature',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Encoding',
    selector: 'encoding',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Message',
    selector: 'message',
    type: 'string',
  },
  {
    name: 'Inputs',
    selector: 'inputs',
    type: 'CParameterArray',
  },
  {
    name: 'Outputs',
    selector: 'outputs',
    type: 'CParameterArray',
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    searchable: true,
  },
];
// auto-generate: schema
