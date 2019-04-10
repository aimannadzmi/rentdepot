import React, { Component } from "react"
import "./HomePage.css";

import Search from "../Search/Search.js";
import firebase from "firebase"
import axios from "axios"

class HomePage extends Component {
    state = {
        items: []
    };

    componentDidMount = () => {

        this.updateItems();
    }

    updateItems = () => {
        axios.get("/api/getpostforms").then(response => {
            this.setState({ items: response.data });
        })
    }

    render() {
    return (
        <div className="container">

            <Search />

            <div className="row" id="homePageRow2">
                <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        </div>

                    </div>
                </div>

                <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        </div>

                    </div>
                </div>

                <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        </div>

                    </div>
                </div>

                <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        </div>

                    </div>
                </div>

                <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        </div>

                    </div>
                </div>

                <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src=""></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                         {this.state.items.map(item => 
                         <li>{item.itemName}, {item.itemPrice}</li>
                         )}
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    );
}
}

export default HomePage;