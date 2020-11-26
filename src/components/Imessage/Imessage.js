import React from 'react';
import './Imessage.scss'
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";

const Imessage = () => {
  return (
    <div className={'imessage'}>
      <Sidebar/>
      <Chat/>
    </div>
  );
};

export default Imessage;
