import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAj0EeDtS90VLlbeZqOwkQUl61IIKBMCYg",
  authDomain: "tinder-clone-v2.firebaseapp.com",
  projectId: "tinder-clone-v2",
  storageBucket: "tinder-clone-v2.appspot.com",
  messagingSenderId: "757169612797",
  appId: "1:757169612797:web:f8b97d305bc75b4d315b94",
  measurementId: "G-FBKS7XR5J2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;