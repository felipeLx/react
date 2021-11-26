import {initializeApp} from 'firebase/app';
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBpXdG1Pk9pni3wsiSVV7BIuFOhzPC6rQI",
    authDomain: "auth-c492e.firebaseapp.com",
    projectId: "auth-c492e",
    storageBucket: "auth-c492e.appspot.com",
    messagingSenderId: "458358744644",
    appId: "1:458358744644:web:3579a1774de14733297e11"
  };
  
initializeApp(firebaseConfig);

export const auth = getAuth();