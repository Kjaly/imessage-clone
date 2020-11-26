import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyBZedfyoHJe7SIXU--rpckqiVQHXC_pwn8",
  authDomain: "imessage-clone-5a1c5.firebaseapp.com",
  databaseURL: "https://imessage-clone-5a1c5.firebaseio.com",
  projectId: "imessage-clone-5a1c5",
  storageBucket: "imessage-clone-5a1c5.appspot.com",
  messagingSenderId: "648654991242",
  appId: "1:648654991242:web:7158a172939925b533e273",
  measurementId: "G-KKSCBV3QD3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()


export {auth,provider}
export default db
