function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const logsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
  },
  {
    name: 'Block Hash',
    selector: 'blockHash',
    type: 'hash',
  },
  {
    name: 'Block Number',
    selector: 'blockNumber',
    type: 'blknum',
  },
  {
    name: 'Data',
    selector: 'data',
    type: 'string',
  },
  {
    name: 'Log Index',
    selector: 'logIndex',
    type: 'blknum',
  },
  {
    name: 'Removed',
    selector: 'removed',
    type: 'bool',
  },
  {
    name: 'Topics',
    selector: 'topics',
    type: 'CTopicArray',
  },
  {
    name: 'Articulated Log',
    selector: 'articulatedLog',
    type: 'CFunction',
  },
  {
    name: 'Compressed Log',
    selector: 'compressedLog',
    type: 'string',
  },
  {
    name: 'Transaction Hash',
    selector: 'transactionHash',
    type: 'hash',
  },
  {
    name: 'Tx Index',
    selector: 'transactionIndex',
    type: 'blknum',
  },
  {
    name: 'Tx Log Index',
    selector: 'transactionLogIndex',
    type: 'blknum',
  },
  {
    name: 'Type',
    selector: 'type',
    type: 'string',
  },
];
// auto-generate: schema
