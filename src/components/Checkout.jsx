import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Asegúrate de que el toast esté aquí
    toast.success("¡Compra realizada con éxito!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    // Limpiar el carrito después de mostrar el toast
    clearCart();

    // Limpiar los datos del formulario
    setFormData({
      name: '',
      email: '',
      address: '',
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito para comprar.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="text-lg font-semibold">Detalles de compra</h3>
          <ul className="space-y-2">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b border-gray-200 pb-2">
                <span>{item.title} - {item.quantity} unidades</span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div>
            <label className="block mb-1">Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <div>
            <label className="block mb-1">Dirección:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="border border-gray-300 p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Completar Compra
          </button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
