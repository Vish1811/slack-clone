import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCKi6pQGeiNewwoTk0tyWh1fiPNHyvRlyA",
    authDomain: "vish-slack-clone.firebaseapp.com",
    databaseURL: "https://vish-slack-clone.firebaseio.com",
    projectId: "vish-slack-clone",
    storageBucket: "vish-slack-clone.appspot.com",
    messagingSenderId: "575621650098",
    appId: "1:575621650098:web:22d06a1d0fa4f38b359bab",
    measurementId: "G-NPZ2XPZYE0"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth,provider};
  export default db;



