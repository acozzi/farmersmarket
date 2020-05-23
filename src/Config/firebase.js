import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAdi1E9Wp8ZQQaDLieZGRU6u2pTsf64OEQ",
  authDomain: "farmersmarket2752.firebaseapp.com",
  databaseURL: "https://farmersmarket2752.firebaseio.com",
  projectId: "farmersmarket2752",
  storageBucket: "farmersmarket2752.appspot.com",
  messagingSenderId: "360540803052",
  appId: "1:360540803052:web:26de3dc35484ce69cffac9",
  measurementId: "G-V8HHGBWJWB"
};

firebase.initializeApp(config);


const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;
export default firebase;