import React, { Component } from './node_modules/react';
import firebase from './node_modules/firebase';



class Chatlist extends Component {
    state = { chats: [] }
    componentDidMount() {
        this.getChatRooms()
    }

    getChatRooms = () => {
        var chatsDB = firebase
            .database()
            .ref('mychats/' + this.props.user1)
        chatsDB.on('value', snapshot => {
            let newChats = []
            snapshot.forEach(child => {
                var chat = child.val()
                newChats.push({ user2: child.key, chatRoomName: chat.chatRoomName })
            })
            this.setState({ chats: newChats })
        })
    }


    render() {
        return (
            <div className="list" id="chatRoom">
            <h2>Chat List</h2>
                {this.state.chats.map((chat) =>
                    <li key={chat.chatRoomName}>
                        {chat.user2} / {chat.chatRoomName}
                    </li>
                )}
            </div>
        )
    }
} 

export default Chatlist;