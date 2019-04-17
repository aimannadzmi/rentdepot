import React, { Component } from 'react';
import firebase from 'firebase';
import { TextField, List, ListItem, ListItemText } from '@material-ui/core';


class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      messages: {},
      //  getUser2: ""
    }
  }

  componentDidMount() {
    this.getMessages()
  }

  componentDidUpdate(prevProps) {
    if (this.props.user2 !== prevProps.user2) {
      this.getMessages();
    }
  }

  onSubmit = (event) => {
    if (event.charCode === 13 && this.state.text.trim() !== '') {
      this.writeMessageToDB(this.state.text)
      this.setState({ text: '' })
    }
  }

  getChatRoom = (user1, user2) => {
    if (user1 < user2) {
      return user1 + '+' + user2;
    } else {
      return user2 + '+' + user1;
    }
  }




  writeMessageToDB = (message) => {
    let chatRoomName = this.getChatRoom(this.props.user1, this.props.user2);
    firebase
      .database()
      .ref('chatroom/' + chatRoomName + '/messages/')
      .push({
        text: message,
        user: this.props.user1,
        // user: this.props.user2

      })

    //storing chatroom names for each user to look up later
    //this will be use by chatlist

    firebase
      .database()
      .ref('mychats/' + this.props.user1 + "/" + this.props.user2)
      .set({
        chatRoomName: chatRoomName,
      })
    firebase
      .database()
      .ref('mychats/' + this.props.user2 + "/" + this.props.user1)
      .set({
        chatRoomName: chatRoomName,
      })
  }




  getMessages = () => {
    let chatRoomName = this.getChatRoom(this.props.user1, this.props.user2);
    var messagesDB = firebase
      .database()
      .ref('chatroom/' + chatRoomName + '/messages/')
      .limitToLast(150)
    messagesDB.on('value', snapshot => {
      let newMessages = []
      snapshot.forEach(child => {
        var message = child.val()
        newMessages.push({ id: child.key, text: message.text, user: message.user })
      })
      this.setState({ messages: newMessages })
    })
  }

  renderMessages = () => {
    return this.state.messages.map(message => (
      <ListItem key={message.key}>
        <ListItemText
          style={{ wordBreak: 'break-word' }}
          primary={message.user + ': ' + message.text}
        />
      </ListItem>
    ))
  }

  handleDeleteChat = (e) => {
    var chat = firebase
      .database()
      .ref('mychats/' + firebase.auth().currentUser.displayName + "/" + this.props.chatSelected).remove()
  }

  render() {
    return (
      <div className='container'>

        <List>
          {this.state.messages.length > 1 &&
            this.renderMessages()
          }

          <h2>{this.props.user1}</h2>
          <h2>{this.props.user2}</h2>
          <button onClick={this.handleDeleteChat}>x</button>
        </List>
        <TextField
          autoFocus={true}
          multiline={true}
          fullWidth={true}
          rowsMax={9}
          placeholder='Type something..'
          onChange={event => this.setState({ text: event.target.value })}
          value={this.state.text}
          onKeyPress={this.onSubmit}
        />
      </div>
    );
  }

}


export default Chat;