import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams para obtener el id
import { useContext } from 'react';
import { CartContext } from '../context/cartContext'; // Importar el contexto del carrito

// Imágenes de productos
import gorra1 from '../assets/gorra1.jpg';
import gorra2 from '../assets/gorra2.jpg';
import gorra3 from '../assets/gorra3.jpg';
import gorra4 from '../assets/gorra4.jpg';
import gorra5 from '../assets/gorra5.jpg';
import gorra6 from '../assets/gorra6.jpg';

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el id desde la URL
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext); // Obtener la función para agregar al carrito

  // Lista de productos (esto debería venir de una base de datos o API en el futuro)
  const items = [
    {
      id: 1,
      title: 'Gorra New Era Miami Heat 59FIFTY Citrus Pop',
      image: gorra1,
      price: 60000,
      description: 'Una gorra vibrante y única para los fans de Miami Heat.',
    },
    {
      id: 2,
      title: 'Gorra New Era New York Yankees 59FIFTY Citrus Pop',
      image: gorra2,
      price: 55000,
      description: 'Exhibe tu pasión por los Yankees con esta gorra colorida.',
    },
    {
      id: 3,
      title: 'Gorra New Era New York Yankees 59FIFTY Black on Black',
      image: gorra3,
      price: 70000,
      description: 'Un diseño clásico y elegante para los aficionados de los Yankees.',
    },
    {
      id: 4,
      title: 'Gorra New Era Phoenix Suns Basic 59Fifty',
      image: gorra4,
      price: 70000,
      description: 'Simplemente Sorprendente',
    },
    {
      id: 5,
      title: 'Gorra New Era New York Yankees MLB League Essentials 59FIFTY',
      image: gorra5,
      price: 70000,
      description: 'Simplemente Sorprendente',
    },
    {
      id: 6,
      title: 'Gorra New Era Chicago Bulls 59FIFTY',
      image: gorra6,
      price: 70000,
      description: 'Simplemente Sorprendente',
    },
  ];

  useEffect(() => {
    // Buscar el producto por id
    const foundItem = items.find(item => item.id === parseInt(id));
    setItem(foundItem);
  }, [id]);

  const handleAddToCart = () => {
    if (item) {
      addToCart(item, 1); // Añadir al carrito con cantidad 1
    }
  };

  if (!item) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover mb-4" />
      <p>{item.description}</p>
      <p className="text-green-600 font-semibold mb-4">${item.price}</p>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
