import React from 'react';
import NavBar from './NavBar';

const Contact = () => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-10 p-6 max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Escribinos!</h2>
        <form>
          {/* Nombre */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
            />
          </div>

          {/* Correo Electrónico */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
              Correo electrónico
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              id="email"
              name="email"
              placeholder="Tu correo electrónico"
            />
          </div>

          {/* Número de Teléfono */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
              Número de teléfono
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Tu número de teléfono"
            />
          </div>

          {/* ¿Qué tienes en mente? */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
              ¿Qué tienes en mente?
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí"
              rows="5"
            ></textarea>
          </div>

          {/* Enviar Button */}
          <div>
            <button
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
              type="submit"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
