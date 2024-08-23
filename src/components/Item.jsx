import React from 'react';

const Item = ({ title, image, price, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <p className="text-gray-800 font-semibold mt-2">${price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Agregar al carrito</button>
    </div>
  );
};

export default Item;
