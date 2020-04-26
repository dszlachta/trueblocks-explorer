function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const pricequotesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'date',
    selector: 'date',
    type: 'date',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'timestamp',
    selector: 'timestamp',
    type: 'timestamp',
  },
  {
    name: 'close',
    selector: 'close',
    type: 'double',
  },
];
// auto-generate: schema
