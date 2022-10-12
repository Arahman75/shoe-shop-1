// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvw32nB6rxPaimtv07Jd4WeKfwMkPV_aA",
  authDomain: "shoe-shop1.firebaseapp.com",
  projectId: "shoe-shop1",
  storageBucket: "shoe-shop1.appspot.com",
  messagingSenderId: "383634337225",
  appId: "1:383634337225:web:b22af2cb8243fe99fa0c18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;