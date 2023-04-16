const firebaseConfig = {
    apiKey: "AIzaSyDmxG4o79Bvz8IfVJo2rKXIxMcV-08KCAQ",
    authDomain: "cardhub-backend.firebaseapp.com",
    projectId: "cardhub-backend",
    storageBucket: "cardhub-backend.appspot.com",
    messagingSenderId: "255952821694",
    appId: "1:255952821694:web:13d0e9a60f251ddd336def",
    measurementId: "G-47J21435HD",
    databaseURL: "https://cardhub-backend-default-rtdb.firebaseio.com/",
  };
  //what the hell
  const app = firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  const database = firebase.database();

  function uploadFile() {
    var file = document.getElementById('file-input').files[0];
    var storageRef = storage.ref().child('images/' + file.name);
    var uploadTask = storageRef.put(file);
  
    uploadTask.on('state_changed', function(snapshot) {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, function(error) {
      console.error(error);
    }, function() {
      console.log('File uploaded successfully!');
      uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log('File uploaded successfully!');
        console.log('Download URL:', downloadURL);
        var uploadedImage = document.getElementById('uploaded-image');
        uploadedImage.src = downloadURL;
      });
    });
  }
  
  // function writeDeckData() {
  //   const db = database();
  //   set(ref(db, 'decks/' + deckId), {
  //     deckname: name,
  //     deck_picture : imageUrl
  //   });
  // }
  