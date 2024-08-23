import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div>
      <NavBar setCurrentPage={setCurrentPage} />
      <div className="container mx-auto mt-8">
        {currentPage === 'home' && <ItemListContainer />}
        {currentPage === 'contact' && <Contact />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
