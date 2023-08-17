// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcOrbE3DRiEh4zDK_8Mby9puY9ajWYduQ",
  authDomain: "test-project-31005.firebaseapp.com",
  projectId: "test-project-31005",
  storageBucket: "test-project-31005.appspot.com",
  messagingSenderId: "77757707521",
  appId: "1:77757707521:web:ac0fb4d468a58a17475700",
  measurementId: "G-DF275M7ENF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);