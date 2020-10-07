import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () =>{
    return (
        <div className="container-fluid m-0 p-0">
            <nav className="navbar navbar-expand-lg navbar-light bg-black">
            <Link className="brand-primary text-whiteout font-weight-bolder" to="/">MOVIES  <span className="brand-secondary">PALACE</span></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            </nav>
        </div>
    )
}

export default NavBar