import React from "react"
import "./RentList.css"
import MyVerticallyCenteredModal from "../Popup/Popup.js"
import {Button, ButtonToolbar} from "react-bootstrap"

const RentList = (props) => {
        return (
            <div className="col-lg-5" id="showItems">
                    <div className="container"><br></br>
                        <div className="row">
                            <div className="col-lg-6" id="rentImage">
                            <img src={props.itemImage}></img>
                            </div>
                            <div className="row col-sm-4 postItemButtons">
                            {/* <a href={"/ChatPage/" + props.username}>chat</a> */}
                            <ButtonToolbar>
                            <Button variant="outline-info" id="saveItemButton">Save</Button>
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
                            
                            {/* <div className="row">
                            <div className="col-lg-12">
                                {props.itemLocation}
                            </div>
                            </div>
                            <div className="row">
                                {props.itemDescription}
                            <div className="col-lg-12">

                            </div>
                            </div> */}

                        </div>
                       
                        
                        </div>

                    </div>
                
        );
}

export default RentList;