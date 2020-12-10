import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCR2MFKw74B7aZqiNtBo79JorgJjN_rU5I",
    authDomain: "crwn-db-kt.firebaseapp.com",
    databaseURL: "https://crwn-db-kt.firebaseio.com",
    projectId: "crwn-db-kt",
    storageBucket: "crwn-db-kt.appspot.com",
    messagingSenderId: "497975878694",
    appId: "1:497975878694:web:8b3afb9fcbcf25cddc32e7",
    measurementId: "G-4CSEBBN3YT"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;