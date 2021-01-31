import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyArksQPxGNepoqL1sTalcThLbrcPOoJ3F0",
    authDomain: "expense-tracker-pwa-cb63c.firebaseapp.com",
    projectId: "expense-tracker-pwa-cb63c",
    storageBucket: "expense-tracker-pwa-cb63c.appspot.com",
    messagingSenderId: "131211897199",
    appId: "1:131211897199:web:a7433addf4e5fd5732a09a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;