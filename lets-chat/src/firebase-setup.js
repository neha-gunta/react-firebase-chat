import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCKJWKK9s_32QdMxJdjJKJKT_twoZSFIxY",
  authDomain: "chatapp-59fac.firebaseapp.com",
  databaseURL: "https://chatapp-59fac-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-59fac",
  storageBucket: "chatapp-59fac.appspot.com",
  messagingSenderId: "673726553447",
  appId: "1:673726553447:web:aeb08646c834b8b7d863c2"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

const db= firebase.firestore();
const auth=firebase.auth();

export {db,auth}