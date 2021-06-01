import React from 'react'
import Login from './Login'

const AuthenticationComp = () => {
    return (
        <div className="auth-container" >
            <div className="logo">
                <img  src={"https://utsavk28.github.io/HostedAssets/FireChat.png"} alt="" />
            </div>
            <Login />
        </div>
    )
}

export default AuthenticationComp
