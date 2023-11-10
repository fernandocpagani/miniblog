// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC08wJD9ZG346UTjzT_NK-2se8M6PuWP8o",
  authDomain: "miniblog-3c7ed.firebaseapp.com",
  projectId: "miniblog-3c7ed",
  storageBucket: "miniblog-3c7ed.appspot.com",
  messagingSenderId: "947483881526",
  appId: "1:947483881526:web:954c8852dd078674e12897",
  measurementId: "G-9QRFJ93T58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };