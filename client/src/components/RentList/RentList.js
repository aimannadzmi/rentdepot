import React from "react"
import "./RentList.css"
import {Button, ButtonToolbar} from "react-bootstrap"

const RentList = (props) => {
        return (
            // onClick={props.onClick}
            
            <div className="col-lg-5" id="showItems">
                    <div className="container"><br></br>
                        <div className="row">
                       <div className="rentImage">
                            <img src={dbImageToBase64(props.itemImage)}></img>

            
                            </div>
                            <div className="row col-sm-4 postItemButtons">
                            {/* <a href={"/ChatPage/" + props.username}>chat</a> */}
                            <ButtonToolbar>
                            <Button variant="outline-info" id="saveItemButton" href={"/Profile/" + props.saveditem}>Save</Button>
                            <br/>
                            <Button variant="info" id= "contactItemOwnerButton" href={"/ChatPage/" + props.username}>Contact</Button>
                            </ButtonToolbar>
                            {/* <MyVerticallyCenteredModal/> */}
                            </div>

                        </div>
                        <div className="col-lg-12 row" id="rentDetails">
                        
                            <div className="col-sm-6" id="itemNamePosted">
                                {props.itemName}
                            </div>
                            <div className="col-sm-6" id="itemPricePosted">$ {props.itemPrice} per day
                            </div>
                            
                            <div className="row">
                            <div className="col-lg-12" id="itemLocation"> Location: 
                                {props.itemLocation}
                            </div>
                            <br/>
                            </div>
                            <div className="row" id="itemDescription"> 
                            <div className="col-lg-12"> Description: 
                                {props.itemDescription}

                            </div>
                            </div>

                        </div>
                       
                        
                        </div>

                    </div>
                   
                
        );
}

// Converts image pulled from the database to base64 data the img tag can use
function dbImageToBase64(itemImage) {
    if (!itemImage || !itemImage.data) 
        return;

    var binary = '';
    var bytes = [].slice.call(new Uint8Array(itemImage.data));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return "data:image/jpeg;base64," + window.btoa(binary);
};

export default RentList;