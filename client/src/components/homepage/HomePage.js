import React from "react";
import "./HomePage.css";

const HomePage = () => (
    <div className="container">
        <div className="col-lg-12" id="searchBar">
            <input type="text" placeholder="Search" style={{width:"600px"}}/>
        </div>

        <div className="col-lg-12" id="showItems">
        </div>
    </div>
)

export default HomePage;