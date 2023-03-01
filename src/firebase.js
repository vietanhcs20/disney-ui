// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGUKZ4xjidedtR-Aani-NzLKf4KzBEWhg",
    authDomain: "disney-clone-f6469.firebaseapp.com",
    projectId: "disney-clone-f6469",
    storageBucket: "disney-clone-f6469.appspot.com",
    messagingSenderId: "527264285520",
    appId: "1:527264285520:web:699d2c365afb2ca5dc6255",
    measurementId: "G-7TBW1PHDGR"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const db = getFirestore(firebaseApp)
export { provider, auth, db }
