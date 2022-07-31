// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAQWwVPEZ3mqXjpWAF45NwgHrkdIopLuU",
  authDomain: "thisflow-d0185.firebaseapp.com",
  projectId: "thisflow-d0185",
  storageBucket: "thisflow-d0185.appspot.com",
  messagingSenderId: "194742643258",
  appId: "1:194742643258:web:4bd0fc1fa4abb8b60fe303"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);


