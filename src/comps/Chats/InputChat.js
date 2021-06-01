import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { projectFirestore, timestamp } from '../../firebase/config'

const InputChat = ({ dummy }) => {
    const { cUser } = useAuth()
    const [cText, setCText] = useState('')

    const handleChange = (e) => {
        setCText(e.target.value)
    }

    const submitChat = (e) => {
        e.preventDefault()
        console.log(0);

        const collectionRef = projectFirestore.collection('chats');
        collectionRef.add({
            uid: cUser.uid,
            text: cText,
            createdAt: timestamp(),
            displayName: cUser.displayName,
            photoURL: cUser.photoURL
        })
        setCText('')
        dummy.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (


        <div className="input-chat-container" >
            <form className="input-group input-chat" onSubmit={submitChat}>
                <input type="text" className="form-control" placeholder="Type a message" value={cText} onChange={handleChange} />
                <button disabled={cText === ''} className="btn btn-primary" type="submit" id="button-addon2">Send</button>
            </form>
        </div>
    )
}

export default InputChat
