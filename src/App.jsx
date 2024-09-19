import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import { CartProvider } from './context/cartContext'; // Importa el CartProvider
import Cart from './components/Cart'

function App() {
  return (
    <CartProvider> {/* Envuelve toda tu aplicación con el CartProvider */}
      <Router>
        <div>
          <NavBar />
          <div className="container mx-auto mt-8">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} /> 
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
