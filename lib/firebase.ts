// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAbhtx4ANCTm4Wk4iY_qv1DnU1024SYtE",
  authDomain: "grace-c952a.firebaseapp.com",
  projectId: "grace-c952a",
  storageBucket: "grace-c952a.firebasestorage.app",
  messagingSenderId: "787054841242",
  appId: "1:787054841242:web:1e1ac9bd00d4f1bc757e23",
  measurementId: "G-QF22JXNSZW"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics only on client-side
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics, app, auth, db };

