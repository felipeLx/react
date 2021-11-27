import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, onSnapshot, addDoc, deleteDoc, doc, query, where} from 'firebase/firestore';
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
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

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
