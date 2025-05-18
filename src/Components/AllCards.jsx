import React from 'react';
import Cards from './Cards';
import { cardData } from '../Data/cardData';
import { Link } from 'react-router-dom';

function AllCards() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {cardData.map((card) => (
        <div key={card.id} className="p-10 mt-10">
        
          <Cards
            id={card.id}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        
        </div>
      ))}
    </div>
  );
}

export default AllCards;
