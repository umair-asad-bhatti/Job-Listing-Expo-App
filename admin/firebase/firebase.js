// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBe2mo_TFVfx8kcRQ7vpVDpjsF1hhCepSc",
    authDomain: "ukproject-d477c.firebaseapp.com",
    projectId: "ukproject-d477c",
    storageBucket: "ukproject-d477c.appspot.com",
    messagingSenderId: "52486302200",
    appId: "1:52486302200:web:ecc5205e3caeb8ba6e4e0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}