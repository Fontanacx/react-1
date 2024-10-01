import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./config";
import gorra1 from "../assets/gorra1.jpg";
import gorra2 from "../assets/gorra2.jpg";
import gorra3 from "../assets/gorra3.jpg";
import gorra4 from "../assets/gorra4.jpg";
import gorra5 from "../assets/gorra5.jpg";
import gorra6 from "../assets/gorra6.jpg";

const items = [
  {
    id: "1", // Cambié el ID a un string
    title: 'Gorra New Era Miami Heat 59FIFTY Citrus Pop',
    image: gorra1,
    price: 60000,
    description: 'Una gorra vibrante y única para los fans de Miami Heat.',
  },
  {
    id: "2", // Cambié el ID a un string
    title: 'Gorra New Era New York Yankees 59FIFTY Citrus Pop',
    image: gorra2,
    price: 55000,
    description: 'Exhibe tu pasión por los Yankees con esta gorra colorida.',
  },
  {
    id: "3", // Cambié el ID a un string
    title: 'Gorra New Era New York Yankees 59FIFTY Black on Black',
    image: gorra3,
    price: 70000,
    description: 'Un diseño clásico y elegante para los aficionados de los Yankees.',
  },
  {
    id: "4", // Cambié el ID a un string
    title: 'Gorra New Era Phoenix Suns Basic 59Fifty',
    image: gorra4,
    price: 70000,
    description: 'Simplemente Sorprendente',
  },
  {
    id: "5", // Cambié el ID a un string
    title: 'Gorra New Era New York Yankees MLB League Essentials 59FIFTY',
    image: gorra5,
    price: 70000,
    description: 'Simplemente Sorprendente',
  },
  {
    id: "6", // Cambié el ID a un string
    title: 'Gorra New Era Chicago Bulls 59FIFTY',
    image: gorra6,
    price: 70000,
    description: 'Simplemente Sorprendente',
  },
];

const subirProductos = async () => {
  const batch = writeBatch(db);
  const productosRef = collection(db, "productos");

  const itemsConId = items.map(item => ({
    ...item,
    id: item.id // Asegúrate de que el ID se mantenga como string
  }));

  itemsConId.forEach((producto) => {
    try {
      const nuevoDoc = doc(productosRef, producto.id); // Especifica el ID aquí
      batch.set(nuevoDoc, producto);
    } catch (error) {
      console.error("Error al procesar el producto:", producto, error);
    }
  });

  try {
    await batch.commit();
    console.log("Productos subidos exitosamente");
  } catch (error) {
    console.error("Error subiendo productos:", error);
  }
}

subirProductos();

export default subirProductos;
