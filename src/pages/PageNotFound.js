import React from "react";
import { useNavigate } from 'react-router-dom'
const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Page Not Found</h1>
            <button onClick={()=> navigate('/')}>Back to Home page</button>
        </div>
    )
}
export default PageNotFound