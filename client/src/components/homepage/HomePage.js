import React from "react";
import "./HomePage.css";

const HomePage = () => (
    <div className="container">
        <div className="col-lg-12" id="searchBar">
            <input type="text" placeholder="Search" style={{width:"600px", marginTop: "20px"}}/>
            <button className="col-lg-3" id="searchBtn">Submit</button>
        </div>

        <div className="col-lg-12" id="showItems">
        </div>
    </div>
)

export default HomePage;