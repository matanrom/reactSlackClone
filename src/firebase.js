import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBGVi5oS2K9VNc-686ud15ktiVUgF0uoZ4",
  authDomain: "slack-clone-7435d.firebaseapp.com",
  projectId: "slack-clone-7435d",
  storageBucket: "slack-clone-7435d.appspot.com",
  messagingSenderId: "686469575492",
  appId: "1:686469575492:web:360a21c3a1099aefb2dd11",
  measurementId: "G-P2H2JYQ0QF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;