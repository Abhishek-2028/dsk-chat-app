import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm22ueOv_6Dz4EKZjEiqtS4rpvmR5Ywdc",
  authDomain: "dsk-chat-app.firebaseapp.com",
  databaseURL: "https://dsk-chat-app-default-rtdb.firebaseio.com",
  projectId: "dsk-chat-app",
  storageBucket: "dsk-chat-app.appspot.com",
  messagingSenderId: "532191711436",
  appId: "1:532191711436:web:ba47809758b0db198d3269",
  measurementId: "G-R826GNZEXK"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
