function getFieldValue(record, fieldName) {
  const array = record.group.split(':');
  switch (fieldName) {
    case 'id':
      return record.group;
    case 'group':
      return array.length > 0 ? array[0] : '';
    case 'subgroup1':
      return array.length > 1 ? array[1] : '';
    case 'subgroup2':
      return array.length > 2 ? array[2] : '';
    default:
      break;
  }
}

// auto-generate: schema
export const groupsSchema = [
  {
    name: 'ID',
    selector: 'id',
    type: 'string',
    hidden: true,
    onDisplay: getFieldValue,
  },
  {
    name: 'Group',
    selector: 'group',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Subgroup 1',
    selector: 'subgroup1',
    type: 'string',
    onDisplay: getFieldValue,
  },
  {
    name: 'Subgroup 2',
    selector: 'subgroup2',
    type: 'string',
    onDisplay: getFieldValue,
  },
];
// auto-generate: schema
