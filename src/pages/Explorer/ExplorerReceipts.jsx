function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const receiptsSchema = [
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
    name: 'contractAddress',
    selector: 'contractAddress',
    type: 'address',
  },
  {
    name: 'cumulativeGasUsed',
    selector: 'cumulativeGasUsed',
    type: 'wei',
  },
  {
    name: 'from',
    selector: 'from',
    type: 'address',
  },
  {
    name: 'gasUsed',
    selector: 'gasUsed',
    type: 'gas',
  },
  {
    name: 'logs',
    selector: 'logs',
    type: 'CLogEntryArray',
  },
  {
    name: 'logsBloom',
    selector: 'logsBloom',
    type: 'string',
  },
  {
    name: 'root',
    selector: 'root',
    type: 'bytes32',
  },
  {
    name: 'status',
    selector: 'status',
    type: 'uint32',
  },
  {
    name: 'to',
    selector: 'to',
    type: 'address',
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
];
// auto-generate: schema
