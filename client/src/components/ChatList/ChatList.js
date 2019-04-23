import React, { Component } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../ChatList/ChatList.css'


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

    handleDeleteChat = (user2) => {
        console.log(user2);
        var chat = firebase
            .database()
            .ref('mychats/' + firebase.auth().currentUser.displayName + "/" + user2 ).remove()
    }


    render() {
        return (
            <div className="list">
                <h2>Chat List</h2>
                {this.state.chats.map((chat) =>
                    <li key={chat.chatRoomName}>
                        <Link to={"/ChatPage/" + chat.user2} >
                            {chat.user2}
                        </Link>
                        <button onClick={() => this.handleDeleteChat(chat.user2)} id="deletechatroom">x</button>
                    </li>
                )}
            </div>
        )
    }
}

export default Chatlist;