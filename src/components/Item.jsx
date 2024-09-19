import React from 'react';
import { Link } from 'react-router-dom'; 

const Item = ({ id, title, image, price, description }) => {
  return (
    <div className="border p-4 rounded-lg">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4" />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-green-600 font-semibold mb-4">${price}</p>
      
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Agregar al carrito</button>
        
        <Link to={`/item/${id}`}>
          <button className="bg-gray-500 text-white px-4 py-2 rounded">Ver detalles</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
