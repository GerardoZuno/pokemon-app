import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'




const firebaseConfig = {
    apiKey: "AIzaSyB7WrtlffT6UITZy5MLeXIdM58GNWGHl-k",
    authDomain: "pokemon-auth-18db3.firebaseapp.com",
    projectId: "pokemon-auth-18db3",
    storageBucket: "pokemon-auth-18db3.appspot.com",
    messagingSenderId: "713459769674",
    appId: "1:713459769674:web:8cf004af873039ea6221b3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebase.firestore()
  const storage = firebase.storage()


  export {auth, db, storage, firebase }