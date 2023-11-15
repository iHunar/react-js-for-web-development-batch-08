import React, { useState, useEffect } from "react";
import { Input, Button } from "../../components";
import Layout from "../../layout";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  updateDoc,
  getDoc,
  getDocs,
  query,
  where,
  onSnapshot ,
  deleteDoc 
} from "firebase/firestore";
import firebase from "../../config/firebase";
const AboutUs = () => {
  const db = getFirestore(firebase);
  const [name, setName] = useState("Abc");
  const [phone, setPhone] = useState("12345678910");
  const [password, setPassword] = useState("132131313");
  const [email, setEmail] = useState("info@gmail.com");
  const [nameMessage, setNameMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [getDataLoading, setGetDataLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  // const [edit, setEdit] = useState(false)

  useEffect(() => {
    let getData = async () => {
      // const docRef = doc(db, "todos", "q6AEwIelgnkPyUxo6I5I");
      // const docSnap = await getDoc(docRef);
      // if (docSnap.exists()) {
      //   console.log("Document data:", docSnap.data());
      // } else {
      //   // docSnap.data() will be undefined in this case
      //   console.log("No such document!");
      // }

      // const q = query(collection(db, "todos"));
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      // });

      // const q = query(
      //   collection(db, "todos")
      // );
      // let newTodos = [];
      // console.log("newTodos >>>>>", newTodos);
      // const querySnapshot = await getDocs(q);
      // querySnapshot.forEach((doc) => {
      //   console.log(doc.id, " => ", doc.data());
      //   newTodos.push(doc.data());
      // });
      // setTodos([...newTodos]);
      // console.log("newTodos >>>>>", newTodos);

      const q = query(collection(db, "todos"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const newTodos = [];
        querySnapshot.forEach((doc) => {
          newTodos.push(doc.data());
        });
        setTodos([...newTodos]);
      });

      setGetDataLoading(false);
    };
    getData();
  }, []);
  const [users, setUsers] = useState([
    {
      name: "User 1",
      phone: "032323",
      email: "email1@gmail.com",
      password: "password",
      edit: false,
    },
    {
      name: "User 2",
      phone: "032323",
      email: "email2@gmail.com",
      password: "password",
      edit: false,
    },
    {
      name: "User 3",
      phone: "032323",
      email: "email3@gmail.com",
      password: "password",
      edit: false,
    },
  ]);
  const [show, setShow] = useState(false);
  const [phoneDone, setPhoneDone] = useState(false);
  const [phoneVStart, setphoneVStart] = useState(false);
  const [emailDone, setEmailDone] = useState(false);
  const [emailVStart, setEmailVStart] = useState(false);
  // const [avtiveIndex, setActiveIndex] = useState();
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPassword, setEditPassword] = useState("");
  const emailCheck =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // phone
  const phoneChange = (val) => {
    setphoneVStart(true);
    setPhone(val);
    if (val === "") {
      // setNameMessage("");
      setPhoneMessage("Phone number required!");
      setPhoneDone(false);
    } else if (val.length !== 11) {
      // setNameMessage("");
      setPhoneMessage("Please enter valid phone number");
      setPhoneDone(false);
    } else {
      setPhoneMessage("");
      setPhoneDone(true);
    }
  };

  // email change
  const emailChange = (val) => {
    setEmail(val);
    setEmailVStart(true);
    if (val === "") {
      setEmailDone(false);
      // setNameMessage("");
      // setPhoneMessage("");
      // setPasswordMessage("");
      setEmailMessage("Email requied");
    } else if (!val.match(emailCheck)) {
      // setNameMessage("");
      // setPhoneMessage("");
      // setPasswordMessage("");
      setEmailMessage("Please enter vaild email address");
      setEmailDone(false);
    } else {
      setEmailMessage("");
      setEmailDone(true);
    }
  };
  const addData = async () => {
    if (name === "") {
      setNameMessage("Full name required!");
    } else if (phone === "") {
      setNameMessage("");
      setPhoneMessage("Phone number required!");
    } else if (phone.length !== 11) {
      setNameMessage("");
      setPhoneMessage("Please enter valid phone number");
    } else if (email === "") {
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("");
      setEmailMessage("Email requied");
    } else if (!email.match(emailCheck)) {
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("");
      setEmailMessage("Please enter vaild email address");
    } else if (password === "") {
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("Password required!");
    } else {
      setLoading(true);
      setNameMessage("");
      setPhoneMessage("");
      setPasswordMessage("");
      setEmailMessage("");

      const user = {
        name: name,
        phone: phone,
        email: email,
        password: password,
      };
      // users.push(user);
      // await setDoc(doc(db, "todos", "LA"), user);
      const docRef = await addDoc(collection(db, "todos"), user);
      const updateId = doc(db, "todos", docRef.id);
      // Set the "capital" field of the city 'DC'
      await updateDoc(updateId, {
        id: docRef.id,
      });
      // console.log("Document written with ID: ", docRef.id);
      setMessage("Success");
      setLoading(false);
      console.log("user>>>>>>>>", user);

      setTimeout(() => {
        setEmail("");
        setPhone("");
        setName("");
        setPassword("");
        setMessage("");
      }, 1000);
    }
  };

  // edit
  const editHandler = (index) => {
    // setEdit(true)
    // setActiveIndex(index)
    // console.log("user", users[index]);
    setEditName(users[index].name);
    setEditPhone(users[index].phone);
    setEditEmail(users[index].email);
    setEditPassword(users[index].password);
    for (let i = 0; i < users.length; i++) {
      if (index === i) {
        users[index].edit = true;
      } else {
        users[i].edit = false;
      }
      setUsers([...users]);
      console.log("edit>>>>>>> ", users[i].edit);
    }
  };

  // delete
  const deleteHandler = (index) => {
    // setActiveIndex(index)
    console.log("user", users[index]);
    users.splice(index, 1);
    setUsers([...users]);
  };



  // delete todo
const deleteTodo =async (id)=>{
console.log("deleteTodo",id)
await deleteDoc(doc(db, "todos", id));
// 
}
  return (
    <Layout username="User 2">
      <h1>About page</h1>
      <Input
        title="Full Name"
        value={name}
        onChange={(val) => setName(val.target.value)}
        type="text"
        placeholder="Enter Full Name"
        name="fullName"
        message={nameMessage}
        icon={false}
      />
      <Input
        title="Phone Number"
        value={phone}
        onChange={(val) => phoneChange(val.target.value)}
        type="number"
        placeholder="Enter Phone Number"
        name="phone"
        message={phoneMessage}
        icon={true}
        vStart={phoneVStart}
        isDone={phoneDone}
      />
      <Input
        title="Email Address"
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={(val) => emailChange(val.target.value)}
        name="email"
        message={emailMessage}
        icon={true}
        isDone={emailDone}
        vStart={emailVStart}
      />
      <Input
        title="Password"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(val) => setPassword(val.target.value)}
        name=""
        message={passwordMessage}
        icon={false}
      />

      <p style={{ color: "green" }}>{message}</p>
      {/* <Button title={loading ? "Loading ...." : "Add" } border={true} onClick={addData} /> */}
      <Button title="Add" loading={loading} border={true} onClick={addData} />

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
      {getDataLoading ? (
        <p>Loading ....</p>
      ) : (
        <div>
          {todos.length === 0 ? (
            <p>No data available</p>
          ) : (
            todos.map((item, index) => {
              return (
                <div key={index} className="card">
                  <h1>{item.name}</h1>
                  <button onClick={()=>deleteTodo(item.id)}>Delete</button>
                </div>
              );
            })
          )}
        </div>
      )}
      <hr />
      <Button
        title={show ? "Hide" : "Show"}
        border={false}
        onClick={() => setShow(!show)}
      />

      {show && (
        <div>
          {users.length === 0 ? (
            <p>Please add data</p>
          ) : (
            users.map((item, index) => {
              return (
                <div key={index} className="card">
                  {item.edit ? (
                    <div>
                      <Input
                        title="Full Name"
                        value={editName}
                        // onChange={(val) => setName(val.target.value)}
                        type="text"
                        placeholder="Enter Full Name"
                        name="fullName"
                        // message={nameMessage}
                        // icon={false}
                      />
                      <Input
                        title="Phone Number"
                        value={editPhone}
                        // onChange={(val) => phoneChange(val.target.value)}
                        type="number"
                        placeholder="Enter Phone Number"
                        name="phone"
                        // message={phoneMessage}
                        // icon={true}
                        // vStart={phoneVStart}
                        // isDone={phoneDone}
                      />
                      <Input
                        title="Email Address"
                        type="email"
                        placeholder="Enter Email Address"
                        value={editEmail}
                        // onChange={(val) => emailChange(val.target.value)}
                        name="email"
                        // message={emailMessage}
                        // icon={true}
                        // isDone={emailDone}
                        // vStart={emailVStart}
                      />
                      <Input
                        title="Password"
                        type="password"
                        placeholder="Enter Password"
                        value={editPassword}
                        // onChange={(val) => setPassword(val.target.value)}
                        name=""
                        // message={passwordMessage}
                        // icon={false}
                      />
                      <Button
                        title="Update"
                        border={false}
                        // onClick={() => editHandler(index)}
                      />
                    </div>
                  ) : (
                    <>
                      <p>{item.name}</p>
                      <p>{item.phone}</p>
                      <p>{item.password}</p>
                      <p>{item.email}</p>
                      <div>
                        <Button
                          title="Edit"
                          border={false}
                          onClick={() => editHandler(index)}
                        />
                        {/* <Button
                      title="Edit"
                      border={false}
                      onClick={() => {
                        setActiveIndex(index);
                        editHandler(index);
                      }}
                    /> */}
                        <Button
                          title="Delete"
                          border={true}
                          onClick={() => deleteHandler(index)}
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            })
          )}
        </div>
      )}
    </Layout>
  );
};
export default AboutUs;
