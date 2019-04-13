import React from "react"
import "./RentList.css"
import MyVerticallyCenteredModal from "../Popup/Popup.js"

const RentList = (props) => {
        return (
            <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="row">
                        <div className="col-lg-6" id="rentImage">
                            <img src={dbImageToBase64(props.itemImage)}></img>
                        </div>
                        </div>
                        <div className="col-lg-6" id="rentDetails">
                        <div className="row">
                            <div className="col-sm-12">
                                {props.itemName}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                {props.itemPrice}
                                </div>
                            </div>
                            <MyVerticallyCenteredModal/>
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