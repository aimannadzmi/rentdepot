import React from "react";
import "./HomePage.css";
import Search from "../Search/Search.js"


const HomePage = () => {
    return (
        <div className="container">

        <div className="col-md-8">
            <Search/>
            </div>
            {/* <div className="row" id="homePageRow1">
                <div className="col-lg-12" id="searchForm">
                    <form className="searchForm" id="searchBar">
                        <input className="searchField" type="search" placeholder="Search" aria-label="Search" />
                        <button className="searchSubmit" type="submit"><img id="searchicon" src={searchicon}/></button>
                    </form>
                </div>
            </div> */}
            <div className="row" id="homePageRow2">
                <div className="col-lg-12" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;