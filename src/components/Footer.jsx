import React from 'react';

const Footer = () => {
  return (
<footer className="bg-blue-900 text-white py-8 mt-10 w-full absolute left-0 right-0">
      <div className="px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-lg font-semibold mb-4">CONTACTÁNOS</h3>
          <p>Made by Fontanac Dev:</p>
          <p className="mt-4">fontanacdev@gmail.com</p>
          <p>Tucuman , Argentina</p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4">CATEGORÍAS</h3>
          <ul>
            <p>Proximamente......</p>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">AYUDA</h3>
          <ul>
            <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:underline">Medios de pago</a></li>
            <li><a href="#" className="hover:underline">Políticas de cambio</a></li>
            <li><a href="../contacto.html" className="hover:underline">Contacto</a></li>
            <li><a href="#" className="hover:underline">Consentimiento #OKNewEra</a></li>
            <li><a href="#" className="hover:underline">Botón de arrepentimiento</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;