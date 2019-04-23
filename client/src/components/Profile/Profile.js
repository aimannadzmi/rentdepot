import React, { Component } from "react";
import "./Profile.css"
import firebase from "firebase"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserItems from "./UserItems"
import axios from "axios"
import ItemEdit from "../ItemEdit/ItemEdit"
import SavedItems from "./SavedItems"

export default class Profile extends Component {
    constructor(props) {
        super(props)
        let userName = firebase.auth().currentUser.displayName;
        this.state = {
            user: userName,
            items: []
        }
    };

    componentDidMount = () => {
        this.appendItems();
    }

    appendItems = () => {
        axios.get("/api/getpostforms/get/myprofile/" + this.state.user
        ).then(response => {
            this.setState({ items: response.data });
            console.log("user's items added", response);
          })
    }

    render() {
    return (
        <Router>

        {/* <ItemEdit/> */}
            <div className="container col-lg-12 row profilePage">
                    <div className="col-md-6 rentList">

                    <h4>My Items</h4>
                    {this.state.items.map(item => 
                         <UserItems itemName={item.itemName}
                                 itemPrice={item.itemPrice}
                                 itemLocation={item.itemLocation}
                                 itemDescription={item.itemDescription}
                                 itemImage={item.itemImage}
                                 itemId={item.id}/>
                         )}
                         </div>
                    
                <div className="col-md-5" id="favoritesList">

                    <div className="favoriteThings">
                    <h4>My Favorite Items</h4>
                    {this.state.items.map(item => 
                         <SavedItems itemName={item.itemName}
                                 itemPrice={item.itemPrice}
                                 itemLocation={item.itemLocation}
                                 itemDescription={item.itemDescription}
                                 itemImage={item.itemImage}/>
                         )}
                    </div>
                </div>  
                </div>        
<Switch>
<Route path="/ItemEdit" component={ItemEdit} />
</Switch>
</Router>
    );
}
}