// import firebase from "firebase/App";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuOsUvHcc-auJEffR-jYSyCeE2LYTpWjE",
  authDomain: "clone-bc95a.firebaseapp.com",
  databaseURL: "https://clone-bc95a.firebaseio.com",
  projectId: "clone-bc95a",
  storageBucket: "clone-bc95a.appspot.com",
  messagingSenderId: "252712367669",
  appId: "1:252712367669:web:c3093e4ca37bac9d7b237c",
  measurementId: "G-MRKJG47PJ3",
};

// initialize a firebase app other than default one
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth(firebaseApp);

export { db, auth };
