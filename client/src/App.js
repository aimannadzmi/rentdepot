import React, { Component } from "react";
import Login from "./components/loginpage/login";
import Header from './components/header/header';

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <Header/>
        </div>
        <p className="App-intro">
          <Login/>
        </p>
      </div>
    );
  }
}

export default App;