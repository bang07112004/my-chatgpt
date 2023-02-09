import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0NtZqftMv5N6lHZKvhw2_uJdOTMr1FhM",
  authDomain: "my-chatbox-a2ba1.firebaseapp.com",
  projectId: "my-chatbox-a2ba1",
  storageBucket: "my-chatbox-a2ba1.appspot.com",
  messagingSenderId: "550178320262",
  appId: "1:550178320262:web:15e56fe91e711950ff0607",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
