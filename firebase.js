// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAHjLSqOhcJkiNjgqSf-KxDQAWtZ28N4TY",
  authDomain: "quizgametb.firebaseapp.com",
  projectId: "quizgametb",
  storageBucket: "quizgametb.firebasestorage.app",
  messagingSenderId: "199620797940",
  appId: "1:199620797940:web:b40b0e48f12e15476805a1",
  measurementId: "G-9WNKDN8F5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let form = document.getElementById("register-form");
let formarea = document.getElementById("form-position");
let btnnext = document.getElementById("displaybtn");
let welcome = document.getElementById("wellcome");
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const email = form.elements["email"].value;
  const password = form.elements["password"].value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((result) => {
      alert("Registering Complete")
    })
    .catch((error) => {
      alert(error.message)
    })
  console.log(email, password);
});


onAuthStateChanged(auth, (user) => {

  if (user) {
    btnnext.style.display = "block"
    formarea.style.display = "none"
    welcome.innerText= `wellcome ${user.email} You are registered.`
  }
  else {
    btnnext.style.display = "none"
    formarea.style.display = "block"
  }

})