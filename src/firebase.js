import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyDoQPzAAGubj1DVyi3DzqBLS94YJM3wykY",
    authDomain: "messenger-clone2021.firebaseapp.com",
    projectId: "messenger-clone2021",
    storageBucket: "messenger-clone2021.appspot.com",
    messagingSenderId: "400273908696",
    appId: "1:400273908696:web:c1b974268da7a6f19e08ad",
    measurementId: "G-4HD3BPF1JW"
  });

  const db=firebaseApp.firestore();
  export default db;