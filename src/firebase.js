// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZj5lPDuj19GZSib4Ju7p7vJwBqzREsS0",
  authDomain: "ecommerce-22119.firebaseapp.com",
  projectId: "ecommerce-22119",
  storageBucket: "ecommerce-22119.appspot.com",
  messagingSenderId: "331111884575",
  appId: "1:331111884575:web:3209225bdeb08dc751722a",
  measurementId: "G-NLSE2QRCWY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
// export const getauth = firebase.getAuth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();