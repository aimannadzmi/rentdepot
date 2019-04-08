import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../homepage/HomePage.js";
import Inbox from "../Inbox/Inbox.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import Post from "../Post/Post.js";
import "./Navbar2.css"

export default class Navbar2 extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <nav className="navbar">
                                <ul><Link to={"/"}>Home</Link></ul> 
                                <ul><Link to={"/Post"}>Post Item</Link></ul> 
                                <ul><Link to={"/Inbox"}>Messages</Link></ul> 
                                <ul><Link to={"/Profile"}>My Profile</Link></ul>
                            </nav>
                        </div>
                    </div>
                </div>

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/Inbox" component={Inbox} />
                    <Route path="/Profile" component={Profile} />
                    <Route path="/Post" component={Post} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
            </Router>
        );
    }
}
