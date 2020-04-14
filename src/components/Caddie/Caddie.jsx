import React, { Fragment } from 'react';

import { Card, ObjectTable } from 'components';
import { calcValue } from 'store';

import './Caddie.css';

//----------------------------------------------------
export const Caddie = ({ cn = 'caddie', title, cards, columns, noSider = false }) => {
  const idCol = columns.filter((c) => {
    return c.selector === 'id';
  })[0];
  const nameCol = columns.filter((c) => {
    return c.selector === 'name';
  })[0];
  const routeCol = columns.filter((c) => {
    return c.selector === 'route';
  })[0];

  return (
    <div className={cn}>
      <h4>{title}</h4>
      {cards.map((card) => {
        const id = calcValue(card, idCol);
        const title = calcValue(card, nameCol);
        const route = calcValue(card, routeCol);
        return title === 'Separator' ? (
          <Fragment></Fragment>
        ) : (
          <Card key={id} title={title} headerLink={route} headerClass="card-center">
            <ObjectTable data={card} columns={columns} noSider={noSider} />
          </Card>
        );
      })}
    </div>
  );
};
