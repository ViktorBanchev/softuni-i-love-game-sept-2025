// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxYS1on-zIBM5otm26KMdGcVyqhmF_Oas",
  authDomain: "i-love-games-sept2025.firebaseapp.com",
  projectId: "i-love-games-sept2025",
  storageBucket: "i-love-games-sept2025.firebasestorage.app",
  messagingSenderId: "1059646042322",
  appId: "1:1059646042322:web:4b3ef07cf37297fc813d0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);