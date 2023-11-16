import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, AboutUs, ContactUs, Gallery,NotFound,Blog,BlogDetails,CreateBlog } from "../../pages";
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/blog" element={<Blog />} />
                {/* <Route path="/blog-details" element={<BlogDetails />} /> */}
                <Route path="/blog-details/:id" element={<BlogDetails />} />
                <Route path="/create-blog" element={<CreateBlog />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router