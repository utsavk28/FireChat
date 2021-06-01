import React from 'react'
import AuthenticationComp from './comps/Auth/AuthenticationComp';
import {useAuth } from './contexts/AuthContext'
import Main from './comps/Main/Main'

function App() {

  const { cUser } = useAuth()

  return (
    <div className="app">

      {cUser ? <Main/> : <AuthenticationComp />}

    </div>
  );
}

export default App;
