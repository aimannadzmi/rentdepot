import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemEdit from "../ItemEdit/ItemEdit"
import "./UserItems.css"
import axios from "axios"

class UserItems extends Component {
    constructor() {
        super();
        this.state={
            deleted:false
        };
    }
    nowDeleted() {
        this.setState({
            deleted: true
        });
    }
    handleClick = () => {
        console.log('Click happened');
        
        axios.post("/api/getpostforms/delete/"+ this.props.itemId).then(response => {
            console.log(response.data);
            this.nowDeleted();
        })
    
    }
    render() {
        if (this.state.deleted) return null;
        return (
            <Router>
                <div className="col-lg-12">
                    <div className="userItems">
                        <div className="row"></div>
                        <div className="useritemname">
                        <div className="justTheName">
                            {this.props.itemName}
                            </div>
                            <div className="buttonss">
                            <button type="submit" id="editItemButton"> 
                            <Link to={"/ItemEdit"}><span>Edit</span></Link> 
                            </button>
                            <button onClick={this.handleClick} type="submit" id="deleteItemButton">Delete</button>
                            </div>
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


export default UserItems;