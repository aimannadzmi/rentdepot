import React, { Component } from 'react';
import Chat from '../Chat/Chat';
import firebase from 'firebase';
// import Chatlist from './components/Chatlist/Chatlist';
// require('./App.css');


class ChatPage extends Component {
  state = {
    chatSelected: ''
  }
  componentDidMount() {

  }

  handleChatSelect = (e) => {
    const chat = e.target.value;
    this.setState({ chatSelected: chat })
  }

  render() {
    return (
      <div className="App">
        <div className="container" id="chatRoom">
          <div className="row">
            <button onClick={this.handleChatSelect} value='Alex'>Alex</button>
            <button onClick={this.handleChatSelect} value='Mike'>Mike</button>
            {this.state.chatSelected !== '' && <Chat user1={firebase.auth().currentUser.displayName} user2={this.state.chatSelected} />}
            {/* <Chat user1='Freddy' user2='Mike' /> */}
            {/* <Chat user1='Mike' user2='Freddy' /> */}
            {/* <Chat user1='Freddy' user2='Alex' /> */}
            {/* <Chatlist user1='Freddy'/> */}
            {/* <Chatlist /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ChatPage;