import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLYeieRFYkt4Akiqc-c7E8A2w2jGnOaPc",
  authDomain: "adroit-31eb7.firebaseapp.com",
  projectId: "adroit-31eb7",
  storageBucket: "adroit-31eb7.appspot.com",
  messagingSenderId: "140942238625",
  appId: "1:140942238625:web:f81c48d8d888d7e76a61e0",
  measurementId: "G-RG61KSQ5RC"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider};
