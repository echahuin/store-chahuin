// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxeKc3W39TL-hNvM4zqAcQwy7qQ7HgwBA",
  authDomain: "store-chahuin.firebaseapp.com",
  projectId: "store-chahuin",
  storageBucket: "store-chahuin.appspot.com",
  messagingSenderId: "877252614790",
  appId: "1:877252614790:web:28a38b5005dac45c850f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)