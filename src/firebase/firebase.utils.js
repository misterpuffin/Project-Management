import firebase from "firebase"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBKtDGmmtekpcTJm3VxqU3Iq54XyOGo1A0",
    authDomain: "project-management-6c26d.firebaseapp.com",
    databaseURL: "https://project-management-6c26d-default-rtdb.firebaseio.com",
    projectId: "project-management-6c26d",
    storageBucket: "project-management-6c26d.appspot.com",
    messagingSenderId: "13599633099",
    appId: "1:13599633099:web:a922873395ef6b2419f54e",
    measurementId: "G-Z1KZQP0G9K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;