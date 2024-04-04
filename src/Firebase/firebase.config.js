import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDFHxwifN5980VdL92-5GuqLPAlA99JhWc",
    authDomain: "task-genius24.firebaseapp.com",
    projectId: "task-genius24",
    storageBucket: "task-genius24.appspot.com",
    messagingSenderId: "680677023329",
    appId: "1:680677023329:web:d3819201625bd0eaa4d420",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;


