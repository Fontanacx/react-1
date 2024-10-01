import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { useContext } from 'react';
import { CartContext } from '../context/cartContext'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from '../services/config'; 
import { doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams(); 
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext); 

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const docRef = doc(db, "productos", id); // Verifica que este ID exista en Firebase
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such document!"); // Maneja el caso donde el documento no existe
        }
      } catch (error) {
        console.error("Error fetching item:", error); // Maneja cualquier error al obtener el documento
      }
    };

    fetchItem();
  }, [id]);

  const handleAddToCart = () => {
    if (item) {
      addToCart(item, 1);
      toast.success("Producto agregado al carrito", {
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

  if (!item) {
    return <p>Cargando detalles...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <img src={item.image} alt={item.title} className="w-full h-64 object-cover mb-4" />
      <p>{item.description}</p>
      <p className="text-green-600 font-semibold mb-4">${item.price}</p>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Agregar al carrito
      </button>
      <ToastContainer />
    </div>
  );
};

export default ItemDetailContainer;
