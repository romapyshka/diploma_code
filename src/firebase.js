import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDjUQccikjl1DyiZrxjZYaacxJzb60zuMg",
    authDomain: "diploma-site-47913.firebaseapp.com",
    projectId: "diploma-site-47913",
    storageBucket: "diploma-site-47913.appspot.com",
    messagingSenderId: "666194677425",
    appId: "1:666194677425:web:447ebbd4f54ea275da5c90",
    measurementId: "G-4MN192XQH4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };