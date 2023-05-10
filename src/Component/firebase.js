
import firebase from "firebase";

const firebaseApp = firebase.initializeApp( {

 apiKey: "AIzaSyByM2nsKc3Fd9N_iJVrk3dmxWRPsEgfJbg",
  authDomain: "portfolio-69dd0.firebaseapp.com",
  projectId: "portfolio-69dd0",
  storageBucket: "portfolio-69dd0.appspot.com",
  messagingSenderId: "570892631267",
  appId: "1:570892631267:web:8e01ffa1ec34329b73d9d6",

})

export var db = firebaseApp.firestore()




