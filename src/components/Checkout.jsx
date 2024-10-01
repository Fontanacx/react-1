import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import { toast } from 'react-toastify';
import { db } from '../services/config'; // Asegúrate de que la importación de Firebase esté bien
import { collection, addDoc } from 'firebase/firestore';

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Crear una nueva orden en Firebase
      const docRef = await addDoc(collection(db, 'orders'), {
        buyer: formData,
        items: cartItems,
        date: new Date(),
        total: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      });

      // Guardar el ID de la orden
      setOrderId(docRef.id);

      // Limpiar el carrito después de completar la compra
      clearCart();

      // Limpiar el formulario
      setFormData({
        name: '',
        email: '',
        address: '',
      });

      // Mostrar alerta con número de orden
      toast.success(`Compra realizada con éxito. Número de orden: ${docRef.id}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    } catch (error) {
      console.error("Error al crear la orden: ", error);
      toast.error("Hubo un error al realizar la compra", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
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
