// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxC6ogLqYUbIga7EYSoXu5tFB9DQNCakc",
  authDomain: "red-mui.firebaseapp.com",
  projectId: "red-mui",
  storageBucket: "red-mui.appspot.com",
  messagingSenderId: "107799356528",
  appId: "1:107799356528:web:991cfad653d796e566c0b5"
};

// Initialize Firebase
const initializeFirebase =()=> initializeApp(firebaseConfig);

export default initializeFirebase;
