import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const config = {
    apiKey: "AIzaSyA4XDVc_fLez-1K5tvJz2I6XXy50JOcnDI",
    authDomain: "chatty-sofka.firebaseapp.com",
    projectId: "chatty-sofka",
    storageBucket: "chatty-sofka.appspot.com",
    messagingSenderId: "645576485639",
    appId: "1:645576485639:web:d5b3ba09a18ca66b9d33a2",
    measurementId: "G-NSXVQ9ZT1J"
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
