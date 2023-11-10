import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom'
const Navbar = ({ username, propsBgColor }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
    const [bgColor, setBgColor] = useState("yellow");
    useEffect(() => {
       setTimeout(() => {
        setBgColor(propsBgColor)
       }, 2000);
    }, [])
    return (
        <div className="topnav">
            <h1 style={{ backgroundColor: bgColor }}>Navbar</h1>
            <button onClick={() => setBgColor("red")}>Update Color</button>
            <a className={path === "/" && "active"} onClick={() => navigate("/")}>Home</a>
            <a className={path === "/about-us" && "active"} onClick={() => navigate("/about-us")}>About Us</a>
            <a className={path === "/contact-us" && "active"} onClick={() => navigate("/contact-us")}>Contact Us</a>
            <a className={path === "/gallery" && "active"} onClick={() => navigate("/gallery")}>Gallery</a>
            {
                username && <a>Username : {username}</a>
            }
        </div>
    )
}

export default Navbar



// home = 454 > layout > navbar > form > button = 12