// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTqHwCtX-MYqJQlkDwjvZiluk-OX7xIws",
  authDomain: "labdevwebdsm-b293c.firebaseapp.com",
  projectId: "labdevwebdsm-b293c",
  storageBucket: "labdevwebdsm-b293c.firebasestorage.app",
  messagingSenderId: "1077149970713",
  appId: "1:1077149970713:web:b7f559e90c8b23ca77d588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authentication = getAuth(app)
export {authentication}