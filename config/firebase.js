// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8783ZjaWyH0A1dj_63pDSKFNtuXLDLJU",
  authDomain: "odds-data-poc-1747866680.firebaseapp.com",
  projectId: "odds-data-poc-1747866680",
  storageBucket: "odds-data-poc-1747866680.firebasestorage.app",
  messagingSenderId: "788434538203",
  appId: "1:788434538203:web:bfb158a38b48ae6c8486fe",
  measurementId: "G-YJ4W0W5V49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);