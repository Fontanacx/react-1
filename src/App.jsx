import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Asegúrate de importar Routes y Route
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'; // Importa tu componente

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container mx-auto mt-8">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} /> {/* Ruta para detalles */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
