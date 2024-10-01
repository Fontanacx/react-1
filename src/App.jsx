// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer'; 
import { CartProvider } from './context/cartContext'; 
import Cart from './components/Cart';
import Checkout from './components/Checkout'; // Importa el componente Checkout
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import subirProductos from './services/subirproductos'; // Asegúrate de que coincida con el nombre exacto
import { useEffect } from 'react'; // Importa useEffect

function App() {
  return (
    <>
      <CartProvider>
        <Router>
          <div>
            <NavBar />
            <div className="container mx-auto mt-8">
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} /> {/* Agregar la ruta para Checkout */}
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </CartProvider>
      <ToastContainer />
    </>
  );
}

export default App;
