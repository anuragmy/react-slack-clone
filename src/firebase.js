import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  // your firebase configuration
};

firebase.initializeApp(firebaseConfig);

export default firebase;
