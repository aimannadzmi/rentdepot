import React from "react"
import "./RentList.css"
import { Button, ButtonToolbar } from "react-bootstrap"



class RentList extends React.Component {
    state = {
        saveItem: true

    }

    changeColor() {
        this.setState({ saveItem: !this.state.saveItem })
    }
    render() {
        let btn_class = this.state.saveItem ? "outline-info" : "warning";
        // let btn_class = this.state.saveItem ? "Save": "Saved!";
        return (
            // onClick={props.onClick}

            <div className="col-lg-5" id="showItems">
                <div className="container"><br></br>
                    <div className="row">
                        <div className="rentImage">
                            <img src={dbImageToBase64(this.props.itemImage)}></img>
                        </div>
                        <div className="row col-sm-4 postItemButtons">
                            <ButtonToolbar>
                                <Button variant={btn_class} onClick={this.changeColor.bind(this)} id="saveItemButton">Save</Button>
                                <br />
                                <Button variant="info" id="contactItemOwnerButton" href={"/ChatPage/" + this.props.username}>Contact</Button>
                            </ButtonToolbar>
                        </div>
                    </div>
                    <div className="col-lg-12 row" id="rentDetails">
                        <div className="col-sm-6" id="itemNamePosted">
                            {this.props.itemName}
                        </div>
                        <div className="col-sm-6" id="itemPricePosted">$ {this.props.itemPrice} per day
                        </div>
                        <div className="row">
                            <div className="col-lg-12" id="itemLocation"> Location: {this.props.itemLocation}
                            </div>
                        </div>
                        <div className="row" id="itemDescription">
                            <div className="col-lg-12"> Description: {this.props.itemDescription}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
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