import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDRRa4KtiIQ3H3rhlY9zdFI6xMt8IXU8lg",
  authDomain: "coffee-726ea.firebaseapp.com",
  projectId: "coffee-726ea",
  storageBucket: "coffee-726ea.appspot.com",
  messagingSenderId: "1066808058752",
  appId: "1:1066808058752:web:e705cdf578958a749c9765",
  measurementId: "G-TNM0QBXK8E",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
