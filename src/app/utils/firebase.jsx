import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyBrM_J9rBTE7K0DIYd8voUJADRJJsE9w-Q",
  authDomain: "portfolio-7e076.firebaseapp.com",
  projectId: "portfolio-7e076",
  storageBucket: "portfolio-7e076.appspot.com",
  messagingSenderId: "187566275226",
  appId: "1:187566275226:web:da3117806875d1d7e1fd23"
};

  const app = firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig);

const auth = app.auth();

export { auth }
