function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const pricesourcesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    width: 1,
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'url',
    selector: 'url',
    type: 'string',
    width: 1,
    searchable: true,
  },
  {
    name: 'pair',
    selector: 'pair',
    type: 'string',
    width: 1,
    searchable: true,
  },
];
// auto-generate: schema
  