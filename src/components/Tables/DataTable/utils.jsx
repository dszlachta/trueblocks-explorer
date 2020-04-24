/**
 * hasField - returns true if the given field is found columns, false otherwise
 *
 * @param {array} columns - list of columns in the data table
 * @param {string} field - column to find
 */
function hasField(columns, field) {
  return (
    columns.filter((item) => {
      return item.selector === field;
    }).length > 0
  );
}

/**
 * hasFields - returns true if all fields are found columns, false otherwise
 *
 * @param {array} columns - list of columns in the data table
 * @param {array} fields - an array of strings listing field names
 */
export function hasFields(columns, fields) {
  if (!fields) return false;
  return (
    fields.reduce((sum, field) => {
      return sum + hasField(columns, field);
    }, 0) === fields.length
  );
}

/**
 * matches - returns true if the object matches filterText on any field in fields
 *
 * @param {object} record - the data object to search
 * @param {array} fields - the list of fields to search (assumes hasFields returns true)
 * @param {string} filterText - the text to search for
 */
export function matches(record, fields, filterText) {
  return (
    fields.reduce((sum, field) => {
      return sum + record[field].toLowerCase().includes(filterText);
    }, 0) > 0
  );
}

/**
 * widthsFromColumns - scan an array of columns and return column widths - we don't count 'icons' type
 *
 * @param {array} columns - the list of columns in the table
 * @param {bool} showHidden - include or do not include hidden columns in return value
 */
export function widthsFromColumns(columns, showHidden) {
  let totalWidth = columns.reduce((sum, column) => {
    const hidden = (column.hidden && !showHidden) || column.type === 'icons';
    const width = column.width || 1;
    return sum + (hidden ? 0 : width);
  }, 0);

  let hasIcons = false;
  let iconWidth = 3;
  const ret = columns.map((column) => {
    const hidden = (column.hidden && !showHidden) || column.type === 'icons';
    hasIcons = hasIcons || column.type === 'icons';
    iconWidth = column.type === 'icons' && column.width ? column.width : iconWidth;
    if (hidden) return '';
    const width = column.width || 1;
    return Math.floor((width / totalWidth) * 64) + 'fr ';
  });
  if (hasIcons) ret.push(' ' + iconWidth + 'fr');
  return ret;
}
