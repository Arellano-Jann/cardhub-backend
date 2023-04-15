// const functions = require("firebase-functions");

// // // Create and deploy your first functions
// // // https://firebase.google.com/docs/functions/get-started
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDmxG4o79Bvz8IfVJo2rKXIxMcV-08KCAQ",
//   authDomain: "cardhub-backend.firebaseapp.com",
//   projectId: "cardhub-backend",
//   storageBucket: "cardhub-backend.appspot.com",
//   messagingSenderId: "255952821694",
//   appId: "1:255952821694:web:13d0e9a60f251ddd336def",
//   measurementId: "G-47J21435HD"
// };
// var storage = firebase.storage();
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // export const app = initializeApp(firebaseConfig);

//  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

function uploadFile() {
  var storageRef = ref(storage, 'liam.png');
  var file = document.getElementById('file-input').files[0];

  storageRef.put(file).then(function(snapshot) {
    console.log('File uploaded successfully!');
  }).catch(function(error) {
    console.error(error);
  });
}