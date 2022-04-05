import  firebase from "firebase/app"

import "firebase/firestore"
import "firebase/firebase-storage"

const firebaseConfig = {
    apiKey: "AIzaSyAwVelfJ9Ze1_9VM3557xmVaA9ynL0moOo",
    authDomain: "citizenawz.firebaseapp.com",
    databaseURL: "https://citizenawz.firebaseio.com",
    projectId: "citizenawz",
    storageBucket: "citizenawz.appspot.com",
    messagingSenderId: "731932414061",
    appId: "1:731932414061:web:813c6eb62497ac3d34ef64",
    measurementId: "G-9H85Z00M28",
    storageBucket: "gs://citizenawz.appspot.com"
  };

firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

// export default firebase;
export var storage = firebase.storage().ref();

export const db = firebase.firestore();