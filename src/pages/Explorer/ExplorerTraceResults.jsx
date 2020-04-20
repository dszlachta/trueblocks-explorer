function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const traceResultsSchema = [
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
    name: 'code',
    selector: 'code',
    type: 'string',
  },
  {
    name: 'gasUsed',
    selector: 'gasUsed',
    type: 'gas',
  },
  {
    name: 'output',
    selector: 'output',
    type: 'string',
  },
];
// auto-generate: schema
