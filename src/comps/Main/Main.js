import React, { useRef } from 'react'
import Navbar from './Navbar'
import InputChat from '../Chats/InputChat'
import Chats from '../Chats/Chats'

const Main = () => {

    const dummy = useRef()

    return (
        <div>
            <Navbar />
            <Chats dummy={dummy} />
            <InputChat dummy={dummy} />
        </div>
    )
}

export default Main
