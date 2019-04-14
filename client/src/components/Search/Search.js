import React, { Component } from "react";
import "./Search.css";
import axios from "axios"



export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    };

    appendItems = () => {
        axios.get("/api/getpostforms/" + this.state.search, { 
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice,
            itemLocation: this.state.itemLocation,
            itemDescription: this.state.itemDescription,
            itemImage: this.state.itemImage
          }).then(response => {
            this.setState({ search: response.data });
            console.log("search item posted", response);
          })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log(data);

        this.appendItems();

    }

    render(){
    return (

        <form onSubmit={this.handleFormSubmit} className="form-inline active-cyan-4 center" id="searchBar">
            <input className="form-control form-control-sm mr-3 w-75 tealColoring"
             type="text" 
             placeholder="Search" 
             aria-label="Search" 
             name="search"
             onChange={this.handleInputChange}
             value={this.state.search}/>
                <i className="fas fa-search" aria-hidden="true"></i>
        </form>
    )
}
}



