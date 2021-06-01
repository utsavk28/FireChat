import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'

const Login = () => {
    const { loginG } = useAuth()
    const [err, setErr] = useState('')
    const [loading, setLoading] = useState(false)


    const handleClick = async () => {
        try {
            setErr('')
            setLoading(true)
            await loginG()
        } catch (error) {
            setErr('Failed to Sign In with Google. Please Try Again')
        }
        setLoading(false)
    }

    return (
        <div className="login-div" >

            {err !== '' && <div className="alert alert-danger" id="alert-div" role="alert" >{err}
            </div>}
            <button disabled={loading} onClick={handleClick} className="btn btn-outline-primary" >Login With Google</button>

        </div>
    )
}

export default Login
