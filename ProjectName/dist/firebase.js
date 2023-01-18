'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.db = void 0;
const app_1 = require('firebase/app');
const analytics_1 = require('firebase/analytics');
const firestore_1 = require('firebase/firestore');
const firestore_2 = require('firebase/firestore');
const firebaseConfig = {
  apiKey: 'AIzaSyDINPrRKa-Sd1Ia7Y4KOL-4ru9_1QeKbNE',
  authDomain: 'aib-home.firebaseapp.com',
  projectId: 'aib-home',
  storageBucket: 'aib-home.appspot.com',
  messagingSenderId: '23561557984',
  appId: '1:23561557984:web:e8c791b9336b6e342d3d85',
  measurementId: 'G-XS6HCQWH85',
};
const app = (0, app_1.initializeApp)(firebaseConfig);
exports.db = (0, firestore_2.initializeFirestore)(app, {
  experimentalForceLongPolling: true,
});
//# sourceMappingURL=firebase.js.map
