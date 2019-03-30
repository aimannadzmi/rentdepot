import React, { Component } from "react";
import logo from "./logo.svg";
import Login from "./components/loginpage/Login";

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
          <Login/>
        </p>
      </div>
    );
  }
}

export default App;