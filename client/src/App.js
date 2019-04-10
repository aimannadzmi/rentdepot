import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Footer from "./components/Footer/Footer.js"
import Header from "./components/Header/Header.js"
import axios from "axios"
// import Navbar from "./components/Navbar/Navbar"


firebase.initializeApp({
  apiKey: "AIzaSyAK2iUyH64f3JJWBpgEBSg_lSF_gqV5v-s",
  authDomain: "rentdepot-afe00.firebaseapp.com"
})

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
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
      </div>
      <Footer/>
      </div>
    )
  }
}

export default App;