// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHdGpxc7415y-Y1LaFTqHhgDoxo7eje8",
  authDomain: "crypto-app-32f2b.firebaseapp.com",
  projectId: "crypto-app-32f2b",
  storageBucket: "crypto-app-32f2b.appspot.com",
  messagingSenderId: "772051018550",
  appId: "1:772051018550:web:6dc5468ca002a59655c997",
  measurementId: "G-776P0KR730",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
