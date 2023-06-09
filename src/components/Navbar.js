import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive, isPending }) => `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive, isPending }) => `nav-link ${isPending ? "pending" : isActive ? "active" : ""}`}>{props.aboutText}</NavLink>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onChange={props.toggle} checked={props.theme === 'dark'} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme === 'light' ? 'Enable' : 'Disable'} Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set Title Here',
    aboutText: 'Set about us text here'
}