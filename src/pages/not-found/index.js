import React from "react";
import { Navbar } from "../../components";
import { useNavigate } from 'react-router-dom';
import Layout from "../../layout";
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Layout footerHide={true}>
            <h1>Page Not Found</h1>
            <button onClick={() => navigate('/')}>Back to Home Page</button>
        </Layout>
    )
}
export default NotFound