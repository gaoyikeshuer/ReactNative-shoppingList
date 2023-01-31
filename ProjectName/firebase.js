// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getFirestore, connectFirestoreEmulator} from 'firebase/firestore';
import {initializeFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDINPrRKa-Sd1Ia7Y4KOL-4ru9_1QeKbNE',
  authDomain: 'aib-home.firebaseapp.com',
  projectId: 'aib-home',
  storageBucket: 'aib-home.appspot.com',
  messagingSenderId: '23561557984',
  appId: '1:23561557984:web:e8c791b9336b6e342d3d85',
  measurementId: 'G-XS6HCQWH85',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// connectFirestoreEmulator(db, 'localhost', 8080);
// export{db}

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

// export const db = getFirestore(app);
