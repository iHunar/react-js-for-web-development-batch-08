import React from "react";
import { Navbar, Footer } from "../components";
const Layout = ({ children, footerHide, username,bgColor }) => {
    return (
        <div>
            <Navbar username={username} propsBgColor={bgColor} />
            {children}
            {!footerHide && <Footer />}

        </div>
    )
}
export default Layout
