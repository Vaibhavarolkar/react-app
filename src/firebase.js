import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDFZJlsQqhXB6-FkCIgS4EGd7X-4CuAqno",
    authDomain: "test-react-app-36563.firebaseapp.com",
    databaseURL: "https://test-react-app-36563.firebaseio.com",
    projectId: "test-react-app-36563",
    storageBucket: "test-react-app-36563.appspot.com",
    messagingSenderId: "744565100658",
    appId: "1:744565100658:web:5d1287e5db22e13a9eb2eb",
    measurementId: "G-Z75D6M4S6M"
};

firebase.initializeApp(config);

export default firebase;
