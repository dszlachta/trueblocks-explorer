import React from 'react';

import { Card, ObjectTable2 } from 'components';

import './Caddie.css';

//----------------------------------------------------
export const Caddie = ({ cn, title, cards, columns }) => {
  return (
    <div key={cn} className={cn}>
      <h4>{title}</h4>
      {cards.map((card) => {
        return (
          <Card key={card.id} title={card.name} headerLink={card.route} headerClass="card-center">
            <ObjectTable2 data={card} columns={columns} />
          </Card>
        );
      })}
    </div>
  );
};
