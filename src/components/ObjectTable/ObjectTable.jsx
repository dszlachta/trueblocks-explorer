import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

export const ObjectTable = ({ data, fields }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 8fr 1fr 1fr 20fr 2fr' }}>
      {fields.map(key => {
        if (key === 'id')
          return true;
        let value = data[key];
        if (value === '') {
          if (key === 'sharedTo')
            value = 'Not shared';
        }
        if (key === 'deleted' || key === 'monitored')
          value = (value ? 'true' : 'false');
        return (
          <Fragment key={key}>
            <div style={{ backgroundColor: 'lightgrey' }}></div>
            <div align="right" style={{ backgroundColor: 'lightgrey' }}><div style={{ textDecorate: 'none' }}>{key}:</div></div>
            <div style={{ backgroundColor: 'lightgrey' }}></div>
            <div></div>
            <div align="left" width="40%"><div style={{ textDecorate: 'none' }}>{value}</div></div>
            <div></div>
          </Fragment>
        );
      })}
    </div>
  );
}