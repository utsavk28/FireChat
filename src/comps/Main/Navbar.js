import React from 'react'
import Logout from './Logout'

const Navbar = () => {
    return (
        <nav id="navbar" class="navbar bg-dark">
            <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 brand-name">FireChat</span>
                <Logout/>
            </div>
        </nav>
    )
}

export default Navbar
