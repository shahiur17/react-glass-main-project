 import { initializeApp } from "firebase/app";
 import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwprN192V76k9bJCW3iTdIM9nEd5zdWQI",
  authDomain: "auth-sing-in-register-pr-cf31a.firebaseapp.com",
  projectId: "auth-sing-in-register-pr-cf31a",
  storageBucket: "auth-sing-in-register-pr-cf31a.appspot.com",
  messagingSenderId: "483595949931",
  appId: "1:483595949931:web:6bd9c86f6b8f96039e1e2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;

