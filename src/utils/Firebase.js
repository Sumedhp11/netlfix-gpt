// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOvz-rg9aSlSWmE3QCA0i_bEP7r29bRDw",
  authDomain: "netflixgpt-d7681.firebaseapp.com",
  projectId: "netflixgpt-d7681",
  storageBucket: "netflixgpt-d7681.appspot.com",
  messagingSenderId: "348428948384",
  appId: "1:348428948384:web:a16f8fd4eec6c5e6400ac5",
  measurementId: "G-33EQLK9B8Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();