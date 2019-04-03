import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import HomePage from "./components/HomePage/HomePage"
import Navbar from "./components/Navbar/Navbar";

firebase.initializeApp({
  apiKey: "AIzaSyAK2iUyH64f3JJWBpgEBSg_lSF_gqV5v-s",
  authDomain: "rentdepot-afe00.firebaseapp.com"
})

class App extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
            {/* <img
              alt="profile picture"
              src={firebase.auth().currentUser.photoURL}
            /> */}
            <Navbar/>
            <HomePage/>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default App

// import React, { Component } from "react";
// import Login from "./components/LoginPage/Login.js";
// import AccountSignUp from "./components/AccountSignUp/Account.js";
// import $ from 'jquery';
// import HomePage from "./components/HomePage/HomePage.js";
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
// /**
//  * The main App component that holds our whole React app
//  */

// firebase.initializeApp({
//   apiKey: "AIzaSyAK2iUyH64f3JJWBpgEBSg_lSF_gqV5v-s",
//   authDomain: "rentdepot-afe00.firebaseapp.com"
// })

// class App extends Component {
//   state = { isSignedIn: false }
//   uiconfig = {
//     signInFlow: "popup",
//     signInOptions: [
//       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//       firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//       firebase.auth.EmailAuthProvider.PROVIDER_ID
//     ],
//     callbacks: {
//       signInSuccess: () => false
//     }
//   }

//   componentDidMount = () => {

//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: !!user })
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.isSignedIn ? (
//           <span>
//           <div> Signed In!</div>
//           <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
//             <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
//             <img
//               alt="profile picture"
//               src={firebase.auth().currentUser.photoURL}
//             />
//           </span>
//         ) : (
//             <StyledFirebaseAuth
//               uiconfig={this.uiconfig}
//               firebaseauth={firebase.auth()} />
//           )}
//         <div className="App-header">
//         </div>
//          <p className="App-intro">
//           {/* <Login /> */}
//            {/* <AccountSignUp /> */}
//            {/* <HomePage/>  */}
//          </p>
//       </div>
//     )
//   }
// }
// export default App;