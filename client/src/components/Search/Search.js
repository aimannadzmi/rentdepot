import React, { Component } from "react";
import "./Search.css";
import axios from "axios"

export default class Search extends Component {
    state = {
        items: []
    };

    componentDidMount = () => {

        this.appendItems();
    }

    appendItems = () => {
        axios.get("/api/getpostforms").then(response => {
            this.setState({ items: response.data });
        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log(data);

        axios.get("/api/getpostforms/get", { 
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice,
            itemLocation: this.state.itemLocation,
            itemDescription: this.state.itemDescription,
            itemImage: this.state.itemImage
          }).then(response => {
            console.log("Item added", response);
      
            if (this.props.afterAddCallback) {
              this.props.afterAddCallback();
            }
          })

    }

    render(){
    return (

        <form onSubmit="" className="form-inline active-cyan-4 center" id="searchBar">
            <input className="form-control form-control-sm mr-3 w-75 tealColoring" type="text" placeholder="Search" aria-label="Search"/>
                <i className="fas fa-search" aria-hidden="true"></i>
        </form>
    )
}
}



