import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "../homepage/HomePage.js";
import Inbox from "../Inbox/Inbox.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import ChatPage from "../ChatPage/ChatPage.js";
import Post from "../Post/Post.js";
import "./Navbar.css"


export default class Navbar extends Component {
    render() {
        return (
            <nav className="col-lg-12 navbar">
                <ul><Link to={"/"}><span>Home</span></Link></ul>
                <ul><Link to={"/Post"}><span>Post Item</span></Link></ul>
                {/* <ul><Link to={"/Inbox"}><span>Messages</span></Link></ul>  */}
                <ul><Link to={"/ChatPage"}><span>Chat</span></Link></ul>
                <ul id="navMove"><Link to={"/Profile"}><span>My Stuff</span></Link></ul>
            </nav>
        );
    }

}
