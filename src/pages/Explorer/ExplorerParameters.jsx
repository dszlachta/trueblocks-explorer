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
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Name',
    selector: 'name',
    type: 'string',
    searchable: true,
  },
  {
    name: 'Str Default',
    selector: 'str_default',
    type: 'string',
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'string',
  },
  {
    name: 'Indexed',
    selector: 'indexed',
    type: 'bool',
  },
  {
    name: 'No Write',
    selector: 'no_write',
    type: 'bool',
  },
  {
    name: 'isFlags',
    selector: 'is_flags',
    type: 'uint64',
  },
];
// auto-generate: schema
