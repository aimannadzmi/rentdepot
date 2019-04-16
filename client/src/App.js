import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Footer from "./components/Footer/Footer.js"
import Header from "./components/Header/Header.js"
import axios from "axios"
import Logo from "./logo.png"

// import Navbar from "./components/Navbar/Navbar"

var config = {
  apiKey: "AIzaSyAK2iUyH64f3JJWBpgEBSg_lSF_gqV5v-s",
  authDomain: "rentdepot-afe00.firebaseapp.com",
  databaseURL: "https://rentdepot-afe00.firebaseio.com",
  projectId: "rentdepot-afe00",
  storageBucket: "rentdepot-afe00.appspot.com",
  messagingSenderId: "754128934156"
};
const fire = firebase.initializeApp(config);

class App extends Component {
  
  state = { 
    isSignedIn: false,
    items : []
  };


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

    this.updateItems();
    }
    
    updateItems = () => {
      axios.get("/api/getpostforms").then(response => {
        this.processItems(response.data);
      })
    }

    processItems = (items) => {
      let itemsArr = items.map(itemObj => itemObj.items);
      this.setState({ items: itemsArr });
    }


  render() {
    return (
      <div>
      <div className="App" >
        {this.state.isSignedIn ? (
          <span>
            <Header/>
          </span>
        ) : (
          
          <div className="colorfulSignIn container d-flex justify-content-center"> 
          <div className="logoBig d-flex justify-content-center">
                    <img src={Logo} />
                </div>
          <div className="secondElement d-flex justify-content-center">
            <StyledFirebaseAuth id="secondElementt"
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
            </div>
            </div>
          )}
      </div>
      <Footer/>
      </div>
      
    )
  }
}

export default App;

