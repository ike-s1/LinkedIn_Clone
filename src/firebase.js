import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';git init

const firebaseConfig = {
    apiKey: "AIzaSyDUMKRcTFid8UbS71InCmPLWPqTUTge3gg",
    authDomain: "jobproject-7d0c3.firebaseapp.com",
    projectId: "jobproject-7d0c3",
    storageBucket: "jobproject-7d0c3.appspot.com",
    messagingSenderId: "926026862056",
    appId: "1:926026862056:web:0860ed955a107ef8a4a85d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth , db, provider, storage};





