import React, { Component } from "react"
import "./Post.css"


const Post = () => {

    return (
        <div className="container" id="postForm">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Rent Out Your Item</h2>
                    <div className="formFillOut">
                        <form>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput"></label>
                                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Item Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2"></label>
                                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Price Per Hour" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2"></label>
                                <textarea type="text" className="form-control" id="itemDescription" placeholder="Item Description" />
                            </div>
                            <form>
                                <div className="form-group">
                                    <div id="uploaditemText">Upload Image</div>
                                    <input type="file" className="form-control-file" id="exampleFormControlFile1" />
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

export default Post;