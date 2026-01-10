import firebase from "firebase";

const apiKey = process.env.REACT_APP_API_KEY;
const databaseURL = process.env.REACT_APP_DATABASE_URL;

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: apiKey,
    authDomain: "nnangeweb.firebaseapp.com",
    databaseURL: databaseURL,
    projectId: "nnangeweb",
    storageBucket: "nnangeweb.appspot.com",
    messagingSenderId: "1051512940139",
    appId: "1:1051512940139:web:73287481e0e7ed9ca5332e",
    measurementId: "G-0TX8N6VY1N"
  };
  // Initialize Firebase
  var firebaseApp = firebase.initializeApp(firebaseConfig);

  var db = firebaseApp.firestore();

  export { db };