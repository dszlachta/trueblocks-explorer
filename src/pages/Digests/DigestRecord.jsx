function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.bn + '.' + record.tx + 'record.tc';
    default:
      break;
  }
}

// auto-generate: schema
export const digestRecordSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Block Number',
    selector: 'bn',
    type: 'blknum',
    searchable: true,
  },
  {
    name: 'Transaction ID',
    selector: 'tx',
    type: 'blknum',
  },
  {
    name: 'Trace ID',
    selector: 'tc',
    type: 'blknum',
  },
  {
    name: 'Address',
    selector: 'addr',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Reason',
    selector: 'reason',
    type: 'string',
    searchable: true,
  },
];
// auto-generate: schema
