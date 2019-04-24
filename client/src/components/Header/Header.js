import React from "react";
import "./Header.css";
import Logo from "../../components/images/logo.png"
import firebase from "firebase"
import Navbar from "../Navbar/Navbar"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../homepage/HomePage.js";
// import Inbox from "../Inbox/Inbox.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import ChatPage from "../ChatPage/ChatPage.js";
import Post from "../Post/Post.js";
import Footer from "../Footer/Footer.js"


function Header() {
    return (
        <Router>
        <div className="container" id="header">
            <div className="row">
                <div className="col-lg-4">
                    <img src={Logo} />
                </div>
                <div className="col-lg-4" id="welcomeUser">
                    <h4>Welcome {firebase.auth().currentUser.displayName}</h4>
                </div>
                <div className="col-lg-4" id="signOutBtn">
                    <button id="signOut" onClick={() => firebase.auth().signOut()}>Sign out!</button>
                </div>
            </div>
            <div className="row">
                <Navbar/>
            </div>
            <div className="row">
            
            <Switch>
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Post" component={Post} />
                    <Route path="/ChatPage/:user2?" component={ChatPage} />
                    <Route path="/Contact" component={Contact} />
                    <Route exact path="/:search?" component={HomePage} />
                </Switch>
                
                </div>
                <Footer />
        </div>
        </Router>
    );
}

export default Header;