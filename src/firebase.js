import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyBwoRDEM_wwyehKkDi1Km8T3NVNpZo7zus",
    authDomain: "lampada-teste.firebaseapp.com",
    databaseURL: "https://lampada-teste-default-rtdb.firebaseio.com",
    projectId: "lampada-teste",
    storageBucket: "lampada-teste.appspot.com",
    messagingSenderId: "370258112256",
    appId: "1:370258112256:web:69ca3761b213292fd60de5"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export default firebase.database();
