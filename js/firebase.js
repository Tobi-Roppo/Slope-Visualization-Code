import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCoA8JnIZVOq_cipStyAQAneWXnCSet-LY",
  authDomain: "slope-visualization-code.firebaseapp.com",
  projectId: "slope-visualization-code",
  storageBucket: "slope-visualization-code.appspot.com",
  messagingSenderId: "187412634627",
  appId: "1:187412634627:web:0a353536958e0bf5a78236",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the form from submitting
    var email = document.getElementById('floatingInput').value;
    var password = document.getElementById('floatingPassword').value;
    var username = document.getElementById('floatingInput2').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('user created');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
});

