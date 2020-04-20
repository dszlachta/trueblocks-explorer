function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const tracesSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'blockHash',
    selector: 'blockHash',
    type: 'hash',
  },
  {
    name: 'blockNumber',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'subtraces',
    selector: 'subtraces',
    type: 'uint64',
  },
  {
    name: 'traceAddress',
    selector: 'traceAddress',
    type: 'CStringArray',
  },
  {
    name: 'transactionHash',
    selector: 'transactionHash',
    type: 'hash',
  },
  {
    name: 'transactionIndex',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'type',
    selector: 'type',
    type: 'string',
  },
  {
    name: 'error',
    selector: 'error',
    type: 'string',
  },
  {
    name: 'articulatedTrace',
    selector: 'articulatedTrace',
    type: 'CFunction',
  },
  {
    name: 'compressedTrace',
    selector: 'compressedTrace',
    type: 'string',
  },
  {
    name: 'action',
    selector: 'action',
    type: 'CTraceAction',
  },
  {
    name: 'result',
    selector: 'result',
    type: 'CTraceResult',
  },
];
// auto-generate: schema
