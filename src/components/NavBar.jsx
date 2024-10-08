import React from 'react';
import CartWidget from './CartWidget';
import logo from '../assets/northcaps.png'; 


const NavBar = ({ setCurrentPage }) => {
  return (
    <div className="w-full">
      <nav className="bg-gray-800 p-4 w-full">
        <div className="container mx-auto flex justify-between items-center">
          {}
          <div className="flex items-center">
          <img src={logo} alt="North Caps Logo" className="mr-3" style={{ width: 'auto', height: '200px' }} />
            <h1 className="text-white text-2xl font-bold">North Caps</h1>
          </div>
          <ul className="flex space-x-6">
            <li><a href="#" onClick={() => setCurrentPage('home')} className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="/contacto.html" onClick={() => setCurrentPage('contact')} className="text-white hover:text-gray-300">Contacto</a></li>
            <li><a href="/register.html" onClick={() => setCurrentPage('contact')} className="text-white hover:text-gray-300">Register</a></li>
            <li><a href="/login.html" onClick={() => setCurrentPage('contact')} className="text-white hover:text-gray-300">Login</a></li>
          </ul>
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};


export default NavBar;
