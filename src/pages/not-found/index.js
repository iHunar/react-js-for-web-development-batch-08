import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar />
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </div>
    )
}
export default NotFound