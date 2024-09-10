import React from 'react';
import Item from './Item';
import gorra1 from '../assets/gorra1.jpg';
import gorra2 from '../assets/gorra2.jpg';
import gorra3 from '../assets/gorra3.jpg';
import gorra4 from '../assets/gorra4.jpg';
import gorra5 from '../assets/gorra5.jpg';
import gorra6 from '../assets/gorra6.jpg'
const ItemListContainer = () => {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map(item => (
        <Item
          key={item.id}
          id={item.id} // Agregar el id aquí
          title={item.title}
          image={item.image}
          price={item.price}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default ItemListContainer;
