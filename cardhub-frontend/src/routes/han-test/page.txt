<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore } from "firebase/firestore";
    import { getStorage, ref, uploadBytes } from "firebase/storage";

    const firebaseConfig = {
        apiKey: "AIzaSyDmxG4o79Bvz8IfVJo2rKXIxMcV-08KCAQ",
        authDomain: "cardhub-backend.firebaseapp.com",
        projectId: "cardhub-backend",
        storageBucket: "cardhub-backend.appspot.com",
        messagingSenderId: "255952821694",
        appId: "1:255952821694:web:13d0e9a60f251ddd336def",
        measurementId: "G-47J21435HD",

        storageBucket: 'gs://cardhub-backend.appspot.com/'
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const storage = getStorage(app);
    const storageRef = ref(storage, 'test');


    file = new File(["Hello, world!"], "hello.txt", {
        type: "text/plain",
    });
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a file');
    });

</script>