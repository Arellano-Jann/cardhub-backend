const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmxG4o79Bvz8IfVJo2rKXIxMcV-08KCAQ",
  authDomain: "cardhub-backend.firebaseapp.com",
  projectId: "cardhub-backend",
  storageBucket: "cardhub-backend.appspot.com",
  messagingSenderId: "255952821694",
  appId: "1:255952821694:web:13d0e9a60f251ddd336def",
  measurementId: "G-47J21435HD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export const app = initializeApp(firebaseConfig);


import { getStorage, ref } from "firebase/storage";

// const storage = getStorage();

// Get a reference to the Firebase Storage service
var storage = firebase.storage();

// Get a reference to the file input element
var fileInput = document.getElementById('/storage/images/LEEM_NEW.png');

// Get the selected file from the file input element
var file = fileInput.files[0];

// Create a storage reference with the storage location
var storageRef = storage.ref('images/' + file.name);

// Upload the file to Firebase Storage
var task = storageRef.put(file);