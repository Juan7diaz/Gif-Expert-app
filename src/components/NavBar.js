import React from 'react'

const NavBar = ({title}) => {
    return (
        <nav className="navbar navbar-dark bg-primary justify-content-between">
            <h1 className="title">{title}</h1>
        </nav>
    )
}

export default NavBar
