import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCf8j62K1jloaqa3jQ_-1WP5O2aEhWwbyI",
    authDomain: "react-redux-projects-78a7e.firebaseapp.com",
    databaseURL: "https://react-redux-projects-78a7e.firebaseio.com",
    projectId: "react-redux-projects-78a7e",
    storageBucket: "react-redux-projects-78a7e.appspot.com",
    messagingSenderId: "405944416984",
    appId: "1:405944416984:web:02679ba73127804c"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;