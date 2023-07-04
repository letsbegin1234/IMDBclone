
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBtuXg1EB6VHRuLci4tXJigltFJhoJzwsI",
  authDomain: "fir-auth-1132-bcdd8.firebaseapp.com",
  projectId: "fir-auth-1132-bcdd8",
  storageBucket: "fir-auth-1132-bcdd8.appspot.com",
  messagingSenderId: "128067235476",
  appId: "1:128067235476:web:75b921858a5482db510e81",
  measurementId: "G-E495DP1C05"
};


const app = initializeApp(firebaseConfig);
const auth=getAuth();

export{app , auth};