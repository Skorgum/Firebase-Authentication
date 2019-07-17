// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCCJzvIcPUPTcn5jsc1T727-OWc3AittmM",
  authDomain: "event-meta-search.firebaseapp.com",
  databaseURL: "https://event-meta-search.firebaseio.com",
  projectId: "event-meta-search",
  storageBucket: "",
  messagingSenderId: "650900915826",
  appId: "1:650900915826:web:919356c789cac91a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function (user) {
  window.user = user;
  // Step 1:
  //  If no user, sign in anonymously with firebase.auth().signInAnonymously()
  //  If there is a user, log out out user details for debugging purposes.
});

document.querySelector('#sign-in').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  var email = document.querySelector('#email').value;
  var password = document.querySelector('#password').value
  var credential = firebase.auth.EmailAuthProvider.credential(email, password);
  var auth = firebase.auth();
  var currentUser = auth.currentUser;

  // Step 2
  //  Get a credential with firebase.auth.emailAuthProvider.credential(emailInput.value, passwordInput.value)
  //  If there is no current user, log in with auth.signInWithCredential(credential)
  //  If there is a current user an it's anonymous, atttempt to link the new user with firebase.auth().currentUser.link(credential) 
  //  The user link will fail if the user has already been created, so catch the error and sign in.
});

document.querySelector('#sign-out').addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  firebase.auth().signOut();
});