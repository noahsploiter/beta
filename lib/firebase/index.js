// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
    apiKey: "AIzaSyDZym3uCqOuRK4ZX_1dVha2xN2LDMqbeuw",
    authDomain: "bank-logs-acc.firebaseapp.com",
    projectId: "bank-logs-acc",
    storageBucket: "bank-logs-acc.appspot.com",
    messagingSenderId: "671470689885",
    appId: "1:671470689885:web:7de8b90130d9a8b0b5b7b4",
    measurementId: "G-SEZLPRYVEF"
  };
  


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
