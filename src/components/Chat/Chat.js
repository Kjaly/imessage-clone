import React, {useEffect, useState} from 'react';
import './Chat.scss'
import MicNoneIcon from '@material-ui/icons/MicNone';
import IconButton from "@material-ui/core/IconButton";
import Message from "../Message/Message";
import {useSelector} from "react-redux";
import {selectChatId, selectChatName} from "../../features/chatSlice";
import db from "../../firebase";
import firebase from "firebase";
import {selectUser} from "../../features/userSlice";
import FlipMove from "react-flip-move";

const Chat = () => {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])
  const chatName = useSelector(selectChatName)
  const chatId = useSelector(selectChatId)

  const sendMessage = (e) => {
    e.preventDefault()
    input.trim() && db.collection('chats').doc(chatId)
      .collection('messages').add({
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      message:input,
      uid:user.uid,
      photo:user.photo,
      email:user.email,
      displayName:user.displayName,
    })

    setInput('')
  }

  useEffect(() => {
    if (chatId) {
      db.collection('chats').doc(chatId)
        .collection('messages').orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data()
        }))))
    }
  }, [chatId])
  console.log(messages)
  return (
    <div className={'chat'}>
      <div className="chat__header">
        <h4>To: <span className={'chat__name'}>{chatName}</span></h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
        <FlipMove>
          {messages.map(({id, data}) => (
            <Message key={id} contents={data}/>
          ))}
        </FlipMove>
      </div>

      <div className="chat__input">
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={'IMessage'} type="text"/>
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <MicNoneIcon className={'chat__mic'}/>
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
