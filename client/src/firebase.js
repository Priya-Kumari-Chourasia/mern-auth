// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-d01a5.firebaseapp.com",
  projectId: "mern-auth-d01a5",
  storageBucket: "mern-auth-d01a5.appspot.com",
  messagingSenderId: "639371994664",
  appId: "1:639371994664:web:f1b1c41c83ea4f08c0371d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);