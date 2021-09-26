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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    let snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        console.log(displayName);
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }

    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' })

// export const SignInWithGoogle = () => auth.signInWithPopup(provider)
export const SignInWithGoogle = () => auth.signInWithRedirect(provider)

export default firebase;