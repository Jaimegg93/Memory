import React from 'react';
import './Card.css';

function Card({ card, onClick }) {
  const handleClick = () => {
    if (!card.flipped && !card.matched) {
      onClick(card);
    }
  };

  return (
    <div className={`card ${card.flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-front">
        {card.value}
      </div>
      <div className="card-back">
        ?
      </div>
    </div>
  );
}

export default Card;
