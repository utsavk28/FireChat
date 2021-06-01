import React from 'react'
import { useAuth } from '../../contexts/AuthContext';

const Chat = ({ msg }) => {
    const { cUser } = useAuth()
    const { text, photoURL, uid } = msg;


    return (
        <>
            {cUser.uid !== uid ?
                <div className="chat" >
                    <div className="chat-avatar" >
                        <img src={photoURL} alt="" />
                    </div>
                    <div className="chat-msg" >
                        <p>{text}</p>
                    </div>
                </div>
                :
                <div className="chat chat-sender" >
                    <div className="chat-msg" >
                        <p>{text}</p>
                    </div>
                    <div className="chat-avatar" >
                        <img src={photoURL} alt="" />
                    </div>
                </div>
            }
        </>
    )
}

export default Chat
