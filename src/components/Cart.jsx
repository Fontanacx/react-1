import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { toast } from 'react-toastify';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error("No hay productos en el carrito para comprar", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return; // No proceder si el carrito está vacío
    }

    // Redirigir a la página de checkout
    navigate('/checkout'); 
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Carrito</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-2">
              <div className="flex-1">
                <span className="font-medium">{item.title} </span> - 
                <span> {item.quantity} unidades - </span>
                <span className="text-gray-700">${item.price * item.quantity}</span>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <button
          onClick={handleCheckout}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Finalizar compra
        </button>
      )}
    </div>
  );
};

export default Cart;
