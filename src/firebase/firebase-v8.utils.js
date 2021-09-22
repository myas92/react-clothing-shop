import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore'
// import { initializeApp } from "firebase/app";
// // import { getFirestore } from "firebase/firestore";

// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyASthEsTcz97nATexTnh0H3m8FIoqyT-Mw",
    authDomain: "crwn-db-295aa.firebaseapp.com",
    projectId: "crwn-db-295aa",
    storageBucket: "crwn-db-295aa.appspot.com",
    messagingSenderId: "454225424244",
    appId: "1:454225424244:web:d3e577f6e432b5918c4621",
    measurementId: "G-4FJ36J2170"
};

// initializeApp(config);

// const provider = new GoogleAuthProvider(config)
// provider.getCustomParameters({ prompt: 'select_account' })
// export const SignInWithGoogle = () => signInWithPopup(provider)


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;