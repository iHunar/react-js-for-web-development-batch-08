import React, { useState } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
const App = () => {
  const [activePage, setActivePage] = useState("home");
  console.log("activePage", activePage)
  // const [name, setName] = useState("iSkillers");
  // const [email, setEmail] = React.useState("info@gmail.com")
  // var name = "fsdf"
  // name = "Fsdfsdfsdf"
  // const name = "iSkillers";
  // const updateData = () => {
  //   alert("updateData")
  // }

  // const deleteUser = (id) => {
  //   // alert("deleteUser",id)
  //   console.log("id", id)
  // }

  // const UpdateData = () => {
  //   console.log("1", name)
  //   name = "iHunar";
  //   console.log("2", name)
  // }


  // update email address
  // const updateEmailAddress = () => {
  //   setEmail("info@ihunar.com")
  // }
  //   if(){

  //   }
  //  else if(){

  //   }
  //  else{

  //   }
  return (
    <div>
      {/* <button onClick={() => setActivePage("home")}>Home</button>
      <button onClick={() => setActivePage("about")}>About</button>
      <button onClick={() => setActivePage("contact")}>Contact</button> */}

      {/* <p>{name}</p>
      <button onClick={() => setName("iHunar")}>Update</button>

      <p>{email}</p>
      <button onClick={() => setEmail("info@iskiller.com")}>Update Email</button>
      <button onClick={updateEmailAddress}>Update Email</button> */}
      {/* <button onClick={UpdateData}>Update</button> */}
      {/* <button onClick={() => alert("iSkillers")}>Update</button>
      <button onClick={updateData}>Update Data</button>
      <button onClick={() => deleteUser("45-er-78")}>Delete User</button> */}
      {/* {activePage === "home" && <h1 id='home-heading'>Home Page</h1>}
      {activePage === "about" && <About />}
      {activePage === "contact" && <Contact />} */}
<About />
      {/* {activePage === "home" ? <h1 id='home-heading'>Home Page</h1> : activePage === "about" ? <About /> :  <Contact />} */}
      {/* <hr />
      <hr />
      <hr />
      <hr /> */}
      {/* ? */}
    </div>
  )
}
export default App