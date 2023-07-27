// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARbquneqP6H5upDyd5Kmr6B2Mo-QfkEls",
  authDomain: "onlinetutoring-4a1a5.firebaseapp.com",
  databaseURL: "https://onlinetutoring-4a1a5-default-rtdb.firebaseio.com",
  projectId: "onlinetutoring-4a1a5",
  storageBucket: "onlinetutoring-4a1a5.appspot.com",
  messagingSenderId: "395935064851",
  appId: "1:395935064851:web:69bec6e7abe272b8b4f0e6",
  measurementId: "G-QS0G584FNE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const database = getDatabase(app);

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export {firebase};