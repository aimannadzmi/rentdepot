import React from "react"
import "./Post.css"

const Post = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Rent Out Your Item</h2>
                    <div className="formFillOut">
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput"></label>
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Item Name" />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2"></label>
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Price Per Hour" />
                            </div>
                            <div class="form-group">
                                <label for="formGroupExampleInput2"></label>
                                <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Item Description" />
                            </div>
                            <form>
                                <div class="form-group">
                                    <h4>Upload Item Image</h4>
                                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Post;