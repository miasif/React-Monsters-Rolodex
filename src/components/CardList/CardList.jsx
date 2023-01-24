import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
