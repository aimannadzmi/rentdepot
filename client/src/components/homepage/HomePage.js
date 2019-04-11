import React, { Component } from "react"
import "./HomePage.css"
import Search from "../Search/Search.js";
import axios from "axios"
import RentList from "../RentList/RentList"

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
            
            {this.state.items.map(item => 
                         <RentList itemName={item.itemName}
                                 itemPrice={item.itemPrice}
                                 itemLocation={item.itemLocation}
                                 itemDescription={item.itemDescription}
                                 itemImage={item.itemImage}/>
                         )}
                
            </div>
    );
}
}

export default HomePage;