import React from 'react';
import CartWidget from './CartWidget';

const NavBar = ({ setCurrentPage }) => {
  return (
    <div className="w-full">
      <nav className="bg-gray-800 p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">North Caps</h1>
          <ul className="flex space-x-6">
            <li><a href="#" onClick={() => setCurrentPage('home')} className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#" onClick={() => setCurrentPage('contact')} className="text-white hover:text-gray-300">Contacto</a></li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
