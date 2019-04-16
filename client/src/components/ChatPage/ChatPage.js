import React, { Component } from 'react';
import Chat from '../Chat/Chat';
import firebase from 'firebase';
import Chatlist from '../ChatList/ChatList';
import '../ChatPage/ChatPage.css'


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
      <div>
          <div id="chatList">
          <Chatlist />
          </div>
          <br/>
          <div className='col-lg-8' id="chatRoom">
            {/* <button onClick={this.handleChatSelect} value='Alex'>Alex</button>
            <button onClick={this.handleChatSelect} value='Mike'>Mike</button> */}
            {this.props.match.params.user2 !== '' && <Chat id="user1" user1={firebase.auth().currentUser.displayName} id="user2" user2={this.props.match.params.user2} />}
            {/* <Chat user1='Freddy' user2='Mike' /> */}
            {/* <Chat user1='Mike' user2='Freddy' /> */}
            {/* <Chat user1='Freddy' user2='Alex' /> */}
            {/* <Chatlist user1='Freddy'/> */}
        
        </div>
      </div>
    );
  }
}

export default ChatPage;