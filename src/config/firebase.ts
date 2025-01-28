// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRcDQwhjQEZS8qDGsD94UL4taX2Qqe_0",
  authDomain: "saseklabs-a8ae6.firebaseapp.com",
  projectId: "saseklabs-a8ae6",
  storageBucket: "saseklabs-a8ae6.firebasestorage.app",
  messagingSenderId: "547876684223",
  appId: "1:547876684223:web:47dbbd715cfe4e2609610a",
  measurementId: "G-ZVPYFPN06W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };