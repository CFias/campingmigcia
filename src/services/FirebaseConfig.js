import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8RSWEOeFYkhiq7f4nci1D6G3azFlHCPY",
  authDomain: "campingmigcia-979ee.firebaseapp.com",
  projectId: "campingmigcia-979ee",
  storageBucket: "campingmigcia-979ee.appspot.com",
  messagingSenderId: "191358196444",
  appId: "1:191358196444:web:2b41af6e2d41d78a147219",
  measurementId: "G-M75BEEE4QG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

// export { db };
