import admin from 'firebase-admin';

var serviceAccount = require("./serviceAccountKey.json");

export const verifyIdToken = (token: string) => {
     if(!admin.apps.length) {
         admin.initializeApp({
           credential: admin.credential.cert(serviceAccount),
           databaseURL: "https://auth-c492e-default-rtdb.firebaseio.com"
         });
     }
     return admin.auth().verifyIdToken(token)
                .catch((err: any) => console.log(err))
};