import React, { Component } from 'react';
import Chat from '../Chat/Chat';
import firebase from 'firebase';
import Chatlist from '../ChatList/ChatList';
// require('./App.css');


class ChatPage extends Component {
  state = {
    chatSelected: ''
  }
  componentDidMount() {
    console.log(this.props.match.params.user2)
    this.setState({ chatSelected: this.props.match.params.user2 })
  }

  // handleChatSelect = (e) => {
  //   const chat = e.target.value;
  //   this.setState({ chatSelected: chat })
  // }

  render() {
    return (
      <div className="App">
        <div className="container" id="chatRoom">
          <div className="row">
            {/* <button onClick={this.handleChatSelect} value='Alex'>Alex</button>
            <button onClick={this.handleChatSelect} value='Mike'>Mike</button> */}
            {this.props.match.params.user2 !== '' && <Chat user1={firebase.auth().currentUser.displayName} user2={this.props.match.params.user2} />}
            {/* <Chat user1='Freddy' user2='Mike' /> */}
            {/* <Chat user1='Mike' user2='Freddy' /> */}
            {/* <Chat user1='Freddy' user2='Alex' /> */}
            {/* <Chatlist user1='Freddy'/> */}
            <Chatlist />
          </div>
        </div>
      </div>
    );
  }
}

export default ChatPage;