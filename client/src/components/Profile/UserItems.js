import React, { Component } from "react"

const UserItems = (props) => {
        return(
            <div className="col-lg-12">
                <div className="userItems">
                    {props.itemName}
                </div>
            </div>
        );
}

export default UserItems;