import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCKFy1Aa-dSY0zc7J3Umny-EV1N-WC_QfY",
    authDomain: "portfolio-6217a.firebaseapp.com",
    projectId: "portfolio-6217a",
    storageBucket: "portfolio-6217a.appspot.com",
    messagingSenderId: "148841686881",
    appId: "1:148841686881:web:7dd8a3f42ab164ffa50720"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);