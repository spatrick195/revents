import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

// firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFyPW4CtcuFzM7xCe-1CjjyTZ2AX4zLAk",
  authDomain: "revents-259207.firebaseapp.com",
  databaseURL: "https://revents-259207.firebaseio.com",
  projectId: "revents-259207",
  storageBucket: "revents-259207.appspot.com",
  messagingSenderId: "850580946324",
  appId: "1:850580946324:web:e8582d42e7e05f18066381"
};

// initiliaze app with our firebase config object
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
