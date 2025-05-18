import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ image, title, description, id }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105  hover:shadow-xl transform hover:scale-[1.03] transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <p className="text-gray-600">{description.slice(0, 100)}...</p>
        
        <Link to={`/projects/${id}`} className="text-blue-500 hover:text-blue-700">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Cards;