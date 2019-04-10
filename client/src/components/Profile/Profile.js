import React, { Component } from "react";
import "./Profile.css"
import firebase from "firebase"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "../Post/Post"

const Profile = () => {
    return (
        <Router>
        <div className="container profile">
            <div className="row">
                <div className="col-lg-3" id="userProfile">
                    <div className="col-lg-12">
                    <img id="userImage" src="" />
                    </div>
                    <div className="col-lg-12">
                    <h4 id="profileUserName">{firebase.auth().currentUser.displayName}</h4>
                    </div>
                </div>

                <div className="col-lg-7" id="rentList">
                    <div className="rentList">
                    <h4>My Items</h4>

                    <div className="rentedItems"></div>
                    </div>
                </div>
                <div className="col-lg-12" id="favoritesList">
                    <div className="favoriteThings">
                    <h4>My Favorite Items</h4>
                    <div className="favorited"></div>
                    </div>
                </div>          
            </div>
        </div>

<Switch>
<Route path="/Post" component={Post} />
</Switch>
</Router>
    );
}

export default Profile;