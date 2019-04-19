import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemEdit from "../ItemEdit/ItemEdit"
class UserItems extends Component {
    render() {
        return (
            <Router>
                <div className="col-lg-12">
                    <div className="userItems">
                        <div className="row"></div>
                        <div className="useritemname">
                            {this.props.itemName}
                            <button type="submit"> 
                            <Link to={"/ItemEdit"}><span>Edit Item</span></Link> 
                            </button>
                            <button type="submit">REMOVE</button>
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
//  <Link to={"/ItemEdit"}><span>Edit Item</span></Link> 

export default UserItems;