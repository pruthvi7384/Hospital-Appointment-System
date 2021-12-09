// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBU7HJojEM9-0mePDP5_JhEjgwiau886Jw",
  authDomain: "hospital-appointment-sys-6b8d7.firebaseapp.com",
  projectId: "hospital-appointment-sys-6b8d7",
  storageBucket: "hospital-appointment-sys-6b8d7.appspot.com",
  messagingSenderId: "219155265733",
  appId: "1:219155265733:web:bbd6d366ef556cbe5b18ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Access Firebase Authication
export const auth =  getAuth(app)
// Access Firebase Cloude Database
export const db = getFirestore(app)
// Access Firebase Cloude Storage
export const st = getStorage(app)