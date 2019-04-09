import firebase from "firebase";

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAK2iUyH64f3JJWBpgEBSg_lSF_gqV5v-s",
    authDomain: "rentdepot-afe00.firebaseapp.com",
    databaseURL: "https://rentdepot-afe00.firebaseio.com",
    projectId: "rentdepot-afe00",
    storageBucket: "rentdepot-afe00.appspot.com",
    messagingSenderId: "754128934156"
  };
  const fire = firebase.initializeApp(config);

  
  let globalUsername;
    function handleSignUp() {
      var email = $('#email').val();
      var password = $('#password').val();
      var conf_pass = $('#txt_conf_pass').val();
	  var username = $('#user_name').val();
		globalUsername = username;
        
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      if (conf_pass != password) {
        alert('The passwords you entered do not match please try again');
        return;
      }
  
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;
 
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
     
      });
		createAccountAlert();
		createAccountAlert();
  	
    }
  toggleSignIn = () => {
      if (firebase.auth().currentUser) {
          window.location.replace("../HomePage/HomePage.html");
      } else {
          var email = $('#email').val();
          var password = $('#password').val();
      }
  }
export default fire;
