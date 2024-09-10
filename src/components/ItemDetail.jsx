import React from 'react';

const ItemDetail = ({ product }) => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <img src={product.img} alt={product.name} className="w-full h-64 object-cover" />
      <h2 className="text-2xl font-bold my-4">{product.name}</h2>
      <p>{product.description}</p>
      <p className="mt-4 text-xl font-bold">{product.price}</p>
    </div>
  );
};

export default ItemDetail;
