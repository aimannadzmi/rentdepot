import React, { Component } from "react"
import "./Post.css"
import axios from "axios"
import firebase from "firebase"
import $ from "jquery"
import ItemEdit from "../ItemEdit/ItemEdit"


export default class Form extends Component {
    fileInput = React.createRef();

    constructor(props) {
        super(props)
        let userName = firebase.auth().currentUser.displayName;
        this.state = {
            user: userName,
            itemName: '',
            itemPrice: '',
            itemDescription: '',
            itemLocation: '',
            itemImage: ''
        }
    };
    selectedFileHandler = (e) => {
        e.preventDefault();
        this.setState({
             itemImage: e.target.files[0]
        })
        console.log(e.target.files[0])
        console.log("this hit")
    }
    

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleFormSubmit = (e) => {
        const data = this.state
        console.log(data);

        let file = this.fileInput.current.files[0];
        let formData = new FormData()

        // Because it is a multi-part form with file data, we have to build the form data like this
        formData.append('image', file)
        formData.append('username', this.state.user);
        formData.append('itemName', this.state.itemName);
        formData.append('itemPrice', this.state.itemPrice);
        formData.append('itemLocation', this.state.itemLocation);
        formData.append('itemDescription', this.state.itemDescription);
        formData.append('itemImage', this.state.itemImage);
        
        axios.post("/api/getpostforms/add", formData).then(response => {
            console.log("Item added", response);
            alert("your item has been posted!")
            // Tell our parent component that we've updated the database
            if (this.props.afterAddCallback) {
              this.props.afterAddCallback();
            }
          })

    }
    
    formValidation = (e) => {
        if(this.state.itemName === "" || this.state.itemPrice === "" || 
        this.state.itemLocation === "" || this.state.itemDescription === "" ||
        this.state.itemImage === null){
            alert("Please fill out every field of the form!")
        }else {
            this.handleFormSubmit();
            e.preventDefault();

        }
    }

    render() {
        return (
            <div className="container" id="postForm">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Rent Out Your Item</h2>
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
                                            value={this.state.itemPrice}  />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput4"></label>
                                    <input type="text" 
                                            className="form-control" 
                                            id="formGroupExampleInput"
                                            placeholder="City"
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
                                        id="imageUploadInput"
                                        name="itemImage"
                                        method="post" enctype="multipart/form-data"
                                        ref={this.fileInput}
                                        // value={this.state.itemImage}
                                          />
                                    </div>
                                </div>
                                <input type="submit"
                                //  onClick={()=>{ alert("Your item has been posted!"); }}
                                  className="submitForm"
                                   id="buttoncolor" 
                                   value="Post Item"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

