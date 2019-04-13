import React, { Component } from "react"
import "./HomePage.css"
import Search from "../Search/Search.js";
import axios from "axios"
import RentList from "../RentList/RentList"

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            search: ""
        }
    };

    componentDidMount = () => {

        this.updateItems();
    }

    updateItems = () => {
        axios.get("/api/getpostforms/").then(response => {
            this.setState({ items: response.data });
            console.log("posted items", response)
        })
        
    }

    appendItems = () => {
        if (this.state.search === "") {
            this.updateItems();
        }else {
            axios.get("/api/getpostforms/get/search/" + this.state.search
            ).then(response => {
              this.setState({ items: response.data });
              console.log("search item posted", response);
            })
        }
        
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.history.push("/" + this.state.search)
        const data = this.state.search
        console.log(data);

        this.appendItems();

    }

    render() {
    return (
        <div className="container">

            {/* <Search /> */}

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
            
            {this.state.items.map(item => 
                         <RentList itemName={item.itemName}
                                 itemPrice={item.itemPrice}
                                 itemLocation={item.itemLocation}
                                //  itemDescription={item .itemDescription}
                                 itemImage={item.itemImage}
                                 username={item.username}/>
                         )}
                
            </div>
    );
}
}

export default HomePage;