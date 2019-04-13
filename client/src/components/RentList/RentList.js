import React from "react"
import "./RentList.css"
import MyVerticallyCenteredModal from "../Popup/Popup.js"
import {Button, ButtonToolbar} from "react-bootstrap"

const RentList = (props) => {
        return (
            <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="row">
                            <div className="col-lg-6" id="rentImage">
                            <img src={props.itemImage}></img>
                        </div>
                        </div>
                        <div className="col-lg-6" id="rentDetails">
                        <div className="row">
                            <div className="col-sm-6">
                                {props.itemName}
                            </div>
                            <div className="col-sm-6">$ {props.itemPrice} per day
                            </div>
                            <div className="row col-sm-6">
                            <ButtonToolbar>
                            <Button variant="info">Info</Button>
                            </ButtonToolbar>
                            <MyVerticallyCenteredModal/>
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
                </div>
        );
}

export default RentList;