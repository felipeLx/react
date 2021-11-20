import firebase from 'firebase/app';
import {GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import config from './config'

const Firebase = firebase.initializeApp(config.firebase);

const Providers = {
    google: new GoogleAuthProvider()
}

/**
    Optionals options: Google Sign-In Firebase docs
 */
Providers.google.addScope('https://www.googleapis.com/auth/contacts.readonly');
Providers.google.setCustomParameters({
    'login_hint': 'user@example.com'
  });

const auth = getAuth();
auth.languageCode = 'pt'
const createUser = createUserWithEmailAndPassword;

const signInPopup = signInWithPopup(auth, Providers.google)
.then((result) => {
  // This gives you a Google Access Token. You can use it to access the Google API.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential?.accessToken;
  // The signed-in user info.
  if(token) {
      const user = result.user;
      return user
  }
}).catch((error) => {
  // Handle Errors here.
  const errorMessage = error.message;
  // The email of the user's account used.
  const email = error.email;
  // The AuthCredential type that was used.
  const credential = GoogleAuthProvider.credentialFromError(error);
  return [errorMessage, email, credential]
});

export {Firebase, Providers, auth, createUser, signInPopup}