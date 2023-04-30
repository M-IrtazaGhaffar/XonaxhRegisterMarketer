// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVafZNAAXJX5NUvC-F0mInx1YvKU0ilkE",
  authDomain: "xonaxh-e4e2c.firebaseapp.com",
  databaseURL: "https://xonaxh-e4e2c-default-rtdb.firebaseio.com",
  projectId: "xonaxh-e4e2c",
  storageBucket: "xonaxh-e4e2c.appspot.com",
  messagingSenderId: "790607262937",
  appId: "1:790607262937:web:5f8bba051a36aacab43ac8",
  measurementId: "G-GTNRX06LC2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)