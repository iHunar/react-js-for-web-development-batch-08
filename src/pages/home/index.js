import React, { useEffect, useState } from "react";
import { Card, BasicRating,Button } from "../../components";
import Layout from "../../layout";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "../../config/firebase";
const Home = () => {
  const auth = getAuth();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(">>>>>>>>>>>>>>photos", photos);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setPhotos(json);
  //       setLoading(false);
  //     });
  // }, []);

  console.log(">>>>>>>>>>>>>>photos", photos);
  const users = [
    {
      name: "User",
      email: "info@gmail.com",
    },
    {
      name: "User",
      email: "info@gmail.com",
    },
    {
      name: "User",
      email: "info@gmail.com",
    },
    {
      name: "User",
      email: "info@gmail.com",
    },
    {
      name: "User",
      email: "info@gmail.com",
    },
    {
      name: "User",
      email: "info@gmail.com",
    },
  ];

  const signUp = () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, "emdsdail@dsdsdsgmail.com", "password")
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user", user);
        setLoading(false)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
        setLoading(false)
      });
  };
  return (
    <Layout username="User 1" bgColor="blue">
      <h1>Home page</h1>
      {/* 1 */}
      {/* {users.map((item, index) => {
          return (
           <Card key={index} name={item.name} index={index} email={item.email}/>
          );
        })} */}
      {/* 2 */}
      {/* {users.map((item, index) => {
          return (
           <Card key={index}  index={index} item={item}/>
          );
        })} */}

      {/* 3 */}
      {/* <BasicRating /> */}
      {/* <Card data={users} /> */}

      {/* {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {photos?.map((item, index) => {
              return (
                <div key={index}>
                  <p>ID: {item.id}</p>
                  <p>{item.title}</p>
                  <img src={item.url} />
                </div>
              );
            })}
          </div>
        )} */}

      <hr />
      <h1>Sign Up</h1>
      <button onClick={signUp}>{loading ? "Loading...." : "Sign Up"}</button>
      <Button title="Sign Up" onClick={signUp} loading={loading}/>
    </Layout>
  );
};

export default Home;

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
// // col-md-6
// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={5}>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>1</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>2</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>3</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>4</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>5</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>6</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>7</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>8</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>9</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>10</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>11</Item>
//         </Grid>
//         <Grid item xl={1} lg={2} md={3} sm={4} xs={12}>
//           <Item>12</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
