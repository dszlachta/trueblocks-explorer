function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber;
    default:
      break;
  }
}

// auto-generate: schema
export const appearancesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'bn',
    selector: 'bn',
    type: 'blknum',
  },
  {
    name: 'tx',
    selector: 'tx',
    type: 'blknum',
  },
  {
    name: 'tc',
    selector: 'tc',
    type: 'blknum',
  },
  {
    name: 'addr',
    selector: 'addr',
    type: 'address',
  },
  {
    name: 'reason',
    selector: 'reason',
    type: 'string',
  },
];
// auto-generate: schema
