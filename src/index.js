import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import './styles/main.scss';

/*
import firebase from 'firebase'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhQhn9gzgPq-NIyfn28rR65QEPELrCIgE",
  authDomain: "marekmedia.firebaseapp.com",
  projectId: "marekmedia",
  storageBucket: "marekmedia.appspot.com",
  messagingSenderId: "431882384448",
  appId: "1:431882384448:web:63890c099cbcdb50049ba5"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

*/

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
