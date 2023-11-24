// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-tDwkBOesdWJaNU2_rxverqNbo6nFw9g",
  authDomain: "vintagequest-7b7ae.firebaseapp.com",
  projectId: "vintagequest-7b7ae",
  storageBucket: "vintagequest-7b7ae.appspot.com",
  messagingSenderId: "236420494058",
  appId: "1:236420494058:web:1d79ab6a63e253ccb41d93"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}