// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhdHecMUrE5IxYzvsN1ab3XDrm4zrGyl8",
  authDomain: "todoapp-aacfe.firebaseapp.com",
  databaseURL: "https://todoapp-aacfe-default-rtdb.firebaseio.com",
  projectId: "todoapp-aacfe",
  storageBucket: "todoapp-aacfe.appspot.com",
  messagingSenderId: "572418935313",
  appId: "1:572418935313:web:78e9087324ec609666bfb0",
  measurementId: "G-LWYB41C07V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
