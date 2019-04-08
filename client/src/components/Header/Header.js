import React from "react";
import "./Header.css";
import Logo from "../../components/images/logo.png"
import firebase from "firebase"
import Navbar2 from "../Navbar/Navbar2"


function Header() {
    return (
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
                <Navbar2/>
            </div>
        </div>
    );
}

export default Header;