import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZR5XX0xnAVmcRwOBou5zgftjVhbEBs58",
  authDomain: "miniblog-80aaa.firebaseapp.com",
  projectId: "miniblog-80aaa",
  storageBucket: "miniblog-80aaa.firebasestorage.app",
  messagingSenderId: "640236745122",
  appId: "1:640236745122:web:19d97c4279f7ead43f02fb"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db, app};