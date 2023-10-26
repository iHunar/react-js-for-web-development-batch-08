import React, { useState } from "react";
const Contact = () => {
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const signUpHandler = () => {
        setMessageType("error")
        if (fullName === "") {
            setMessage("Full name requried!");
            // setMessageType("error")
        } else if (phone === "") {
            setMessage("Phone requried!");
            // setMessageType("error")
        } else if (email === "") {
            setMessage("Email requried!");
            // setMessageType("error")
        } else if (password === "") {
            setMessage("Password requried!");
            // setMessageType("error")
        } else {
            setMessage("Sign Up");
            setMessageType("success")
            // console.log("Full Name :- ", fullName);
            // console.log("Phone Number :- ", phone);
            // console.log("Email :- ", email);
            // console.log("Password :- ", password);
            const user = {
                fullName: fullName,
                phone: phone,
                email: email,
                password: password
            }
            console.log("user >>>>>>>>>>, ", user)
            setFullName("");
            setPhone("");
            setEmail("");
            setPassword("");
            setMessage("");
            setMessageType("")
        }
    };
    return (
        <div>
            <h1>Contact Page</h1>
            <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={fullName}
                onChange={(data) => setFullName(data.target.value)}
            />
            <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(data) => setPhone(data.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(data) => setEmail(data.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(data) => setPassword(data.target.value)}
            />
            {/* <p style={{ color: messageType === "error" ? "red" : "green" }}>{message}</p> */}
            {/* {messageType === "error" ?
                <p className="error">{message}</p> :
                <p className="success">{message}</p>} */}

            <p className={messageType === "error" ? "error" : "success"}>{message}</p>
            <button onClick={signUpHandler}>Sign Up</button>
        </div>
    );
};
export default Contact;
