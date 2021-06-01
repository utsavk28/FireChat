import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import useFirestore from '../../hooks/useFirestore'
import Chat from './Chat'
const Chats = ({dummy}) => {
    const { docs } = useFirestore('chats')
    const { cUser } = useAuth()

    return (
        <div className="chats-div" >
            {(cUser && docs) && docs.map(doc => <Chat key={doc.id} msg={doc} />)}
            <div ref={dummy} ></div>
        </div>
    )
}

export default Chats
