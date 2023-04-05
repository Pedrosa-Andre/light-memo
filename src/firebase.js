import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ88WYZC7KIGFsveN6_20o-gt_3Wqiq_g",
  authDomain: "light-memo-388f4.firebaseapp.com",
  projectId: "light-memo-388f4",
  storageBucket: "light-memo-388f4.appspot.com",
  messagingSenderId: "923598056203",
  appId: "1:923598056203:web:da466dcd28af81693d500e",
  measurementId: "G-82PCPDVW8K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
