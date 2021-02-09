import firebase, { app } from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA2Gz3rl68z75H09yThGwzncV8mKzLYdkk",
    authDomain: "findbeerapp-f7fe5.firebaseapp.com",
    databaseURL: "https://findbeerapp-f7fe5.firebaseio.com",
    projectId: "findbeerapp-f7fe5",
    storageBucket: "findbeerapp-f7fe5.appspot.com",
    messagingSenderId: "185579444313",
    appId: "1:185579444313:web:87aa2977aa1fb646b87948"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export const auth = firebase.auth();
  
  export const db = firebase.firestore();