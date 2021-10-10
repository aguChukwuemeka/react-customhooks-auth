import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALdluzeMH9kH7z5E3BBK4PXczFwWepWuQ",
  authDomain: "react-custom-hook-auth.firebaseapp.com",
  projectId: "react-custom-hook-auth",
  storageBucket: "react-custom-hook-auth.appspot.com",
  messagingSenderId: "451151939602",
  appId: "1:451151939602:web:a16d008fe2b73753e6b0cb",
  measurementId: "G-1DSZD6P70D",
};

const app = firebase.initializeApp(firebaseConfig);
const googleProvider = new firebase.auth.GoogleAuthProvider();


export { app, googleProvider };