// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX4HPzXZ9yaBew3z8ajaIfu52LiznIbv8",
  authDomain: "hspantryapp-f82c3.firebaseapp.com",
  projectId: "hspantryapp-f82c3",
  storageBucket: "hspantryapp-f82c3.appspot.com",
  messagingSenderId: "1089123403492",
  appId: "1:1089123403492:web:1c7e9081db01884d498ef1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export{app, firestore}