import React from "react"

const RentList = (props) => {
        return (
            <div className="col-lg-3" id="showItems">
                    <div className="container"><br></br>
                        <div className="col-lg-4" id="rentImage">
                            <img src={props.itemImage}></img>
                        </div>
                        <div className="col-lg-8" id="rentDetails">
                        {props.itemName}
                        {props.itemPrice}
                        {props.itemLocation}
                        {props.itemDescription}
                        </div>

                    </div>
                </div>
        );
}

export default RentList;