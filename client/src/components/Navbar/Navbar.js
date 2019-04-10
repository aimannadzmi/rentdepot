import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../homepage/HomePage.js";
import Inbox from "../Inbox/Inbox.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import Post from "../Post/Post.js";
import "./Navbar.css"
import Footer from "../Footer/Footer.js"

export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <div className="container nav">
                    <div className="row">
                        <div className="col-lg-8">
                            <nav className="navbar">
                                <ul><Link to={"/"}><span>Home</span></Link></ul> 
                                <ul><Link to={"/Post"}><span>Post Item</span></Link></ul> 
                                <ul><Link to={"/Inbox"}><span>Messages</span></Link></ul> 
                                <ul id="navMove"><Link to={"/Profile"}><span>My Profile</span></Link></ul>
                            </nav>
                        </div>
                    </div>
                    <Footer/>
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
