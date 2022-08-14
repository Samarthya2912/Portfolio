import { Button } from '@mui/material'
import React from 'react'
import "./Appbar.css"
import { Link } from "react-router-dom"

const Appbar = () => {
    return (
        <header className="appbar">
            <h2>Portfolio</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="feedback">Feedback</Link>
            </nav>
            <Button variant="contained">Admin Login</Button>
        </header>
    )
}

export default Appbar;