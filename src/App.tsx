import React, { VFC } from "react";
import './App.css';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SingIn'
const App: VFC = () => {
  return (
    <div className="Button">
      <SignUp />
      <SignIn />
    </div>
  )
}

export default App;
