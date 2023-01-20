import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB0Qvsstav0utWDZ9xUD9PrAe6eWs1oLhY",
  authDomain: "signinauth-d51c4.firebaseapp.com",
  projectId: "signinauth-d51c4",
  storageBucket: "signinauth-d51c4.appspot.com",
  messagingSenderId: "611204965883",
  appId: "1:611204965883:web:287353a0b8ff80f74c975e",
  measurementId: "G-86JQN0BJEQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
