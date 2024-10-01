import { useContext, useState } from 'react';
import { CartContext } from '../context/cartContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext); 
  const [quantity, setQuantity] = useState(1); 

  const handleAddToCart = () => {
    addToCart(product, quantity); 

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
      toast.success("Su compra fue enviada al carrito", {
  autoClose: 1000, 
  theme: "dark",
  position: "top-right",
});


    </div>
  );
};

export default ItemDetail};                                  
