import React, { Component } from "react"
import "./Post.css"



export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: '',
            itemPrice: '',
            itemDescription: '',
            itemImage: ''
        }
    };
    
    handleInputChange = (e) => {
        e.preventDefault();
        console.log(e.target.name);
        console.log(e.target.value);
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    componentDidMount() {
        t
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log(data);

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
                                            placeholder="Price Per Hour"
                                            name="itemPrice"
                                            onChange={this.handleInputChange}
                                            value={this.state.itemPrice}  />
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
                                <form>
                                    <div className="form-group">
                                        <div id="uploaditemText">Upload Image</div>
                                        <input type="file" 
                                        className="form-control-file" 
                                        id="exampleFormControlFile1"
                                        name="itemImage"
                                        onChange={this.handleInputChange}
                                        value={this.state.itemImage}  />
                                    </div>
                                </form>
                                <button className="submitForm">Post Item</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
