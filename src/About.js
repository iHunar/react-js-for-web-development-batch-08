import React, { useState } from "react";
import './About.css';
const About = () => {
    // const [users, setUsers] = useState([1, 2, 3, 4, 5])
    const [selectedTag, setSelectedTag] = useState(2);
    console.log("selectedTag", selectedTag)
    const users = [
        {
            name: "User 1",
            email: "info@gmail.com",
            // bgColor: "red",
            verified: false
        },
        {
            name: "User 2",
            email: "info2@gmail.com",
            // bgColor: "blue",
            verified: false
        },
        {
            name: "User 3",
            email: "info3@gmail.com",
            // bgColor: "yellow",
            verified: true
        }
    ]


    const colors = ["Red", "Green", "Blue", "Black", "White", "Red"]
    return (
        <div>
            <h1 id="about-heading">About Page</h1>
            {colors.map((item, index) => {
                return (
                    <button key={index} style={{ backgroundColor: selectedTag === index ? "yellow" : "red" }} onClick={() => setSelectedTag(index)}>{item}</button>
                )
            })}
            {users.map((item, index) => {
                return (
                    <div key={index} className="card">
                        {/* <h1 style={{backgroundColor:item.bgColor}}>User {item.name}</h1> */}
                        {/* <h1 style={{ backgroundColor: item.verified ? "blue":"gray" }}>User {item.name}</h1> */}
                        <h1 style={{ backgroundColor: item.verified && "blue" }}>User {item.name}</h1>
                        <p>{item.email}</p>
                    </div>
                )

            })}
            {/* <h1>User 2</h1>
            <h1>User 3</h1>
            <h1>User 4</h1> */}
        </div>
    )
}
export default About