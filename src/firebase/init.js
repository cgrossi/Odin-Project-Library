  import firebase from 'firebase'
  import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCOmjZbVr4CJv8jpvq60Itir-eL8W7XVhQ",
    authDomain: "odin-library-d20b2.firebaseapp.com",
    databaseURL: "https://odin-library-d20b2.firebaseio.com",
    projectId: "odin-library-d20b2",
    storageBucket: "odin-library-d20b2.appspot.com",
    messagingSenderId: "442354587193",
    appId: "1:442354587193:web:cc6a11b17f155663"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()