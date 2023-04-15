// console.log('in the js');

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage, ref } from "firebase/storage";

// const firebaseConfig = {
//   // apiKey: "AIzaSyDmxG4o79Bvz8IfVJo2rKXIxMcV-08KCAQ",
//   authDomain: "cardhub-backend.firebaseapp.com",
//   projectId: "cardhub-backend",
//   storageBucket: "cardhub-backend.appspot.com",
//   messagingSenderId: "255952821694",
//   appId: "1:255952821694:web:13d0e9a60f251ddd336def",
//   measurementId: "G-47J21435HD"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const storage = getStorage(app);

// function uploadFile() {
//   console.log('uploadFile function called');
//   var file = document.getElementById('file-input').files[0];
//   var storageRef = ref(storage, 'images/' + file.name);
//   var uploadTask = storageRef.put(file);

//   uploadTask.on('state_changed', function(snapshot) {
//     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log('Upload is ' + progress + '% done');
//   }, function(error) {
//     console.error(error);
//   }, function() {
//     console.log('File uploaded successfully!');
//   });
// }