// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnl8CaRxFGE3aTQ_WEqk0VVblpUqGs4t8",
  authDomain: "labdevwebdsm.firebaseapp.com",
  projectId: "labdevwebdsm",
  storageBucket: "labdevwebdsm.appspot.com",
  messagingSenderId: "1098216044885",
  appId: "1:1098216044885:web:0dd10d7c963458d45217dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

export {authentication}