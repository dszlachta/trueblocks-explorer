import React from 'react';

import { Card, ObjectTable } from 'components';
import { calcValue } from 'store';

import './Caddie.css';

//----------------------------------------------------
export const Caddie = ({ cn, title, cards, columns }) => {
  const idCol = columns.filter((c) => {
    return c.selector === 'id';
  })[0];

  return (
    <div className={cn}>
      <h4>{title}</h4>
      {cards.map((card) => {
        return (
          <Card key={calcValue(card, idCol)} title={card.name} headerLink={card.route} headerClass="card-center">
            <ObjectTable data={card} columns={columns} />
          </Card>
        );
      })}
    </div>
  );
};
