
import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCcHF2aK3MzBn9MwY6xiPQrk44wPz0pj6g",
    authDomain: "hackathon-a1a59.firebaseapp.com",
    databaseURL: "https://hackathon-a1a59.firebaseio.com",
    projectId: "hackathon-a1a59",
    storageBucket: "",
    messagingSenderId: "538665661682",
    appId: "1:538665661682:web:6219a68c3ed6400d"
}

const app = firebase.initializeApp(firebaseConfig)

export default {
    firestore: app.firestore()
}