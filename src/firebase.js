import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDQsZ5PMVAlXaxL4q4aXg1rNgJbX_BXFmY",
  authDomain: "react-clone-app.firebaseapp.com",
  databaseURL: "https://react-clone-app.firebaseio.com",
  projectId: "react-clone-app",
  storageBucket: "react-clone-app.appspot.com",
  messagingSenderId: "762078484922",
  appId: "1:762078484922:web:a38d705de12c1ea3c8a583",
  measurementId: "G-9WGKSK5381"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
