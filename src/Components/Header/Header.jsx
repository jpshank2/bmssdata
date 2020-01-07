import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'

export default function Header() {
    const [view, setView] = useState(false)

    let menuToggle = () => {
        setView(!view)
        if (!view) {
            document.getElementById("navbar").style.display = "none"
            document.getElementById("burger").classList.remove("change")
        } else {
            document.getElementById("navbar").style.display = "flex"
            document.getElementById("burger").classList.add("change")
        }
    }

    return (
        <header>
            <Link to="/"><img style={{ padding: "15px", cursor: "pointer" }} width={180} alt="BMSS Logo" src={require("./bmsslogo.svg")} /></Link>
            <section onClick={menuToggle} id="burger" className="burger">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </section>
            <nav id="navbar">
                <Link to="/bmsscpas" className="link">BMSS CPAs & Business Advisors</Link>
                <Link to="/abacusit" className="link">Abacus Technologies</Link>
                <Link to="/pbspay" className="link">Payroll & Benefit Solutions</Link>
                <Link to="/bmsswesson" className="link">BMSS Wesson Wealth Solutions</Link>
                <Link to="/eversource" className="link">Eversource?</Link>
            </nav>
        </header>
    )
}
