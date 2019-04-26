import React, { Component } from "react"
import "./ItemEdit.css"
import { Button, ButtonToolbar } from "react-bootstrap"
import Profile from "../Profile/Profile.js"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import  {withRouter} from 'react-router-dom';

class ItemEdit extends Component {
    state = {
    itemName: "",
    itemPrice: "",
    itemLocation: "",
    itemDescription:"",
    itemImage:"",
    }

    handleEditSubmit =(e) => {
        e.preventDefault();
        console.log(this.state.initialItemName);
    }

    componentDidMount =() => {
        this.getItemDetails();
    }

    getItemDetails =() => {
        axios.get("/api/getpostforms/get/editItem/" + this.props.match.params.itemId).then(response => {
            let item = response.data[0];
            this.setState({ item });
            this.setState({itemName: item.itemName});
            this.setState({itemPrice: item.itemPrice});
            this.setState({itemLocation: item.itemLocation});
            this.setState({itemDescription: item.itemName});
            console.log("posted item", response.data);
        })
    }

    render() {
        console.log(this.props.match.params.itemId);
        return (
                <div className="container" id="postForm">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Edit Your Current Item</h2>
                            <div className="formFillOut">
                                <form onSubmit={this.formValidation}>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput"></label>
                                        <input type="text"
                                            className="form-control"
                                            id="itemNameInput"
                                            placeholder="Item Name"
                                            name="itemName"
                                            onChange={this.handleInputChange}
                                            value={this.state.itemName} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2"></label>
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput2"
                                            placeholder="Price Per Day"
                                            name="itemPrice"
                                            onChange={this.handleInputChange}
                                            value={this.state.itemPrice} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput4"></label>
                                        <input type="text"
                                            className="form-control"
                                            id="formGroupExampleInput"
                                            placeholder="ZIP Code"
                                            name="itemLocation"
                                            onChange={this.handleInputChange}
                                            value={this.state.itemLocation} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput3"></label>
                                        <textarea type="text"
                                            className="form-control"
                                            id="itemDescription"
                                            placeholder="Item Description"
                                            name="itemDescription"
                                            onChange={this.handleInputChange}
                                            value={this.state.itemDescription} />
                                    </div>
                                    <br/>
                                    <div className="spacey">
                                        {/* <div className="form-group">
                                            <div id="uploaditemText">Change Image</div>
                                            <input type="file"
                                                className="form-control-file"
                                                id="imageUploadInput"
                                                name="itemImage"
                                                method="post" encType="multipart/form-data"
                                                ref={this.fileInput}
                                            // value={this.state.itemImage}
                                            />
                                        </div> */}
                                        
                                        <button
                                            onClick={() => { alert("Your item has been posted!"); }}
                                            className="submitForm buttonMatch"
                                            value="Edit Item">Edit Item</button>
                                        <button className="cancelEdit buttonMatch"
                                        ><Link to={"/Profile"}><span>Cancel</span></Link>
                                        </button>
                                 
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               
        )
    }
}

export default withRouter(ItemEdit);