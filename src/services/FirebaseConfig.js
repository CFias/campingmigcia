import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9SNTR7QkOXdc5zUtHbndhJS2V9VBwKaE",
  authDomain: "acampmig.firebaseapp.com",
  databaseURL: "https://acampmig-default-rtdb.firebaseio.com",
  projectId: "acampmig",
  storageBucket: "acampmig.appspot.com",
  messagingSenderId: "274860379016",
  appId: "1:274860379016:web:99980fee1cc16190d3c83d",
  measurementId: "G-ZFQMBD2144",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const storage = getStorage(app);

// export { db };
