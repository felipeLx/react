import { initializeApp } from "firebase/app";
/*
import {getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, query, where} from 'firebase/firestore';

var firebase = require('firebase');
var firebaseui = require('firebaseui');
*/
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpXdG1Pk9pni3wsiSVV7BIuFOhzPC6rQI",
  authDomain: "auth-c492e.firebaseapp.com",
  projectId: "auth-c492e",
  storageBucket: "auth-c492e.appspot.com",
  messagingSenderId: "458358744644",
  appId: "1:458358744644:web:3579a1774de14733297e11"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


/*
const db = getFirestore();
const colRef = collection(db, 'books');


const books = getDocs(colRef)
  .then(snapshot => {
    let books: Array<Object> = []
    snapshot.docs.forEach(doc => {
      books.push({...doc.data(), id: doc.id})
    })
    //console.log(books)
})

export const onDbSnapshot = onSnapshot(colRef, (snapshot) => {
  let books: Array<Object> = []
    snapshot.docs.forEach(doc => {
      books.push({...doc.data(), id: doc.id})
    })
    //console.log(books)
})

// take specif item
const queue = query(colRef, where("title", "==", "the name of wing" ))
const queueSnapShot = onSnapshot(queue, (snapshot) => {
  let books: Array<Object> = []
    snapshot.docs.forEach(doc => {
      books.push({...doc.data(), id: doc.id})
    })
    //console.log(books)
})
*/

/*

var ui = new firebaseui.auth.AuthUI(firebase.auth())

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
      scopes: [
        'https://www.googleapis.com/auth/contacts.readonly'
      ],
      customParameters: {
        // Forces account selection even when one account
        // is available.
        prompt: 'select_account'
      }
    }
  ],
  // Other config options...
});
*/