import React from "react";
import { Card ,BasicRating} from "../../components";
import Layout from "../../layout";
const Home = () => {
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
    return (
        <Layout username="User 1">
            <h1>Home page</h1>
            <div>
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
                <BasicRating />
                <Card data={users} />
            </div>
        </Layout >
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
