
import { initializeApp } from "firebase/app";

import { GoogleAuthProvider, getAuth, signInWithRedirect} from 'firebase/auth';

const config = {
    apiKey: "AIzaSyASthEsTcz97nATexTnh0H3m8FIoqyT-Mw",
    authDomain: "crwn-db-295aa.firebaseapp.com",
    projectId: "crwn-db-295aa",
    storageBucket: "crwn-db-295aa.appspot.com",
    messagingSenderId: "454225424244",
    appId: "1:454225424244:web:d3e577f6e432b5918c4621",
    measurementId: "G-4FJ36J2170"
};

export const app = initializeApp(config);

const provider = new GoogleAuthProvider(config)
provider.setCustomParameters({ prompt: 'select_account' })
export const auth = getAuth();

export const SignInWithGoogle = () => signInWithRedirect(getAuth(), provider)


