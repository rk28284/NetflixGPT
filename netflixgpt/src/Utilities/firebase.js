// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEcl5dxMBpTItmyXRFAmeg7bK8TS_7x_s",
  authDomain: "netflixgpt-989d2.firebaseapp.com",
  projectId: "netflixgpt-989d2",
  storageBucket: "netflixgpt-989d2.appspot.com",
  messagingSenderId: "1060467874720",
  appId: "1:1060467874720:web:f5720891902c55940e22c5",
  measurementId: "G-03PRRJYQFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);