import React from "react";
import "./Search.css";

const Search = () => (
    <div className="container">
        <div className="col-lg-12" id="searchBar">
            <input type="text" placeholder="Search" style={{width:"600px", marginTop: "20px"}}/>
            <button className="col-lg-3" id="searchBtn">Search</button>
        </div>
    </div>
)

export default Search;