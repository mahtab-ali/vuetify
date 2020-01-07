import firebase from 'firebase/app'
import 'firebase/firestore'

                         //Initialize Firebase//

const firebaseConfig = {
    apiKey: "AIzaSyBkat9Cg-dVStey_udLH9Z-YrkIXksIonc",
    authDomain: "attendo-plus.firebaseapp.com",
    databaseURL: "https://attendo-plus.firebaseio.com",
    projectId: "attendo-plus",
    storageBucket: "attendo-plus.appspot.com",
    messagingSenderId: "602373234733",
    appId: "1:602373234733:web:142e1de1b88bca6e5a18a4",
    measurementId: "G-H4JCXGZP8H"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots:true });

  export default db;