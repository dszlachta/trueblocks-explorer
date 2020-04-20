function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const abisSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'address',
    selector: 'address',
    type: 'address',
  },
  {
    name: 'interfaces',
    selector: 'interfaces',
    type: 'CFunctionArray',
  },
];
// auto-generate: schema
