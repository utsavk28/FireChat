import React from 'react'
import {useAuth} from '../../contexts/AuthContext'

const Logout = () => {

    const {signOut} = useAuth()

    const handleClick = async () => {
        try {
            await signOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="logout-div" >
            <button onClick={handleClick} className="btn btn-danger" >Sign Out</button>
        </div>
    )
}

export default Logout
