import React, { Component } from "react"

const UserItems = (props) => {
    return (
        <div className="col-lg-12">
            <div className="userItems">
                <div className="row"></div>
                <div className="useritemname">
                    {props.itemName}
                    <button type="submit">EDIT</button>
                    <button type="submit">REMOVE</button>
                </div>
            </div>
        </div>
    );
}

export default UserItems;