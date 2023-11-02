import React, { useState } from "react";
import { Navbar, Footer, Input, Button } from "../../components";
const AboutUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const addData = () => {
    if (name === "") {
      setNameMessage("Full name required!");
    } else if (phone === "") {
      setNameMessage("");
      setPhoneMessage("Phone number required!");
    } else if (password === "") {
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("Password required!");
    } else if (email === "") {
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("");
      setEmailMessage("Email requied");
    } else {
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("");
      setEmailMessage("");
      setMessage("Success");
      const user = {
        name: name,
        phone: phone,
        email: email,
        password,
      };
      users.push(user);
      console.log("user", user);

      setTimeout(() => {
        setEmail("");
        setPhone("");
        setName("");
        setPassword("");
        setMessage("");
      }, 1000);
    }
  };
  return (
    <div>
      <Navbar />
      <h1>About page</h1>
      <Input
        title="Full Name"
        value={name}
        onChange={(val) => setName(val.target.value)}
        type="text"
        placeholder="Enter Full Name"
        name="fullName"
        message={nameMessage}
      />
      <Input
        title="Phone Number"
        value={phone}
        onChange={(val) => setPhone(val.target.value)}
        type="number"
        placeholder="Enter Phone Number"
        name="phone"
        message={phoneMessage}
      />
      <Input
        title="Password"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(val) => setPassword(val.target.value)}
        name=""
        message={passwordMessage}
      />
      <Input
        title="Email Address"
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={(val) => setEmail(val.target.value)}
        name="email"
        message={emailMessage}
      />
      <p style={{ color: "green" }}>{message}</p>
      <Button title="Add" border={true} onClick={addData} />

      <br />
      <br />
      <hr />
      <br />
      <br />
      {/* {show ?
        <Button
          title="Hide Data"
          border={false}
          onClick={() => setShow(true)}
        /> :
        <Button
          title="Show Data"
          border={false}
          onClick={() => setShow(false)}
        />
      } */}
      <Button
        title={show ? "Hide" : "Show"}
        border={false}
        onClick={() => setShow(!show)}
      />

      {show && (
        <div>{users.length === 0 ? <p>Please add data</p> : users.map((item, index) => {
          return (
            <div key={index} className="card">
              <p>{item.name}</p>
              <p>{item.phone}</p>
              <p>{item.password}</p>
              <p>{item.email}</p>
              <div>
                <Button title="Edit" border={false}/>
                <Button title="Delete" border={true}/>
                </div>
            </div>
          )
        })}</div>
      )}

      <Footer />
    </div>
  );
};
export default AboutUs;
