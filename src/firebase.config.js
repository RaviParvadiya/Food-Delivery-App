import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8p1UA6Ca4-H3TaSGOkjWif_dntl1KfRg",
  authDomain: "food-delivery-bdc17.firebaseapp.com",
  databaseURL: "https://food-delivery-bdc17-default-rtdb.firebaseio.com",
  projectId: "food-delivery-bdc17",
  storageBucket: "food-delivery-bdc17.appspot.com",
  messagingSenderId: "465995684354",
  appId: "1:465995684354:web:909dbac938bf630bc4a51b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
