import React, { Component } from "react"
import "./Post.css"
import axios from "axios"


export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: '',
            itemPrice: '',
            itemDescription: '',
            itemLocation: '',
            itemImage: ''
        }
    };
    
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value

        })
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log(data);

        axios.post("/api/getpostforms/add", { 
            itemName: this.state.itemName,
            itemPrice: this.state.itemPrice,
            itemLocation: this.state.itemLocation,
            itemDescription: this.state.itemDescription,
            itemImage: this.state.itemImage
          }).then(response => {
            console.log("Item added", response);
      
            // Tell our parent component that we've updated the database
            if (this.props.afterAddCallback) {
              this.props.afterAddCallback();
            }
          })

    }
    render() {
        return (
            <div className="container" id="postForm">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Rent Out Your Item</h2>
                        <div className="formFillOut">
                            <form onSubmit={this.handleFormSubmit}>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput"></label>
                                    <input type="text" 
                                            className="form-control" 
                                            id="formGroupExampleInput"
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
                                            value={this.state.itemPrice}  />
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
                                     value={this.state.itemDescription}  />
                                </div>
                                
                                <div>
                                    <div className="form-group">
                                        <div id="uploaditemText">Upload Image</div>
                                        <input type="file" 
                                        className="form-control-file" 
                                        id="exampleFormControlFile1"
                                        name="itemImage"
                                        onChange={this.handleInputChange}
                                        value={this.state.itemImage}  />
                                    </div>
                                </div>
                                <input type="submit" className="submitForm" value="Post Item"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

