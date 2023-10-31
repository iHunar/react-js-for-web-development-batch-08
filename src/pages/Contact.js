import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar";
const Contact = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Contact Page</h1>
            <hr />
            <Navbar />
            {/* <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about-us">About</a>
                </li>
                <li>
                    <a href="/contact-us">Contact</a>
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact</Link>
                </li>
            </ul>
            <hr />
            <button onClick={() => window.location.assign("/")}>Home</button>
            <button onClick={() => window.location.assign("/about-us")}>About</button>
            <button onClick={() => window.location.assign("/contact-us")}>Contact</button>
            <hr />
            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate("/about-us")}>About</button>
            <button onClick={() =>navigate("/contact-us")}>Contact</button> */}
        </div>
    )
}
export default Contact