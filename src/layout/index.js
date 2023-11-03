import React from "react";
import { Navbar, Footer } from "../components";
const Layout = ({ children, footerHide, username }) => {
    return (
        <div>
            <Navbar username={username} />
            {children}
            {!footerHide && <Footer />}

        </div>
    )
}
export default Layout
