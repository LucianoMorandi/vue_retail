// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDARoJvcEGsa-maRqYvHQGnWHiAorG7Mqc",
  authDomain: "vue-retail-ac144.firebaseapp.com",
  projectId: "vue-retail-ac144",
  storageBucket: "vue-retail-ac144.firebasestorage.app",
  messagingSenderId: "747190772416",
  appId: "1:747190772416:web:29079955f31fb9c0270325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);