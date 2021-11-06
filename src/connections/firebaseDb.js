import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAMd8TS3klLTs5QDVVqSw0EFf040KBahk",
  authDomain: "portfolio-twinsoft.firebaseapp.com",
  projectId: "portfolio-twinsoft",
  storageBucket: "portfolio-twinsoft.appspot.com",
  messagingSenderId: "540893389135",
  appId: "1:540893389135:web:1042088ff5af1af0bb653a",
  measurementId: "G-RE01CQ4DS8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

export default db;