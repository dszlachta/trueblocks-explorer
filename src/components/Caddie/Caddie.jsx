import React from 'react';

import { Card, ObjectTable } from 'components';

import './Caddie.css';

//----------------------------------------------------
export const Caddie = ({ cn, title, cards, columns, displayFunc }) => {
  return (
    <div key={cn} className={cn}>
      <h4>{title}</h4>
      {cards.map((card) => {
        return (
          <Card key={card.id} title={card.name} headerLink={card.route} headerClass="card-center">
            <ObjectTable data={card} columns={columns} displayFunc={displayFunc} />
          </Card>
        );
      })}
    </div>
  );
};
