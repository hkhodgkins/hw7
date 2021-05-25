const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDpiFcHIDvICxaLFSo1LFWKbX-ClPQ5SVg",
  authDomain: "kiei-451-dbceb.firebaseapp.com",
  projectId: "kiei-451-dbceb",
  storageBucket: "kiei-451-dbceb.appspot.com",
  messagingSenderId: "593690329695",
  appId: "1:593690329695:web:cd525bd7cc2ca5994211ea"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase