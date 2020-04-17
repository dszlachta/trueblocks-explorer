// auto-generate: schema
export const groupsSchema = [
  {
    name: 'ID',
    selector: 'id',
    hidden: true,
    function: (record) => {
      return record.group;
    }
  },
  {
    name: 'Group',
    selector: 'group',
    function: (record) => {
      const array = record.group.split(':');
      return array[0];
    }
  },
  {
    name: 'Subgroup 1',
    selector: 'subgroup1',
    function: (record) => {
      const array = record.group.split(':');
      return array.length > 1 ? array[1] : '';
    }
  },
  {
    name: 'Subgroup 2',
    selector: 'subgroup2',
    function: (record) => {
      const array = record.group.split(':');
      return array.length > 2 ? array[2] : '';
    }
  }
];
// auto-generate: schema
