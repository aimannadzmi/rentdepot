import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class Chatlist extends Component {
    state = { chats: [] }
    componentDidMount() {
        this.getChatRooms()
    }

    getChatRooms = () => {
        var chatsDB = firebase
            .database()
            .ref('mychats/' + firebase.auth().currentUser.displayName)
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
                        <Link to={"/ChatPage/" + chat.user2} >
                            {chat.user2}
                        </Link>


                    </li>
                )}
            </div>
        )
    }
}

export default Chatlist;