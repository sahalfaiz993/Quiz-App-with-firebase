// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth,sendEmailVerification,onAuthStateChanged, } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// import { getFirestore, } from "https://www.gstatic.com/firebasejs/10.0.0/firestore-auth.js";
 
  const firebaseConfig = {
    apiKey: "AIzaSyBZmylPQS0jMum6soiqC8AhqG8mMT6iiOQ",
    authDomain: "login-pages-d1f04.firebaseapp.com",
    projectId: "login-pages-d1f04",
    storageBucket: "login-pages-d1f04.appspot.com",
    messagingSenderId: "858252292503",
    appId: "1:858252292503:web:ad57c1f231883b6c7994d2"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

sendEmailVerification(auth.currentUser)
  .then(() => {
    onAuthStateChanged(auth, (user) => {
        const uid = user;      
      if (user) {
       if (user.emailVerified===true) {
        window.location.href="quiz.html"
        console.log(uid);
       }
       else{
        alert("verify your email")
       }
        } else {
      }
    })
})