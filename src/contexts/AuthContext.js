import React, { useContext, useEffect, useState } from 'react'
import { auth, providerG } from '../firebase/config'


const AuthContext = React.createContext()

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [cUser, setcUser] = useState()

    const loginG = () => {
        return auth.signInWithPopup(providerG)
    }

    const signOut = () => {
        return auth.signOut()
    }

    useEffect(() => {
        const unSub = auth.onAuthStateChanged(user => {
            setcUser(user)
            setLoading(false)
        })

        return unSub
    },[])

    const value = {
        cUser,
        loginG,
        signOut
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }
