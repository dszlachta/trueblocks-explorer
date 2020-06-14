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
    searchable: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Address',
    selector: 'address',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Balance',
    selector: 'balance',
    type: 'wei',
  },
  {
    name: 'Call Type',
    selector: 'callType',
    type: 'string',
    searchable: true,
  },
  {
    name: 'From',
    selector: 'from',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Gas',
    selector: 'gas',
    type: 'gas',
  },
  {
    name: 'Init',
    selector: 'init',
    type: 'string',
  },
  {
    name: 'Input',
    selector: 'input',
    type: 'string',
  },
  {
    name: 'Refund Address',
    selector: 'refundAddress',
    type: 'address',
    searchable: true,
  },
  {
    name: 'To',
    selector: 'to',
    type: 'address',
    searchable: true,
  },
  {
    name: 'Value',
    selector: 'value',
    type: 'wei',
  },
];
// auto-generate: schema
  