import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import 'dotenv/config';

const firebaseConfig = {
  apiKey: "AIzaSyCcu7SY3gGhc1ze3i6bJQW48uJXabGtcDE",
  authDomain: "basic-email-authentication.firebaseapp.com",
  projectId: "basic-email-authentication",
  storageBucket: "basic-email-authentication.firebasestorage.app",
  messagingSenderId: "560456322813",
  appId: "1:560456322813:web:e6baaa8374fc06c0b03894",
  measurementId: "G-PCPTLXGQY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;