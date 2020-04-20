function getFieldValue(record, fieldName) {
  switch (fieldName) {
    case 'id':
      return record.blockNumber + '-' + record.transactionIndex;
    default:
      break;
  }
}

// auto-generate: schema
export const traceActionsSchema = [
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
    name: 'balance',
    selector: 'balance',
    type: 'wei',
  },
  {
    name: 'callType',
    selector: 'callType',
    type: 'string',
  },
  {
    name: 'from',
    selector: 'from',
    type: 'address',
  },
  {
    name: 'gas',
    selector: 'gas',
    type: 'gas',
  },
  {
    name: 'init',
    selector: 'init',
    type: 'string',
  },
  {
    name: 'input',
    selector: 'input',
    type: 'string',
  },
  {
    name: 'refundAddress',
    selector: 'refundAddress',
    type: 'address',
  },
  {
    name: 'to',
    selector: 'to',
    type: 'address',
  },
  {
    name: 'value',
    selector: 'value',
    type: 'wei',
  },
];
// auto-generate: schema
