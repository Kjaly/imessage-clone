import React, {useEffect} from 'react';
import './App.css';
import Imessage from "./components/Imessage/Imessage";
import {useDispatch, useSelector} from "react-redux";
import {login, logout, selectUser} from "./features/userSlice";
import Login from "./components/Login/Login";
import {auth} from "./firebase";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      if (authUser){
        dispatch(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName:authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])


  return (
    <div className="app">
      {user ? <Imessage/> : <Login/> }
    </div>
  );
}

export default App;
