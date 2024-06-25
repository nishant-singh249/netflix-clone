// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdeJ64HaGV-BGkoFglUrsyP5ueFF1bB0k",
  authDomain: "netflix-e7e1a.firebaseapp.com",
  projectId: "netflix-e7e1a",
  storageBucket: "netflix-e7e1a.appspot.com",
  messagingSenderId: "756213852562",
  appId: "1:756213852562:web:d39c77d7e7b3550c64794b",
  measurementId: "G-HZRLV438R0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
