import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY_3445sz1J1oZDCREy1mGTaZWpSkqnRE",
  authDomain: "portfolio-22e6a.firebaseapp.com",
  projectId: "portfolio-22e6a",
  storageBucket: "portfolio-22e6a.appspot.com",
  messagingSenderId: "424222075064",
  appId: "1:424222075064:web:fb77a390d8d0e36730ac4d",
  measurementId: "G-QY8Z8LPEV4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };