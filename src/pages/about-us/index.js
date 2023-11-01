import React from "react";
import { Navbar, Footer, Input, Button } from "../../components";
const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <h1>About page</h1>
      <Input title="Full Name" type="text" placeholder="Enter Full Name" />
      <Input title="Phone Number" type="number" placeholder="Enter Phone Number" />
      <Input title="Password" type="password" placeholder="Enter Password" />
      <Input title="Email Address" type="email" placeholder="Enter Email Address" />
      <Button title="Login" border={true} />
      <Button title="Logout" border={false} />
      <Button title="Update" border={true} />
      <Button title="" border={false} />
      <Footer />
    </div>
  )
}
export default AboutUs