import React from 'react';
import './Login.scss'
import Button from "@material-ui/core/Button";
import {auth, provider} from "../../firebase";

const Login = () => {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .catch(error=>alert(error.message))

  }
  return (
    <div className={'login'}>
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt=""/>
        <h1>IMessage</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>

    </div>
  );
};

export default Login;
