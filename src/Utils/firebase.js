// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCcuDZl1v_8JqHKNMRzxvcpYNUWXW9SjaY",
  authDomain: "saptjanm-assignment.firebaseapp.com",
  projectId: "saptjanm-assignment",
  storageBucket: "saptjanm-assignment.firebasestorage.app",
  messagingSenderId: "823372998112",
  appId: "1:823372998112:web:6f159c6232499d7caeb785",
  measurementId: "G-8KMV0SH8CM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;

