// este archivo configura firebase para el proyecto

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ cambia los valores por los de tu proyecto en firebase console
const firebaseConfig = {
  apiKey: "AIzaSyB5tcWMbf3CzKjxxa-o_H5902y0AUSQaoE",
  authDomain: "reddolphin-50e27.firebaseapp.com",
  projectId: "reddolphin-50e27",
  storageBucket: "reddolphin-50e27.firebasestorage.app",
  messagingSenderId: "748945956990",
  appId: "1:748945956990:web:01915fa8a62431db1fb82f",
  measurementId: "G-MYZ6F6Q32X"
};

const app = initializeApp(firebaseConfig);

// auth para login/logout/signup
export const auth = getAuth(app);

// base de datos
export const db = getFirestore(app);
