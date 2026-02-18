import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACxE8z1NG4rCsRKOKvFwYivvX3oiAuhnU",
  authDomain: "food-badge.firebaseapp.com",
  projectId: "food-badge",
  storageBucket: "food-badge.firebasestorage.app",
  messagingSenderId: "392313993099",
  appId: "1:392313993099:web:4c1e4e225b392733f3a18e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
