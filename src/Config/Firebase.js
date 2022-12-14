// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,GithubAuthProvider,signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "movie-b62a8.firebaseapp.com",
  projectId: "movie-b62a8",
  storageBucket: "movie-b62a8.appspot.com",
  messagingSenderId: "764621354982",
  appId: "1:764621354982:web:50bff8ca3a5f75ab158827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const Gauth = new GoogleAuthProvider()
const GitAuth = new GithubAuthProvider()
export const signWithGoogle =()=>{
  signInWithPopup(auth,Gauth)
  

}


export {auth,GitAuth}
