import React, { Component } from "react";
import Login from "./components/loginpage/Login.js";
import AccountSignUp from "./components/accountsignup/Account.js";
import $ from 'jquery'; 
import HomePage from "./components/homepage/HomePage.js";
/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <p className="App-intro">
          <Login />
          {/* <AccountSignUp/> */}
          {/* <HomePage/> */}
        </p>
      </div>
    );
  }
}

export default App;