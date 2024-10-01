import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API_KEY,",
  authDomain: "northcaps-8dc93.firebaseapp.com",
  projectId: "northcaps-8dc93",
  storageBucket: "northcaps-8dc93.appspot.com",
  messagingSenderId: "566618419786",
  appId: "1:566618419786:web:6df2d2ad55e51204b52cb3"
};

// Inicializa Firebase y Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
