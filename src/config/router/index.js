import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, ContactUs, Gallery,NotFound } from "../../pages";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router