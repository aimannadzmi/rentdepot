import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import HomePage from "../homepage/HomePage.js";
import Inbox from "../Inbox/Inbox.js";
import Profile from "../Profile/Profile.js";
import Contact from "../Contact/Contact.js";
import Post from "../Post/Post.js";
import "./Navbar.css"

function Navbar() {

  console.log(window.location.pathname);
  return (
    <Router>
      <div className="container">
        <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <img className="rentDepotLogo" src={Logo} /> */}
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <Link to={"/"} className={"nav-link"}>
                    Home
        </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/Inbox"}
                    className={"nav-link"}
                  >
                    Inbox
        </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/Profile"}
                    className={"nav-link"}
                  >
                    My Profile
        </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/Post"}
                    className={"nav-link"}
                  >
                    Post an Item
        </Link>
                </li>
                <li className="nav-item">
                  {/* <Link
                    to={"/Contact"}
                    className={"nav-link"}
                  >
                    Contact Us
        </Link> */}
                </li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
      {/* <div className="col-lg-6">
          <div classNAme="nav-item">
            <div className="col-lg-12" id="searchBar">
              <input type="text" placeholder="Search" style={{ width: "400px", marginTop: "20px" }} />
              <button className="col-lg-3" id="searchBtn">Search</button>
            </div>
          </div>
        </div> */}

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

export default Navbar;