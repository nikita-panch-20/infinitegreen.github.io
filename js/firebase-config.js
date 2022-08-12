import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCct5oXAkNqfs31qUVwU0wlBr4P2G_mXfg",
  authDomain: "infinitegreen-aa2f5.firebaseapp.com",
  projectId: "infinitegreen-aa2f5",
  storageBucket: "infinitegreen-aa2f5.appspot.com",
  messagingSenderId: "897880774283",
  appId: "1:897880774283:web:d838e05bcad4c982e4268e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const db = getFirestore(app);