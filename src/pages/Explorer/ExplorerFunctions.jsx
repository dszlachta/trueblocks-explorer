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
    onDisplay: getFieldValue,
  },
  {
    name: 'name',
    selector: 'name',
    type: 'string',
  },
  {
    name: 'type',
    selector: 'type',
    type: 'string',
  },
  {
    name: 'anonymous',
    selector: 'anonymous',
    type: 'bool',
  },
  {
    name: 'constant',
    selector: 'constant',
    type: 'bool',
  },
  {
    name: 'payable',
    selector: 'payable',
    type: 'bool',
  },
  {
    name: 'signature',
    selector: 'signature',
    type: 'string',
  },
  {
    name: 'encoding',
    selector: 'encoding',
    type: 'string',
  },
  {
    name: 'message',
    selector: 'message',
    type: 'string',
  },
  {
    name: 'inputs',
    selector: 'inputs',
    type: 'CParameterArray',
  },
  {
    name: 'outputs',
    selector: 'outputs',
    type: 'CParameterArray',
  },
  {
    name: 'address',
    selector: 'address',
    type: 'address',
  },
];
// auto-generate: schema
