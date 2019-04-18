import React, {Component} from "react"
import {Modal, Button} from "react-bootstrap"

export default class MyVerticallyCenteredModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            itemName: ""
        }
    }
    returnProps = () => {
        this.setState({
            itemName: this.props.selectedItemName
        })
    }


    render() {
        return(
     
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              <h4>{this.props.selectedItemName}</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <p>
                {this.props.selectedItemDescription}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        )
    }
} 