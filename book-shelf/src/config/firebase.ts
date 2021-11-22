import {GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithPopup} from 'firebase/auth';
import firebase from 'firebase/app';
import { firebaseConfig } from 'config/config';
import 'firebase/auth';

const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'pt';

const Providers = {
    google: new GoogleAuthProvider(),
    facebook: new FacebookAuthProvider(),
};

Providers.google.setCustomParameters({
    'login_hint': 'user@example.com'
});

const signInGoogle = () => signInWithPopup(auth, Providers.google, '/app');
const signInFacebook = () => signInWithPopup(auth, Providers.facebook, '/app');

export {auth, signInGoogle, signInFacebook, createUserWithEmailAndPassword};
export default app;