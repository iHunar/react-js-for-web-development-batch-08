import React from "react";
import { useNavigate, useLocation } from 'react-router-dom'
const Navbar = ({ username }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname
    return (
        <div className="topnav">
            <a className={path === "/" && "active"} onClick={() => navigate("/")}>Home</a>
            <a className={path === "/about-us" && "active"} onClick={() => navigate("/about-us")}>About Us</a>
            <a className={path === "/contact-us" && "active"} onClick={() => navigate("/contact-us")}>Contact Us</a>
            <a className={path === "/gallery" && "active"} onClick={() => navigate("/gallery")}>Gallery</a>
            {
                username  && <a>Username : {username}</a>
            }
        </div>
    )
}

export default Navbar



// home = 454 > layout > navbar > form > button = 12