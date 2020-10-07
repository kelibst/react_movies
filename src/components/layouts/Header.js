import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './Header.scss'
import NavBar from './NavBar'
const Header = () => {
    return (
        <BrowserRouter>
        <div className="header-container">
            <NavBar />
        </div>
        </BrowserRouter>
    )
}

export default Header
