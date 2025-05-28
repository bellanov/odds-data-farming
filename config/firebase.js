/**
 * @fileoverview Firebase Configuration.
 */
import "dotenv/config";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: process.env.FIREBASE_API_KEY,
  // eslint-disable-next-line no-undef
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  // eslint-disable-next-line no-undef
  projectId: process.env.FIREBASE_PROJECT_ID,
  // eslint-disable-next-line no-undef
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // eslint-disable-next-line no-undef
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  // eslint-disable-next-line no-undef
  appId: process.env.FIREBASE_APP_ID,
  // eslint-disable-next-line no-undef
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
