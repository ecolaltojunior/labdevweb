// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr_ojDAAQyTH15Zjw_3uiAGHovc_VwrPo",
  authDomain: "labdevweb-2f03f.firebaseapp.com",
  projectId: "labdevweb-2f03f",
  storageBucket: "labdevweb-2f03f.appspot.com",
  messagingSenderId: "1032856671908",
  appId: "1:1032856671908:web:79e3e8f06f589f74d4b831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}