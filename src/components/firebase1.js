// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA3ul_pexSJxLBpX3wSE9kbXS83VlenDyQ",
    authDomain: "challenge-42247.firebaseapp.com",
    projectId: "challenge-42247",
    storageBucket: "challenge-42247.appspot.com",
    messagingSenderId: "690588279866",
    appId: "1:690588279866:web:3e8278b2dfd23618a14103",
    measurementId: "G-RWY898F3G5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export  {db, auth };