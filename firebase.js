import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAxeItvza-e0u3vyqsp_Uy7_sxkkP57jYY",
    authDomain: "signal-clone-yt-8d454.firebaseapp.com",
    projectId: "signal-clone-yt-8d454",
    storageBucket: "signal-clone-yt-8d454.appspot.com",
    messagingSenderId: "206862796247",
    appId: "1:206862796247:web:65675a7b832c4cfa047792"
  };

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const firestore = firebase.firestore();
export { db, auth };