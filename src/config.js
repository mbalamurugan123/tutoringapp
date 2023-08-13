// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAmT0RJe1tbHYPEW8uNCfYh1QuL6xgX1rA",
  authDomain: "tutoringapp-2f16e.firebaseapp.com",
  projectId: "tutoringapp-2f16e",
  storageBucket: "tutoringapp-2f16e.appspot.com",
  messagingSenderId: "55853615077",
  appId: "1:55853615077:web:fd9a4eed1c70ce3a3a110c",
  measurementId: "G-FTRC6Q45SF"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const database = getDatabase(app);

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
// export const auth=getAuth(app);