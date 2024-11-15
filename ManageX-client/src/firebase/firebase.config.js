// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhjChImiuxJUIEouffBX_PUk5f1UoSBbY",
  authDomain: "carx-portal.firebaseapp.com",
  projectId: "carx-portal",
  storageBucket: "carx-portal.firebasestorage.app",
  messagingSenderId: "181231588179",
  appId: "1:181231588179:web:e16bd61fe8c036e52c07a6",
  measurementId: "G-1WEGVV505T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;