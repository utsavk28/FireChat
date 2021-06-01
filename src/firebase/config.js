import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDZYt7SwtOGJ54IT_hNEnbPCT6meSo1tCQ",
    authDomain: "fire-chat-cdcc3.firebaseapp.com",
    projectId: "fire-chat-cdcc3",
    storageBucket: "fire-chat-cdcc3.appspot.com",
    messagingSenderId: "309322375712",
    appId: "1:309322375712:web:5e7abc0cec734e91021245"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp
var providerG = new firebase.auth.GoogleAuthProvider()

export { projectFirestore, auth, timestamp, providerG }