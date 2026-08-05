import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1ss6Amc6WbBXVt4d5IVgG2ISoIU8Rbn4",
  authDomain: "isterim-kooperatif.firebaseapp.com",
  databaseURL: "https://isterim-kooperatif-default-rtdb.firebaseio.com",
  projectId: "isterim-kooperatif",
  storageBucket: "isterim-kooperatif.firebasestorage.app",
  messagingSenderId: "561299267508",
  appId: "1:561299267508:web:c3630b319ae0bd5e2e1ce1",
  measurementId: "G-MP4PHZL7NC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
