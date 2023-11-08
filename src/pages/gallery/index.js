import React, { useEffect } from "react";
import Layout from "../../layout";
const Gallery = () => {
    useEffect(()=>{
        console.log("useEffect");
    },[]);
    // const LogOut = () => {
    //     alert("LogOut")
    // }
    // LogOut()
    return (
        <Layout username="User 4">
            <h1>Gallery page</h1>
        </Layout>
    )
}
export default Gallery