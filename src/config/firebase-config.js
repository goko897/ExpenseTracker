// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfKCxirI_LJRCKUkV0MJ7Qs1CATEBukU0",
  authDomain: "expense-tracker-b8bfe.firebaseapp.com",
  projectId: "expense-tracker-b8bfe",
  storageBucket: "expense-tracker-b8bfe.appspot.com",
  messagingSenderId: "565504276655",
  appId: "1:565504276655:web:b7b1edf2fb66d353283c5a",
  measurementId: "G-T4G4MWFP83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);