// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3x9BAvgPaptHo2PgfWS92CBkT84S6v30",
  authDomain: "fir-auth-4-d64b0.firebaseapp.com",
  projectId: "fir-auth-4-d64b0",
  storageBucket: "fir-auth-4-d64b0.firebasestorage.app",
  messagingSenderId: "181795230037",
  appId: "1:181795230037:web:8cf70e289d9f9f87ac9fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);