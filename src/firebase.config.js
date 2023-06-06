// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKw_bLPBjwluWMYFZOc7Qo0uGEcul4228",
  authDomain: "green-foenix.firebaseapp.com",
  projectId: "green-foenix",
  storageBucket: "green-foenix.appspot.com",
  messagingSenderId: "238533390589",
  appId: "1:238533390589:web:d608c98a87d8b14c5d0e94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
