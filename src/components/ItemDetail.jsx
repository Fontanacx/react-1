import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext'; // Asegúrate de que la ruta sea correcta

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Obtiene la función para agregar al carrito
  const [quantity, setQuantity] = useState(1); // Estado para manejar la cantidad de productos a agregar

  const handleAddToCart = () => {
    addToCart(product, quantity); // Llama a la función para agregar el producto con la cantidad seleccionada
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Precio: {product.price}</p>
      <p>Descripción: {product.description}</p>
      
      {/* Control para elegir la cantidad */}
      <div>
        <label>Cantidad: </label>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(parseInt(e.target.value))} 
          min="1"
        />
      </div>

      {/* Botón para agregar al carrito */}
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
