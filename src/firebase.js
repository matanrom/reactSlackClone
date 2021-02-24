// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyB4hydh8PZKWn_TaMGWZOCdD6C_fYZsnkM",
//   authDomain: "clone-e329c.firebaseapp.com",
//   projectId: "clone-e329c",
//   storageBucket: "clone-e329c.appspot.com",
//   messagingSenderId: "765123106478",
//   appId: "1:765123106478:web:c1937e20fbece3be853f3f",
//   measurementId: "G-25JW1PVWNT",
// };
//
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};