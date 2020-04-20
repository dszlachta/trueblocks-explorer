function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const parametersSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'type',
    selector: 'type',
    type: 'string',
  },
  {
    name: 'name',
    selector: 'name',
    type: 'string',
  },
  {
    name: 'str_default',
    selector: 'str_default',
    type: 'string',
  },
  {
    name: 'value',
    selector: 'value',
    type: 'string',
  },
  {
    name: 'indexed',
    selector: 'indexed',
    type: 'bool',
  },
  {
    name: 'no_write',
    selector: 'no_write',
    type: 'bool',
  },
  {
    name: 'is_flags',
    selector: 'is_flags',
    type: 'uint64',
  },
];
// auto-generate: schema
