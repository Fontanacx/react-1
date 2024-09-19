import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link de react-router-dom
import { CartContext } from '../context/cartContext'; // Asegúrate de que el CartContext esté correctamente importado

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);

  // Asegurarse de que cartItems sea siempre un array
  const totalItems = cartItems?.reduce((acc, item) => acc + item.quantity, 0) || 0;

  return (
    <Link to="/cart">
      <div>
        🛒 {totalItems}
      </div>
    </Link>
  );
};

export default CartWidget;
