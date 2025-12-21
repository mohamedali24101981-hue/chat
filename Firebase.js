const firebaseConfig = {
  apiKey: "AIzaSyCryfQriZqiL47eUZJbwhDhAEwNMyxjPRA",
  authDomain: "pody-dc57d.firebaseapp.com",
  databaseURL: "https://pody-dc57d-default-rtdb.firebaseio.com",
  projectId: "pody-dc57d",
  storageBucket: "pody-dc57d.firebasestorage.app",
  messagingSenderId: "951900207308",
  appId: "1:951900207308:web:dd01e144a5f55ede712a69"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();