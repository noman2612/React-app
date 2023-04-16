// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDchOKXCflseTYBaPqqen0tw7aH307sWSg",
  authDomain: "ema-jon-fire-auth.firebaseapp.com",
  projectId: "ema-jon-fire-auth",
  storageBucket: "ema-jon-fire-auth.appspot.com",
  messagingSenderId: "391474394751",
  appId: "1:391474394751:web:9ee8cfd35ba08eac04f14a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app