import React from "react";

const HomePage = () => (
    <div className="container">
        <div className="col-lg-6" id="rentDepotLogo">
            <img className="logo" src=""/>
        </div>

        <div className="col-lg-6" id="navBar">
            <a style={{marginRight: "20px"}} href="">Home</a>
            <a style={{marginRight: "20px"}} href="">Messages</a>
            <a href="">Account</a>
        </div>

    <div className="searchBar">
        <input type="text" placeholder="Search"></input>
    </div>

    </div>
)

export default HomePage;