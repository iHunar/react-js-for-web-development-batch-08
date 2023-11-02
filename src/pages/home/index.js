import React from "react";
import { Navbar, Footer, Card } from "../../components";
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
        <div>
            <Navbar />
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
                <Card data={users} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
