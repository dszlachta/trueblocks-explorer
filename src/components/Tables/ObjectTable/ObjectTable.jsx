import React, { Fragment, useState } from 'react';

import { Editable, Tablebar } from 'components';
import { formatFieldByType, handleClick } from 'components/utils';
import { calcValue, getPrimaryKey } from 'store';

import './ObjectTable.css';

//-----------------------------------------------------------------
export const ObjectTable = ({
  data,
  columns,
  title = '',
  search = false,
  searchFields = [],
  pagination = false,
  arrowsOnly = false,
  showHidden = false,
  buttonList = [],
  handler = null,
}) => {
  const [filterText] = useState('');

  const idCol = getPrimaryKey(columns);
  if (!idCol) return <div className="warning">The data schema does not contain a primary key</div>;

  const id = calcValue(data, idCol);
  const warn = buttonList.length > 0 && !handler && <div className="warning">buttonList handler not found</div>;
  const buttons = buttonList && (
    <div style={{ padding: '0px !important', marginTop: '-4px' }}>
      {buttonList.map((item) => {
        return (
          <Fragment>
            {warn}
            <button onClick={(e) => handleClick(e, handler, { type: 'button-click', payload: item, id: id })}>
              {item}
            </button>
            <br />
          </Fragment>
        );
      })}
    </div>
  );

  const tableBar = (title !== '' || pagination) && (
    <Tablebar
      title={title}
      search={search}
      filterText={filterText}
      searchFields={searchFields}
      pagination={pagination}
      pagingCtx={{ curPage: 0, arrowsOnly: arrowsOnly }}
      handler={handler}
    />
  );

  return (
    <div className="ot-container">
      {tableBar}
      <div className={'ot-body' + (buttonList.length > 0 ? '-withbuttons' : '')}>
        <div className="at-body">
          {columns.map((column, index) => {
            // note: in the object table 'columns' renders as rows
            const value = calcValue(data, column);

            if (!showHidden && column.hidden) return null;
            if (!showHidden && value === '') return null;

            const fieldName = column.name || column.selector;
            const fieldType = column.type || 'string';
            const formatted = formatFieldByType(fieldType, value, column.decimals || 0);
            const key = id + '_' + column.selector;
            return (
              <div key={key} className="at-row ot-row">
                <ObjectTableSider>{fieldName + ':'}</ObjectTableSider>
                <ObjectTableColumn column={column}>
                  {/*column.editable && !column.onAccept && (
                    <div className="warning">Editable field '{column.selector}' does not have an onAccept function</div>
                  )*/}
                  <Editable
                    fieldValue={formatted}
                    editable={column.editable}
                    fieldName={column.selector}
                    placeholder={column.selector}
                    onValidate={column.onValidate}
                    onAccept={column.onAccept}
                  />
                </ObjectTableColumn>
              </div>
            );
          })}
        </div>
        {buttons}
      </div>
    </div>
  );
};

//-----------------------------------------------------------------
const ObjectTableSider = ({ children }) => {
  return (
    <Fragment>
      <div className="base-header at-sider">{children}</div>
    </Fragment>
  );
};

//-----------------------------------------------------------------
export const ObjectTableColumn = ({ column, children }) => {
  const { align, editable } = column;
  let cn = 'ot-cell' + (editable ? ' editable' : '') + (align === 'wordwrap' ? ' ' : ' nowrap');
  return (
    <div className={cn} align="left">
      {children}
    </div>
  );
};
